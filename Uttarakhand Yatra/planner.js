// Trip Planner JavaScript Functions

// Coordinates for Dehradun, Uttarakhand (A good central point)
const uttarakhandCenter = { lat: 30.3165, lng: 78.0322 };

// Global map variable
let map;

const OPENWEATHER_API_KEY = "e90c2605bffee529038ea2322373e2a4";
// Initialize and display the Google Map
function initMap() {
    // If Google Maps is available, initialize it
    if (typeof google !== 'undefined' && google.maps) {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: uttarakhandCenter,
            mapId: "DEMO_MAP_ID"
        });

        // Add a marker for the center point
        new google.maps.Marker({
            position: uttarakhandCenter,
            map: map,
            title: "Dehradun (Central Point)"
        });
    } else {
        // Fallback if Google Maps is not available
        const mapElement = document.getElementById("map");
        if (mapElement) {
            mapElement.innerHTML = `
                <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#f0f4f8;">
                    <div style="text-align:center;color:#667eea;">
                        <i class="fas fa-map-marked-alt" style="font-size:3rem;margin-bottom:1rem;"></i>
                        <p>Interactive Map</p>
                        <p style="font-size:0.9rem;color:#999;">Google Maps integration ready</p>
                    </div>
                </div>
            `;
        }
    }
}

// Plan trip function
// OpenWeather API endpoint for current weather by city name (using metric units)
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";

function planTrip() {
    const budget = document.getElementById("budget").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const startLocation = document.getElementById("startLocation").value;
    const destinationType = document.getElementById("destinationType").value;

    if (!startDate || !endDate) {
        alert("Please select start and end dates");
        return;
    }

    alert(`
Trip Planned Successfully! 🚀

Budget: ₹${budget}
Dates: ${startDate} → ${endDate}
Starting From: ${startLocation}
Preference: ${destinationType}
    `);
}
async function updateWeather() {
    const startLocation = document.getElementById("startLocation").value;
    
    // Display a temporary loading message to the user
    alert(`Fetching weather for ${startLocation}...`);

    try {
        const fullUrl = `${WEATHER_API_URL}?q=${startLocation},IN&units=metric&appid=${OPENWEATHER_API_KEY}`;

        const response = await fetch(fullUrl);
        const data = await response.json();

        // Check for common API errors (e.g., city not found)
        if (data.cod !== 200) {
            alert(`Error: Could not retrieve weather for ${startLocation}. Please check the city name.`);
            console.error("Weather API Error:", data.message);
            return;
        }

        // Extract key weather data
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed; // meters/sec

        // Construct the result message
        const weatherMessage = `
☁️ Current Weather in ${data.name}:

Temperature: ${temp}°C
Condition: ${description.charAt(0).toUpperCase() + description.slice(1)}
Humidity: ${humidity}%
Wind Speed: ${windSpeed} m/s
        `;

        // Display the results in an alert (for simple feedback)
        alert(weatherMessage);

        // OPTIONAL: You could now add a dedicated div in planner.html 
        // to display this data instead of an alert.
        
    } catch (error) {
        console.error("An error occurred during weather fetch:", error);
        alert("Sorry, an error occurred while fetching the weather data.");
    }
}


// Calculate number of days between dates
function calculateDays() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        // Calculate difference in days
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        
        const numDaysInput = document.getElementById('numDays');
        if (numDaysInput) {
            numDaysInput.value = diffDays + ' days';
        }
    }
}

