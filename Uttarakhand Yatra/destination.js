const uttarakhandPlaces = {
    "dehradun": { lat: 30.3165, lon: 78.0322, displayName: "Dehradun" },
    "mussoorie": { lat: 30.4598, lon: 78.0644, displayName: "Mussoorie" },
    "rishikesh": { lat: 30.0869, lon: 78.2676, displayName: "Rishikesh" },
    "haridwar": { lat: 29.9457, lon: 78.1642, displayName: "Haridwar" },
    "nainital": { lat: 29.3803, lon: 79.4636, displayName: "Nainital" },
    "almora": { lat: 29.5854, lon: 79.6584, displayName: "Almora" },
    "ranikhet": { lat: 29.6382, lon: 79.4490, displayName: "Ranikhet" },
    "auli": { lat: 30.5500, lon: 79.8000, displayName: "Auli" },
    "joshimath": { lat: 30.5500, lon: 79.5333, displayName: "Joshimath" },
    "badrinath": { lat: 30.7433, lon: 79.9083, displayName: "Badrinath" },
    "kedarnath": { lat: 30.7346, lon: 79.0522, displayName: "Kedarnath" },
    "uttarkashi": { lat: 30.8827, lon: 78.4543, displayName: "Uttarkashi" },
    "champawat": { lat: 29.3288, lon: 79.8103, displayName: "Champawat" },
    "pithoragarh": { lat: 29.5822, lon: 80.2177, displayName: "Pithoragarh" },
    "tehri": { lat: 30.3972, lon: 78.4747, displayName: "Tehri" },
    "rudraprayag": { lat: 30.3128, lon: 78.9733, displayName: "Rudraprayag" },
    "chamoli": { lat: 30.6500, lon: 79.4000, displayName: "Chamoli" },
    "pauri": { lat: 30.0333, lon: 78.8000, displayName: "Pauri" },
    "bageshwar": { lat: 29.9333, lon: 79.7667, displayName: "Bageshwar" },
    "dharchula": { lat: 30.0000, lon: 80.3833, displayName: "Dharchula" },
     "nanakmatta": { lat: 28.8500, lon: 80.3167, displayName: "Nanakmatta" },
    
    // Additional small towns and places
    "tanakpur": { lat: 29.0617, lon: 80.1364, displayName: "Tanakpur" },
    "kashipur": { lat: 29.2546, lon: 78.9575, displayName: "Kashipur" },
    "rudrapur": { lat: 28.9333, lon: 79.3667, displayName: "Rudrapur" },
    "haldwani": { lat: 29.2167, lon: 79.5333, displayName: "Haldwani" },
    "kichha": { lat: 28.8987, lon: 79.5453, displayName: "Kichha" },
    "roorkee": { lat: 29.8578, lon: 77.8842, displayName: "Roorkee" },
    "devprayag": { lat: 30.3264, lon: 78.9214, displayName: "Devprayag" },
    "vijaypur": { lat: 29.6333, lon: 78.4000, displayName: "Vijaypur" },
    "lalkuan": { lat: 29.0167, lon: 79.2167, displayName: "Lalkuan" },
    "sitarganj": { lat: 28.8981, lon: 79.7397, displayName: "Sitarganj" },
    "gadarpur": { lat: 28.8947, lon: 79.5231, displayName: "Gadarpur" },
    "bhimtal": { lat: 29.3333, lon: 79.5333, displayName: "Bhimtal" },
    "khatima": { lat: 28.8981, lon: 79.9603, displayName: "Khatima" },
    "nanakmatta": { lat: 28.8667, lon: 80.0500, displayName: "Nanakmatta" },
    "gairsain": { lat: 30.3667, lon: 79.2167, displayName: "Gairsain" },
    "chinyalisaur": { lat: 30.6333, lon: 79.6500, displayName: "Chinyalisaur" },
    "munsyari": { lat: 30.1000, lon: 80.2500, displayName: "Munsyari" },
    "munsiari": { lat: 30.1000, lon: 80.2500, displayName: "Munsiari" },
    "dwarahat": { lat: 29.7500, lon: 79.5167, displayName: "Dwarahat" },
    "someshwar": { lat: 30.2167, lon: 78.3667, displayName: "Someshwar" },
    "lodhve": { lat: 30.6667, lon: 79.2500, displayName: "Lodhve" },
    "kalsi": { lat: 30.3167, lon: 78.0667, displayName: "Kalsi" },
    "chakrata": { lat: 30.6667, lon: 78.0167, displayName: "Chakrata" },
    "tyuni": { lat: 30.5167, lon: 78.0500, displayName: "Tyuni" },
    "sultanpur": { lat: 29.3333, lon: 78.2167, displayName: "Sultanpur" }
};

