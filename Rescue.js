

// Initialize the map
var map = L.map('map').setView([6.5244, 3.3792], 13); // Center on Lagos, Nigeria

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for the victim's location
var marker = L.marker([6.5244, 3.3792]).addTo(map);
marker.bindPopup("<b>Victim Location</b><br>Lat: 6.5244, Lon: 3.3792").openPopup();