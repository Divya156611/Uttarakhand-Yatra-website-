 /******************** API KEYS ********************/
const UNSPLASH_API_KEY = "A8eIoMWx1s-hgxz71ZYm6JHByb7G7TTFpPra_eQ1X0I";
const OPENWEATHER_API_KEY = "e90c2605bffee529038ea2322373e2a4";

/******************** STATE ********************/
const state = {
    currentTab: "home",
    currentSlide: 0,
    savedTrips: JSON.parse(localStorage.getItem("savedTrips")) || []
};

/******************** INIT ********************/
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initSlideshow();
    initSearchHandlers();
    initPopularDestinations();
    renderSavedTrips();
});

/******************** NAVIGATION ********************/
function initNavigation() {
    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
}

function switchTab(tab) {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    document.querySelector(`[data-tab="${tab}"]`).classList.add("active");

    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    document.getElementById(`${tab}-tab`).classList.remove("hidden");

    if (tab === "trips") renderSavedTrips();
}

/******************** SLIDESHOW ********************/
function initSlideshow() {
    const slides = document.querySelectorAll(".slide");
    setInterval(() => {
        slides[state.currentSlide].classList.remove("active");
        state.currentSlide = (state.currentSlide + 1) % slides.length;
        slides[state.currentSlide].classList.add("active");
    }, 5000);
}

/******************** SEARCH ********************/
function initSearchHandlers() {
    const bind = (input, btn) => {
        btn.addEventListener("click", () => input.value && startSearch(input.value));
        input.addEventListener("keypress", e => {
            if (e.key === "Enter" && input.value) startSearch(input.value);
        });
    };

    bind(
        document.getElementById("home-search"),
        document.getElementById("home-search-btn")
    );
    bind(
        document.getElementById("explore-search"),
        document.getElementById("explore-search-btn")
    );
}

function startSearch(destination) {
    switchTab("explore");
    searchDestination(destination.trim());
}

/******************** POPULAR DESTINATIONS ********************/
function initPopularDestinations() {
    document.querySelectorAll(".destination-card").forEach(card => {
        card.addEventListener("click", () => startSearch(card.dataset.city));
    });
}

/******************** MAIN SEARCH ********************/
async function searchDestination(destination) {
    showLoading();
    document.getElementById("explore-search").value = destination;

    try {
        const [photos, weather] = await Promise.all([
            fetchDestinationImages(destination),
            fetchWeatherData(destination)
        ]);

        displayDestinationDetails(destination, photos, weather);
    } catch (err) {
        displayError("Unable to load destination data");
    } finally {
        hideLoading();
    }
}

/******************** IMAGE SYSTEM ********************/

/* 1️⃣ Wikipedia Media API – MULTIPLE images (small towns also) */
async function fetchWikipediaImages(destination) {
    try {
        const baseUrl = "https://en.wikipedia.org/w/api.php";
        const pageRes = await fetch(
            `${baseUrl}?action=query&titles=${encodeURIComponent(destination)}&prop=images&format=json&origin=*`
        );
        const pageData = await pageRes.json();

        const page = pageData.query.pages[Object.keys(pageData.query.pages)[0]];
        if (!page.images) throw new Error("No images");

        const imageTitles = page.images
            .map(img => img.title)
            .filter(t =>
                t.match(/\.(jpg|jpeg|png)$/i) &&
                !t.toLowerCase().includes("logo") &&
                !t.toLowerCase().includes("map")
            )
            .slice(0, 6);

        if (imageTitles.length === 0) throw new Error("No valid images");

        const imagePromises = imageTitles.map(title =>
            fetch(
                `${baseUrl}?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json&origin=*`
            ).then(r => r.json())
        );

        const imageResults = await Promise.all(imagePromises);

        return imageResults.map(res => {
            const imgPage = res.query.pages[Object.keys(res.query.pages)[0]];
            return {
                urls: { regular: imgPage.imageinfo[0].url },
                alt_description: destination,
                user: {
                    name: "Wikipedia Commons",
                    links: { html: "https://commons.wikimedia.org" }
                }
            };
        });

    } catch {
        return null;
    }
}

/* 2️⃣ Unsplash – popular tourist places */
const DESTINATION_QUERIES = {
    Auli: "Auli ski resort Uttarakhand",
    Mussoorie: "Mussoorie hill station",
    Nainital: "Nainital lake",
    Kedarnath: "Kedarnath temple Himalayas",
    Haridwar: "Haridwar Ganga ghat",
    Manali: "Manali snow mountains",
    default: d => `${d} Uttarakhand tourism`
};

async function fetchUnsplashPhotos(destination) {
    const query = DESTINATION_QUERIES[destination] || DESTINATION_QUERIES.default(destination);

    const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=6&client_id=${UNSPLASH_API_KEY}`
    );

    if (!res.ok) throw new Error("Unsplash error");
    const data = await res.json();
    return data.results;
}

/* 3️⃣ Unified image handler */
async function fetchDestinationImages(destination) {
    const wiki = await fetchWikipediaImages(destination);
    if (wiki && wiki.length) return wiki;

    try {
        const unsplash = await fetchUnsplashPhotos(destination);
        if (unsplash.length) return unsplash;
    } catch {}

    return generateFallbackImages(destination);
}

/* 4️⃣ Final fallback */
function generateFallbackImages(destination) {
    return Array.from({ length: 6 }, () => ({
        urls: { regular: `https://placehold.co/600x400?text=${destination}` },
        alt_description: destination,
        user: { name: "Image unavailable", links: { html: "#" } }
    }));
}

/******************** WEATHER ********************/
async function fetchWeatherData(destination) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${destination},IN&units=metric&appid=${OPENWEATHER_API_KEY}`
        );
        if (!res.ok) throw new Error();
        return await res.json();
    } catch {
        return {
            list: [{
                dt: Date.now() / 1000,
                main: { temp: 25, feels_like: 27 },
                weather: [{ main: "Clear", description: "clear sky" }]
            }]
        };
    }
}

/******************** UI ********************/
function displayDestinationDetails(destination, photos, weather) {
    const exploreResults = document.getElementById("explore-results");
    const w = weather.list[0];

    exploreResults.innerHTML = `
        <div class="destination-details">
            <h2>${destination}</h2>

            <div class="weather-section">
                🌡 ${Math.round(w.main.temp)}°C – ${w.weather[0].description}
            </div>

            <div class="landmarks-grid">
                ${photos.map(p => `
                    <div class="landmark-card">
                        <img src="${p.urls.regular}" alt="${p.alt_description}">
                        <p>${p.alt_description}</p>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

/******************** SAVED TRIPS ********************/
function saveTrip(destination, imageUrl) {
    if (state.savedTrips.find(t => t.destination === destination)) return;
    state.savedTrips.push({ id: Date.now(), destination, imageUrl });
    localStorage.setItem("savedTrips", JSON.stringify(state.savedTrips));
}

function renderSavedTrips() {
    const grid = document.getElementById("saved-trips");
    grid.innerHTML = state.savedTrips.length
        ? state.savedTrips.map(t => `<div>${t.destination}</div>`).join("")
        : "<p>No saved trips</p>";
}

/******************** HELPERS ********************/
function showLoading() {
    document.getElementById("loading").classList.remove("hidden");
}
function hideLoading() {
    document.getElementById("loading").classList.add("hidden");
}
function displayError(msg) {
    document.getElementById("explore-results").innerHTML = `<p>${msg}</p>`;
}
