// Coordenadas
const artensal = [5.023072, -74.004957];
const velasConProposito = [5.023180, -74.004880];
const estacionTren = [5.021815335708012, -74.00124928963021];
const catedralSal = [5.018774, -74.010597];

// Mapa centrado
const map = L.map('map').setView(artensal, 15);

// Capa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Íconos personalizados
const redIcon = L.icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const blueIcon = L.icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const greenIcon = L.icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

// Marcador ArtenSal (azul)
L.marker(artensal, { icon: blueIcon }).addTo(map)
  .bindPopup("<b>ArtenSal</b><br><a href='artensal.html'>Ver más</a>");

// Marcador Velas con Propósito (verde)
L.marker(velasConProposito, { icon: greenIcon }).addTo(map)
  .bindPopup("<b>Velas con Propósito</b><br><a href='velas.html'>Ver más</a>");

// Marcadores rojos
L.marker(estacionTren, { icon: redIcon }).addTo(map)
  .bindPopup("<b>Estación del Tren</b>");

L.marker(catedralSal, { icon: redIcon }).addTo(map)
  .bindPopup("<b>Catedral de Sal</b>");