// Tourist places data categorized by type
const touristPlaces = [
    // Temples
    { name: "Kedarnath Temple", city: "kedarnath", type: "temple", description: "One of the twelve Jyotirlingas and a major pilgrimage site in Hinduism." },
    { name: "Badrinath Temple", city: "badrinath", type: "temple", description: "One of the Char Dham pilgrimage sites and dedicated to Lord Vishnu." },
    { name: "Har Ki Pauri", city: "haridwar", type: "temple", description: "One of the oldest and most sacred ghats on the banks of the Ganges." },
    { name: "Trimbakeshwar Temple", city: "nashik", type: "temple", description: "An ancient Hindu temple dedicated to Lord Shiva." },
    { name: "Tapovan Temple", city: "rishikesh", type: "temple", description: "A peaceful temple located near Lakshman Jhula in Rishikesh." },
    { name: "ISKCON Temple", city: "haldwani", type: "temple", description: "A beautiful temple dedicated to Lord Krishna with peaceful surroundings." },
    { name: "Nanakmatta Sahib", city: "nanakmatta", type: "temple", description: "A revered Sikh Gurudwara associated with Guru Nanak Dev Ji." },
    { name: "Dwarahat Temple", city: "dwarahat", type: "temple", description: "Ancient temples dedicated to Lord Shiva with architectural beauty." },
     { name: "Lakshman Jhula", city: "rishikesh", type: "temple", description: "Iconic suspension bridge and temple complex dedicated to Lord Lakshman." },
    { name: "Neelkanth Mahadev Temple", city: "rishikesh", type: "temple", description: "Ancient temple dedicated to Lord Shiva with mythological significance." },
    { name: "Chandika Devi Temple", city: "haridwar", type: "temple", description: "Temple dedicated to Goddess Chandika with panoramic city views." },
    { name: "Maya Devi Temple", city: "haridwar", type: "temple", description: "Ancient temple marking the spot where Mother Ganga descends to earth." },
    { name: "Parmarth Niketan", city: "rishikesh", type: "temple", description: "Spiritual ashram on the banks of the Ganges hosting the evening Ganga Aarti." },
    { name: "Bhakti Dham", city: "haridwar", type: "temple", description: "Large spiritual complex with replicas of major Indian temples and shrines." },
    { name: "Jageshwar Dham", city: "almora", type: "temple", description: "Ancient temple complex with over 100 stone temples dedicated to Lord Shiva." },
    { name: "Badrinath Temple Viewpoint", city: "chamoli", type: "temple", description: "Sacred temple dedicated to Lord Vishnu, one of the Char Dham pilgrimage sites." },
    { name: "Mansa Devi Temple", city: "haridwar", type: "temple", description: "Ancient temple dedicated to Goddess Mansa Devi, one of the Panch Tirthas." },
    { name: "Tungnath Temple", city: "chamoli", type: "temple", description: "One of the highest Shiva temples in the world, part of the Panch Kedar pilgrimage." },
    { name: "Kalika Temple", city: "alamadi", type: "temple", description: "Ancient temple dedicated to Goddess Kalika, known for its spiritual significance." },
    { name: "Guptkashi Temple", city: "guptkashi", type: "temple", description: "Sacred temple dedicated to Lord Shiva, gateway to Kedarnath." },
    
    // Waterfalls
    { name: "Kempty Falls", city: "mussoorie", type: "waterfall", description: "A scenic waterfall located about 15 km from Mussoorie." },
    { name: "George Falls", city: "mussoorie", type: "waterfall", description: "A beautiful waterfall located near George Estate in Mussoorie." },
    { name: "Bhatta Falls", city: "dehradun", type: "waterfall", description: "A picturesque waterfall located near Dehradun." },
    { name: "Gunasheel Falls", city: "almora", type: "waterfall", description: "A stunning waterfall located in the Almora district." },
    { name: "Mayavati Ashram Falls", city: "champawat", type: "waterfall", description: "A serene waterfall near Mayavati Ashram in Champawat." },
    { name: "Surkanda Devi Waterfall", city: "tanakpur", type: "waterfall", description: "A beautiful waterfall near Surkanda Devi Temple in Tanakpur region." },
    { name: "Lohawati Waterfall", city: "almora", type: "waterfall", description: "A hidden gem waterfall surrounded by lush green forests." },
     { name: "Jhirna Waterfall", city: "dehradun", type: "waterfall", description: "Seasonal waterfall in Rajaji National Park surrounded by wildlife." },
    { name: "Tibba Waterfall", city: "mussoorie", type: "waterfall", description: "Hidden waterfall near Tibba Peak offering tranquil surroundings." },
    { name: "Shivpuri Waterfall", city: "dehradun", type: "waterfall", description: "Picturesque waterfall near Shivpuri village in Rajaji National Park." },
    { name: "Neer Garh Waterfall", city: "rishikesh", type: "waterfall", description: "Scenic waterfall near Neer Garh village, perfect for nature lovers." },
    { name: "Binsar Wildlife Sanctuary Waterfall", city: "almora", type: "waterfall", description: "Beautiful waterfall within the Binsar Wildlife Sanctuary surrounded by oak and rhododendron forests." },
      { name: "Sahastradhara Falls", city: "dehradun", type: "waterfall", description: "Sulfur spring waterfall known for its therapeutic properties." },
    { name: "Tons River Waterfall", city: "uttarkashi", type: "waterfall", description: "Scenic waterfall on the Tons River, perfect for nature photography." },
    { name: "Kanatal Waterfall", city: "tehri", type: "waterfall", description: "Beautiful waterfall near Kanatal Lake with serene surroundings." },
  
    // Viewpoints
    { name: "Lal Tibba", city: "mussoorie", type: "viewpoint", description: "Offers panoramic views of the Himalayan peaks and surrounding valleys." },
    { name: "Gun Hill", city: "mussoorie", type: "viewpoint", description: "The second highest peak in Mussoorie offering spectacular views." },
    { name: "Camel's Back Road", city: "mussoorie", type: "viewpoint", description: "A scenic road offering breathtaking views of the Doon Valley." },
    { name: "Robber's Cave", city: "dehradun", type: "viewpoint", description: "A natural cave formation with a stream passing through it." },
    { name: "Sahastradhara", city: "dehradun", type: "viewpoint", description: "A sulfur spring with therapeutic properties and scenic surroundings." },
    { name: "Rajaji National Park Viewpoint", city: "dehradun", type: "viewpoint", description: "Offers views of the park's diverse wildlife and landscape." },
    { name: "Naini Peak", city: "nainital", type: "viewpoint", description: "The highest point in Nainital offering panoramic views of the town." },
    { name: "Snow View Point", city: "auli", type: "viewpoint", description: "A viewpoint offering stunning views of snow-covered peaks." },
    { name: "Kuari Pass", city: "chamoli", type: "viewpoint", description: "A high-altitude pass offering views of several Himalayan peaks." },
    { name: "Chinyalisaur Viewpoint", city: "chinyalisaur", type: "viewpoint", description: "Panoramic views of the Himalayan range from this high-altitude location." },
    { name: "Munsyari Viewpoint", city: "munsyari", type: "viewpoint", description: "Stunning views of Panchachuli peaks and surrounding valleys." },
    { name: "Tyuni Viewpoint", city: "tyuni", type: "viewpoint", description: "Beautiful viewpoint overlooking the Yamuna valley and surrounding hills." },
    { name: "Chakrata Viewpoint", city: "chakrata", type: "viewpoint", description: "Scenic viewpoints offering views of the Doon Valley and surrounding hills." },
    
    // Additional places for small towns
    { name: "Tanakpur Barrage", city: "tanakpur", type: "viewpoint", description: "A massive barrage on the Sharda River offering scenic views and boating facilities." },
    { name: "Kashipur Museum", city: "kashipur", type: "viewpoint", description: "Historical museum showcasing artifacts and history of the region." },
    { name: "Haldwani Lake", city: "haldwani", type: "waterfall", description: "A beautiful lake surrounded by gardens and walking paths." },
    { name: "Roorkee Canal", city: "roorkee", type: "viewpoint", description: "Historic canal system with beautiful walkways and bridges." },
    { name: "Bhimtal Lake", city: "bhimtal", type: "waterfall", description: "A beautiful heart-shaped lake surrounded by hills and gardens." },
    { name: "Kichha Industrial Area", city: "kichha", type: "viewpoint", description: "Modern industrial hub with planned infrastructure and facilities." },
    { name: "Sitarganj Market", city: "sitarganj", type: "viewpoint", description: "Local market offering traditional handicrafts and local products." },
    { name: "Lalkuan Railway Station", city: "lalkuan", type: "viewpoint", description: "Historic railway station with colonial architecture." },
      { name: "Ranikhet Viewpoint", city: "ranikhet", type: "viewpoint", description: "Scenic viewpoint offering panoramic views of the Himalayas and surrounding valleys." },
    { name: "Bageshwar Viewpoint", city: "bageshwar", type: "viewpoint", description: "Beautiful viewpoint overlooking the confluence of Sarayu and Gomti rivers." },
    { name: "Joshimath Viewpoint", city: "joshimath", type: "viewpoint", description: "Scenic viewpoint offering views of Nanda Devi and other Himalayan peaks." },
    { name: "Kashipur Viewpoint", city: "kashipur", type: "viewpoint", description: "Scenic viewpoint offering panoramic views of the surrounding landscape." },
    { name: "Roorkee Viewpoint", city: "roorkee", type: "viewpoint", description: "Beautiful viewpoint overlooking the historic town of Roorkee." },
    
    
    // Parks and Nature Reserves
    { name: "Rajaji National Park", city: "dehradun", type: "viewpoint", description: "Tiger reserve and national park home to diverse flora and fauna." },
    { name: "Corbett National Park", city: "nainital", type: "viewpoint", description: "India's first national park famous for tiger conservation." },
    { name: "Valley of Flowers", city: "auli", type: "viewpoint", description: "UNESCO World Heritage Site with endemic alpine flowers and meadows." },
    { name: "Nanda Devi National Park", city: "auli", type: "viewpoint", description: "UNESCO World Heritage Site surrounding Mount Nanda Devi." },
    { name: "Binsar Wildlife Sanctuary", city: "almora", type: "viewpoint", description: "Protected area known for its oak and rhododendron forests and panoramic mountain views." },
     { name: "Ranikhet Wildlife Sanctuary", city: "ranikhet", type: "park", description: "Beautiful sanctuary with diverse flora and fauna in the Kumaon region." },
    { name: "Bhimtal Lake Garden", city: "bhimtal", type: "park", description: "Scenic garden around Bhimtal Lake with beautiful landscaping." },
      { name: "Panchachuli Base Camp Trek", city: "pithoragarh", type: "trek", description: "Challenging trek to the base camp of Panchachuli peaks." },
    { name: "Ranikhet Trek", city: "ranikhet", type: "trek", description: "Scenic trek through beautiful forests and meadows in Ranikhet." },
    { name: "Bageshwar Trek", city: "bageshwar", type: "trek", description: "Beautiful trek through the scenic landscape of Bageshwar." },
   
    // Lakes and Water Bodies
    { name: "Naini Lake", city: "nainital", type: "waterfall", description: "Heart-shaped glacial lake surrounded by hills and tourist attractions." },
    { name: "Sattal Lakes", city: "nainital", type: "waterfall", description: "Cluster of seven interconnected lakes surrounded by dense forests." },
    { name: "Roopkund Lake", city: "auli", type: "waterfall", description: "High-altitude glacial lake famous for ancient human skeletons." },
      { name: "Bhimtal Lake", city: "bhimtal", type: "waterfall", description: "Scenic lake surrounded by beautiful hills and gardens." },
    { name: "Sauraha Lake", city: "chitwan", type: "waterfall", description: "Beautiful lake in the Chitwan region with scenic surroundings." },
   { name: "Bhimtal Lake", city: "bhimtal", type: "waterfall", description: "Scenic lake surrounded by beautiful hills and gardens." },
    { name: "Sauraha Lake", city: "chitwan", type: "waterfall", description: "Beautiful lake in the Chitwan region with scenic surroundings." },
    
    // Adventure and Trekking Spots
    { name: "Trek to Nag Tibba", city: "dehradun", type: "viewpoint", description: "Easy trek offering panoramic views of Himalayan peaks." },
    { name: "Har Ki Dun Trek", city: "dehradun", type: "viewpoint", description: "Scenic trek through ancient villages and high-altitude meadows." },
    { name: "Valley of Flowers Trek", city: "auli", type: "viewpoint", description: "Trek to UNESCO World Heritage Site with diverse alpine flowers." },
    { name: "Chardham Helicopter Tour", city: "dehradun", type: "viewpoint", description: "Helicopter tour covering all four Char Dham sites in a single day." },
     // Adventure Activities
    { name: "River Rafting in Rishikesh", city: "rishikesh", type: "viewpoint", description: "Thrilling white-water rafting experience on the Ganges." },
    { name: "Paragliding in Bir Billing", city: "dehradun", type: "viewpoint", description: "Adventure sport offering aerial views of the Himalayas." },
    { name: "Skiing in Auli", city: "auli", type: "viewpoint", description: "Popular skiing destination with well-maintained slopes." },
    { name: "Rock Climbing in Rishikesh", city: "rishikesh", type: "viewpoint", description: "Exciting rock climbing experiences for adventure enthusiasts." },
    { name: "Zip Lining in Rishikesh", city: "rishikesh", type: "viewpoint", description: "Adventure activity offering thrilling rides with valley views." },
    { name: "Camping in Ranikhet", city: "ranikhet", type: "viewpoint", description: "Scenic camping experience in the beautiful hills of Ranikhet." },
    { name: "Mountain Biking in Dehradun", city: "dehradun", type: "viewpoint", description: "Exciting mountain biking trails through scenic landscapes." },
    
    // Cultural and Heritage Sites
    { name: "Forest Research Institute", city: "dehradun", type: "viewpoint", description: "Premier forestry research institution with beautiful colonial architecture." },
    { name: "Clock Tower", city: "dehradun", type: "viewpoint", description: "Historic landmark and commercial hub in the heart of Dehradun." },
    { name: "Mall Road", city: "nainital", type: "viewpoint", description: "Popular promenade offering shopping and scenic views of Naini Lake." },
    { name: "St. John's Church", city: "nainital", type: "viewpoint", description: "Historic church with beautiful stained glass windows and architecture." },
    { name: "Tiffin Top", city: "nainital", type: "viewpoint", description: "Scenic viewpoint offering panoramic views of Naini Lake and surroundings." },
    { name: "Campa Cola Building", city: "mussoorie", type:"viewpoint", description: "Iconic unfinished building offering unique photo opportunities." },
    { name: "Robber's Cave Museum", city: "dehradun", type: "viewpoint", description: "Historic museum showcasing local culture and heritage." },
    { name: "Laxman Siddh Cave", city: "almora", type: "viewpoint", description: "Sacred cave with ancient inscriptions and spiritual significance." },
    
    // Spiritual Centers
    { name: "Anand Prakash Ashram", city: "rishikesh", type: "temple", description: "Peaceful ashram offering yoga and meditation programs." },
    { name: "Osho Tapovan", city: "rishikesh", type: "temple", description: "Spiritual center offering meditation and wellness retreats." },
    { name: "Vivekananda Rock Memorial", city: "uttarkashi", type: "temple", description: "Sacred site associated with Swami Vivekananda's meditation." },
    { name: "Shivananda Ashram", city: "rishikesh", type: "temple", description: "Spiritual retreat offering yoga, meditation, and Vedanta teachings." },
    { name: "Parmarth Niketan Ashram", city: "rishikesh", type: "temple", description: "Large spiritual complex on the banks of the Ganges." },
    { name: "Sivananda Ashram", city: "rameshwaram", type: "temple", description: "Spiritual center offering yoga, meditation, and spiritual teachings." },
    
    // Scenic Drives
    { name: "Chardham Helicopter Tour", city: "dehradun", type: "viewpoint", description: "Helicopter tour covering all four Char Dham sites in a single day." },
    { name: "Mussoorie-Kempty Falls Drive", city: "mussoorie", type: "viewpoint", description: "Scenic drive connecting Mussoorie with its famous waterfall." },
   { name: "Dehradun-Rishikesh Highway", city: "dehradun", type: "viewpoint", description: "Picturesque highway along the Ganges river valley." },
    { name: "Ranikhet-Almora Drive", city: "ranikhet", type: "viewpoint", description: "Scenic drive through beautiful hills and valleys." },
    { name: "Bageshwar-Chamoli Drive", city: "bageshwar", type: "viewpoint", description: "Scenic drive through the beautiful landscape of Kumaon." }
];

