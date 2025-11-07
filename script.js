// Koordinat target
const coordinate = [-6.9117096639535935, 107.50483148900008];

// Inisialisasi map
const map = L.map('map').setView(coordinate, 15);

// Sumber tile gambar peta (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marker + popup
L.marker(coordinate)
  .addTo(map)
  .bindPopup("puri indah lestari")
  .openPopup();