// Load places for selected destination
function loadPlacesForDestination(destination) {
    // This would typically fetch from an API or database
    // For now, we'll use sample data
// Try to use touristPlaces data from destination.js if available
    let placesData = [];
    
    // Check if touristPlaces is available from destination.js
    if (typeof touristPlaces !== 'undefined') {
        placesData = touristPlaces.filter(place => place.city === destination);
    } else {
        // Fallback data if destination.js is not available
        const fallbackPlacesData = {
            dehradun: [
                { name: "Robber's Cave", description: "Natural cave formation with a stream", type: "viewpoint" },
                { name: "Sahastradhara", description: "Sulfur spring with therapeutic properties", type: "viewpoint" },
                { name: "Mindrolling Monastery", description: "One of the largest Buddhist monasteries", type: "temple" },
                { name: "Tapkeshwar Cave", description: "Sacred cave temple dedicated to Lord Shiva", type: "temple" },
                { name: "Rajaji National Park", description: "Tiger reserve with diverse wildlife", type: "viewpoint" },
                { name: "Forest Research Institute", description: "Premier forestry research institution with beautiful architecture", type: "viewpoint" }
            ],
            mussoorie: [
                { name: "Lal Tibba", description: "Panoramic views of Himalayan peaks", type: "viewpoint" },
                { name: "Gun Hill", description: "Second highest peak in Mussoorie", type: "viewpoint" },
                { name: "Kempty Falls", description: "Scenic waterfall 15 km from Mussoorie", type: "waterfall" },
                { name: "Camel's Back Road", description: "Scenic road with breathtaking views", type: "viewpoint" },
                { name: "Company Garden", description: "Beautiful landscaped gardens with musical fountains", type: "viewpoint" },
                { name: "Jwalaji Temple", description: "Temple dedicated to Goddess Jwala Ji with eternal flames", type: "temple" }
            ],
            rishikesh: [
                { name: "Lakshman Jhula", description: "Iconic suspension bridge and temple", type: "temple" },
                { name: "Ram Jhula", description: "Suspension bridge over the Ganges", type: "viewpoint" },
                { name: "Triveni Ghat", description: "Sacred ghat where three rivers meet", type: "viewpoint" },
                { name: "Neelkanth Mahadev Temple", description: "Ancient temple dedicated to Lord Shiva", type: "temple" },
                { name: "Parmarth Niketan", description: "Spiritual ashram hosting Ganga Aarti", type: "temple" },
                { name: "Beatles Ashram", description: "Historic ashram where Beatles stayed in 1968", type: "viewpoint" }
            ],
            haridwar: [
                { name: "Har Ki Pauri", description: "Sacred ghat on the banks of Ganges", type: "temple" },
                { name: "Mansa Devi Temple", description: "Temple dedicated to Goddess Mansa Devi", type: "temple" },
                { name: "Chandi Devi Temple", description: "Temple on Neel Parvat with panoramic views", type: "temple" },
                { name: "Maya Devi Temple", description: "Ancient temple marking Ganga's descent", type: "temple" },
                { name: "Bharat Mata Temple", description: "Unique temple dedicated to Mother India", type: "temple" },
                { name: "Vaishno Devi Temple", description: "Replica of famous Vaishno Devi shrine", type: "temple" }
            ],
            nainital: [
                { name: "Naini Lake", description: "Heart-shaped glacial lake surrounded by hills", type: "waterfall" },
                { name: "Snow View Point", description: "Panoramic views of Himalayan peaks", type: "viewpoint" },
                { name: "Mall Road", description: "Popular shopping and promenade area", type: "viewpoint" },
                { name: "Hanuman Garhi", description: "Temple dedicated to Lord Hanuman", type: "temple" },
                { name: "St. John's Church", description: "Historic church with beautiful architecture", type: "viewpoint" },
                { name: "Tiffin Top", description: "Scenic viewpoint offering panoramic views", type: "viewpoint" }
            ],
            almora: [
                { name: "Jageshwar Dham", description: "Ancient temple complex with over 100 stone temples", type: "temple" },
                { name: "Kathgodam Railway Station", description: "Gateway to Kumaon region", type: "viewpoint" },
                { name: "Binsar Wildlife Sanctuary", description: "Protected area with panoramic mountain views", type: "viewpoint" },
                { name: "Dwarahat", description: "Ancient temples with architectural beauty", type: "temple" },
                { name: "Zero Point", description: "Starting point for various treks", type: "viewpoint" },
                { name: "Gunasheel Falls", description: "Stunning waterfall in the district", type: "waterfall" }
            ]
        };
        
        placesData = fallbackPlacesData[destination] || [];
    }
    
  
    const placesGrid = document.getElementById('placesGrid');
   if (placesData.length > 0) {
        // Sort places by type to group similar attractions
        placesData.sort((a, b) => {
            if (a.type < b.type) return -1;
            if (a.type > b.type) return 1;
            return 0;
        });
        
        placesGrid.innerHTML = placesData.map((place, index) => `
            <div class="place-card" data-index="${index}" data-type="${place.type}">
  
                <input type="checkbox" class="place-checkbox" id="place${index}" checked>
                <div>
                    <div class="place-name">${place.name}</div>
                    <div class="place-desc">${place.description}</div>
                    <div class="place-type">${getTypeDisplayName(place.type)}</div>
                
                </div>
            </div>
        `).join('');
        
        // Add event listeners to place cards
        document.querySelectorAll('.place-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target !== this.querySelector('.place-checkbox')) {
                    const checkbox = this.querySelector('.place-checkbox');
                    checkbox.checked = !checkbox.checked;
                }
            });
        });
    } else {
        placesGrid.innerHTML = '<div class="place-card"><span>No places found for this destination</span></div>';
    }
}