// DOM Elements
let map;
let markers = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    initializeFilters();
    initializeMap();
    
    // Load popular destinations initially
    loadPopularDestinations();
});

// Initialize search functionality
function initializeSearch() {
    const searchInput = document.getElementById('citySearch');
    const searchBtn = document.getElementById('searchBtn');
    const suggestionsContainer = document.getElementById('searchSuggestions');
    
    // Event listeners for search
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Auto-suggest functionality
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query.length > 0) {
            showSuggestions(query);
        } else {
            suggestionsContainer.classList.remove('active');
        }
    });
    
    // Close suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            suggestionsContainer.classList.remove('active');
        }
    });
}

// Perform search
function performSearch() {
    const searchInput = document.getElementById('citySearch');
    const cityName = searchInput.value.trim().toLowerCase();
    
    if (cityName) {
        searchCity(cityName);
    }
}

// Show suggestions
function showSuggestions(query) {
    const suggestionsContainer = document.getElementById('searchSuggestions');
    const suggestions = Object.keys(uttarakhandPlaces).filter(city => 
        city.includes(query) || uttarakhandPlaces[city].displayName.toLowerCase().includes(query)
    );
    
    if (suggestions.length > 0) {
        suggestionsContainer.innerHTML = suggestions.map(city => `
            <div class="suggestion-item" data-city="${city}">
                <strong>${uttarakhandPlaces[city].displayName}</strong>
            </div>
        `).join('');
        
        suggestionsContainer.classList.add('active');
        
        // Add event listeners to suggestion items
        document.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', function() {
                const city = this.getAttribute('data-city');
                document.getElementById('citySearch').value = uttarakhandPlaces[city].displayName;
                suggestionsContainer.classList.remove('active');
                searchCity(city);
            });
        });
    } else {
        suggestionsContainer.classList.remove('active');
    }
}

