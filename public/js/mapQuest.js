function initMap() {
	L.mapquest.key = 'SORWpNJym8MASGxdhwhnSlMKbTtKD8zc';

// 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
  center: [32.87864642544405, -117.2358752727495],
  layers: L.mapquest.tileLayer('map'),
  zoom: 17,
  zoomControl: false
});
L.marker([32.878610384176795, -117.23589673042142]).addTo(map);
}