// Get display name for place type
function getTypeDisplayName(type) {
    const typeNames = {
        'temple': 'Temple',
        'waterfall': 'Waterfall',
        'viewpoint': 'Viewpoint',
        'park': 'Park',
        'trek': 'Trek'
    };
    return typeNames[type] || type.charAt(0).toUpperCase() + type.slice(1);
}
// Generate trip plan
function generateTripPlan() {
    // Show loading
    const loadingElement = document.getElementById('loading');
    const resultsSection = document.getElementById('resultsSection');
    
    if (loadingElement) loadingElement.style.display = 'block';
    if (resultsSection) resultsSection.style.display = 'none';
    
    // Simulate processing time
    setTimeout(function() {
        // Hide loading
        if (loadingElement) loadingElement.style.display = 'none';
        
        // Show results
        if (resultsSection) resultsSection.style.display = 'block';
        
        // Generate itinerary
        generateItinerary();
        
        // Initialize map
        initMap();
        
        // Update budget summary
        updateBudgetSummary();
        
        // Scroll to results
        if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 2000);
}

// Generate itinerary
function generateItinerary() {
    const numDaysInput = document.getElementById('numDays');
    const destinationSelect = document.getElementById('destination');
    
    if (!numDaysInput || !destinationSelect) return;
    
    const numDaysValue = numDaysInput.value;
    const numDays = parseInt(numDaysValue) || 3;
    const destination = destinationSelect.value;
    const destinationName = destination.charAt(0).toUpperCase() + destination.slice(1);
    
    const itineraryDays = document.getElementById('itineraryDays');
    if (!itineraryDays) return;
    
    itineraryDays.innerHTML = '';
   // Get selected places
    const selectedPlaces = [];
    document.querySelectorAll('.place-card').forEach(card => {
        const checkbox = card.querySelector('.place-checkbox');
        if (checkbox && checkbox.checked) {
            const name = card.querySelector('.place-name').textContent;
            const description = card.querySelector('.place-desc').textContent;
            const type = card.dataset.type;
            selectedPlaces.push({ name, description, type });
        }
    });
    
    // If no places selected, use all places
    let placesToShow = selectedPlaces.length > 0 ? selectedPlaces : getAllPlacesForDestination(destination);
    
    // Limit to 10 places max for better presentation
    if (placesToShow.length > 10) {
        placesToShow = placesToShow.slice(0, 10);
    }
    
    // Distribute places across days
    const placesPerDay = Math.ceil(placesToShow.length / numDays);
    

  for (let day = 1; day <= Math.min(numDays, 7); day++) {
        const startIndex = (day - 1) * placesPerDay;
        const endIndex = Math.min(startIndex + placesPerDay, placesToShow.length);
        const dayPlaces = placesToShow.slice(startIndex, endIndex);
        
        if (dayPlaces.length > 0) {
            const dayCard = document.createElement('div');
            dayCard.className = 'day-card';
            dayCard.innerHTML = `
                <div class="day-header">
                    <div class="day-number">Day ${day}</div>
                    <div class="day-destination">${destinationName}</div>
                </div>
                <div class="day-places">
                    ${dayPlaces.map(place => `
                        <div class="place-item">
                            <div class="place-icon">
                                <i class="fas fa-${getPlaceIcon(place.type)}"></i>
                            </div>
                            <div class="place-details">
                                <div class="place-name">${place.name}</div>
                                <div class="place-desc">${place.description}</div>
                                <div class="place-meta">
                                    <span><i class="far fa-clock"></i> ${getEstimatedTime(place.type)}</span>
                                    <span><i class="fas fa-rupee-sign"></i> ${getEstimatedCost(place.type)}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            itineraryDays.appendChild(dayCard);
        }
    }
}

// Get all places for a destination
function getAllPlacesForDestination(destination) {
    // Try to use touristPlaces data from destination.js if available
    if (typeof touristPlaces !== 'undefined') {
        return touristPlaces.filter(place => place.city === destination);
    } else {
        // Fallback data
        const fallbackPlacesData = {
            dehradun: [
                { name: "Robber's Cave", description: "Natural cave formation with a stream", type: "viewpoint" },
                { name: "Sahastradhara", description: "Sulfur spring with therapeutic properties", type: "viewpoint" },
                { name: "Mindrolling Monastery", description: "One of the largest Buddhist monasteries", type: "temple" },
                { name: "Tapkeshwar Cave", description: "Sacred cave temple dedicated to Lord Shiva", type: "temple" },
                { name: "Rajaji National Park", description: "Tiger reserve with diverse wildlife", type: "viewpoint" }
            ],
            mussoorie: [
                { name: "Lal Tibba", description: "Panoramic views of Himalayan peaks", type: "viewpoint" },
                { name: "Gun Hill", description: "Second highest peak in Mussoorie", type: "viewpoint" },
                { name: "Kempty Falls", description: "Scenic waterfall 15 km from Mussoorie", type: "waterfall" },
                { name: "Camel's Back Road", description: "Scenic road with breathtaking views", type: "viewpoint" }
            ],
            rishikesh: [
                { name: "Lakshman Jhula", description: "Iconic suspension bridge and temple", type: "temple" },
                { name: "Ram Jhula", description: "Suspension bridge over the Ganges", type: "viewpoint" },
                { name: "Triveni Ghat", description: "Sacred ghat where three rivers meet", type: "viewpoint" },
                { name: "Neelkanth Mahadev Temple", description: "Ancient temple dedicated to Lord Shiva", type: "temple" }
            ],
            haridwar: [
                { name: "Har Ki Pauri", description: "Sacred ghat on the banks of Ganges", type: "temple" },
                { name: "Mansa Devi Temple", description: "Temple dedicated to Goddess Mansa Devi", type: "temple" },
                { name: "Chandi Devi Temple", description: "Temple on Neel Parvat with panoramic views", type: "temple" },
                { name: "Maya Devi Temple", description: "Ancient temple marking Ganga's descent", type: "temple" }
            ]
        };
        
        return fallbackPlacesData[destination] || [];
    }
}

// Get appropriate icon for place type
function getPlaceIcon(type) {
    const icons = {
        'temple': 'place-of-worship',
        'waterfall': 'water',
        'viewpoint': 'mountain',
        'park': 'tree',
        'trek': 'hiking'
    };
    return icons[type] || 'map-marker-alt';
}

// Get estimated time for place type
function getEstimatedTime(type) {
    const times = {
        'temple': '1-2 hours',
        'waterfall': '2-3 hours',
        'viewpoint': '1-2 hours',
        'park': '2-4 hours',
        'trek': '3-6 hours'
    };
    return times[type] || '1-2 hours';
}

// Get estimated cost for place type
function getEstimatedCost(type) {
    const costs = {
        'temple': 'Free-₹100',
        'waterfall': 'Free-₹200',
        'viewpoint': 'Free-₹100',
        'park': 'Free-₹150',
        'trek': '₹200-₹500'
    };
    return costs[type] || 'Free-₹200';

}

// Update budget summary
function updateBudgetSummary() {
    const budgetValueInput = document.getElementById('budgetValue');
    const numDaysInput = document.getElementById('numDays');
    
    if (!budgetValueInput || !numDaysInput) return;
    
    const totalBudget = parseInt(budgetValueInput.value) || 15000;
    const numDaysValue = numDaysInput.value;
    const numDays = parseInt(numDaysValue) || 3;
    
    const totalBudgetElement = document.getElementById('totalBudget');
    const dailyBudgetElement = document.getElementById('dailyBudget');
    const transportCostElement = document.getElementById('transportCost');
    const accommodationCostElement = document.getElementById('accommodationCost');
    
    if (totalBudgetElement) {
        totalBudgetElement.textContent = '₹' + totalBudget.toLocaleString();
    }
    
    if (dailyBudgetElement) {
        dailyBudgetElement.textContent = '₹' + Math.round(totalBudget / numDays).toLocaleString();
    }
    
    if (transportCostElement) {
        transportCostElement.textContent = '₹' + Math.round(totalBudget * 0.3).toLocaleString();
    }
    
    if (accommodationCostElement) {
        accommodationCostElement.textContent = '₹' + Math.round(totalBudget * 0.4).toLocaleString();
    }
}

// Edit plan
function editPlan() {
    const resultsSection = document.getElementById('resultsSection');
    const tripForm = document.getElementById('tripForm');
    
    if (resultsSection) resultsSection.style.display = 'none';
    if (tripForm) tripForm.scrollIntoView({ behavior: 'smooth' });
}

// New plan
function newPlan() {
    const resultsSection = document.getElementById('resultsSection');
    const tripForm = document.getElementById('tripForm');
    const placesGrid = document.getElementById('placesGrid');
    const numDaysInput = document.getElementById('numDays');
    
    if (resultsSection) resultsSection.style.display = 'none';
    if (tripForm) tripForm.reset();
    if (placesGrid) {
        placesGrid.innerHTML = '<div class="place-card"><input type="checkbox" class="place-checkbox" disabled><span>Select a destination to see places</span></div>';
    }
    if (numDaysInput) calculateDays();
}

// Save trip
function saveTrip() {
    alert('Trip saved successfully! You can view it in "My Trips" section.');
}

// Initialize the planner when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize date pickers with today's date
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    
    if (startDateInput) {
        startDateInput.value = today;
    }
    
    // Set minimum end date to today
    if (endDateInput) {
        endDateInput.min = today;
    }
    
    // Calculate number of days when dates change
    if (startDateInput) {
        startDateInput.addEventListener('change', calculateDays);
    }
    
    if (endDateInput) {
        endDateInput.addEventListener('change', calculateDays);
    }
    
    // Sync budget slider and input
    const budgetSlider = document.getElementById('budgetSlider');
    const budgetValue = document.getElementById('budgetValue');
    
    if (budgetSlider && budgetValue) {
        budgetSlider.addEventListener('input', function() {
            budgetValue.value = this.value;
        });
        
        budgetValue.addEventListener('input', function() {
            budgetSlider.value = this.value;
        });
    }
    
    // Budget category selection
    const budgetCategories = document.querySelectorAll('.budget-category');
    budgetCategories.forEach(category => {
        category.addEventListener('click', function() {
            budgetCategories.forEach(cat => {
                cat.classList.remove('active');
            });
            this.classList.add('active');
            
            if (budgetValue) {
                budgetValue.value = this.dataset.budget;
            }
            
            if (budgetSlider) {
                budgetSlider.value = this.dataset.budget;
            }
        });
    });
    
    // Destination change handler
    const destinationSelect = document.getElementById('destination');
    const travelToInput = document.getElementById('travelTo');
    
    if (destinationSelect) {
        destinationSelect.addEventListener('change', function() {
            const destination = this.value;
            if (destination) {
                if (travelToInput) {
                    travelToInput.value = destination.charAt(0).toUpperCase() + destination.slice(1);
                }
                loadPlacesForDestination(destination);
            } else {
                if (travelToInput) {
                    travelToInput.value = '';
                }
                const placesGrid = document.getElementById('placesGrid');
                if (placesGrid) {
                    placesGrid.innerHTML = '<div class="place-card"><input type="checkbox" class="place-checkbox" disabled><span>Select a destination to see places</span></div>';
                }
            }
        });
    }
    
    // Form submission
    const tripForm = document.getElementById('tripForm');
    if (tripForm) {
        tripForm.addEventListener('submit', function(e) {
            e.preventDefault();
            generateTripPlan();
        });
    }
    
    // Action buttons
    const editPlanBtn = document.getElementById('editPlanBtn');
    const newPlanBtn = document.getElementById('newPlanBtn');
    const saveTripBtn = document.getElementById('saveTripBtn');
    
    if (editPlanBtn) {
        editPlanBtn.addEventListener('click', editPlan);
    }
    
    if (newPlanBtn) {
        newPlanBtn.addEventListener('click', newPlan);
    }
    
    if (saveTripBtn) {
        saveTripBtn.addEventListener('click', saveTrip);
    }
    
    // Initialize days calculation
    calculateDays();
});