// Search city and display places
function searchCity(cityName) {
    const displayName = uttarakhandPlaces[cityName] ? uttarakhandPlaces[cityName].displayName : 
                       capitalizeFirstLetter(cityName);
    
    // Update city name display
    document.getElementById('cityName').textContent = displayName;
    
    // Filter places for this city
    const cityPlaces = touristPlaces.filter(place => place.city === cityName);
    
    // Display places
    displayPlaces(cityPlaces);
    
    // Update map
    if (uttarakhandPlaces[cityName]) {
        updateMap(uttarakhandPlaces[cityName].lat, uttarakhandPlaces[cityName].lon, displayName);
    }
}

// Load popular destinations
function loadPopularDestinations() {
    document.getElementById('cityName').textContent = "Popular Destinations";
    displayPlaces(touristPlaces);
    
    // Center map on Uttarakhand
    updateMap(30.0668, 79.0193, "Uttarakhand");
}

// Display places in the grid
function displayPlaces(places) {
    const placesGrid = document.getElementById('placesGrid');
    
    if (places.length === 0) {
        placesGrid.innerHTML = `
            <div class="placeholder-card">
                <i class="fas fa-search-location"></i>
                <p>No places found for this location</p>
                <p>Try searching for: Dehradun, Mussoorie, Rishikesh, Haridwar, Nainital</p>
            </div>
        `;
        return;
    }
    
    placesGrid.innerHTML = places.map(place => `
        <div class="place-card" data-type="${place.type}">
            <div class="place-image" style="background-image: url('https://placehold.co/600x400?text=${encodeURIComponent(place.name)}')">
                <div class="place-badge ${place.type}">${getTypeDisplayName(place.type)}</div>
            </div>
            <div class="place-info">
                <h3 class="place-name">${place.name}</h3>
                <p class="place-description">${place.description}</p>
                <div class="place-rating">
                    <i class="fas fa-star"></i>
                    <span>4.5</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Get display name for place type
function getTypeDisplayName(type) {
    const typeNames = {
        'temple': 'Temple',
        'waterfall': 'Waterfall',
        'viewpoint': 'Viewpoint'
    };
    return typeNames[type] || type;
}

// Initialize filters
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter places
            const filterType = this.getAttribute('data-filter');
            filterPlaces(filterType);
        });
    });
}

// Filter places by type
function filterPlaces(type) {
    const placeCards = document.querySelectorAll('.place-card');
    
    placeCards.forEach(card => {
        if (type === 'all' || card.getAttribute('data-type') === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize map
function initializeMap() {
    // This will be called by Google Maps API callback
}

// Initialize map callback function
function initMap() {
    const mapOptions = {
        zoom: 8,
        center: { lat: 30.0668, lng: 79.0193 } // Center of Uttarakhand
    };
    
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Update map with new location
function updateMap(lat, lng, locationName) {
    if (map) {
        const position = { lat: lat, lng: lng };
        map.setCenter(position);
        map.setZoom(12);
        
        // Clear existing markers
        markers.forEach(marker => marker.setMap(null));
        markers = [];
        
        // Add new marker
        const marker = new google.maps.Marker({
            position: position,
            map: map,
            title: locationName
        });
        
        markers.push(marker);
    }
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}