// Initialiaxe the maps function
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });


const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Add markers on all visited
const locations = [
    {
        lat: 40.785091,
        lng: -73.96
    },
    {
        lat: 41.84045,
        lng: -73.874245
    },
    {
        lat: 40.754392,
        lng: -73.984016
    }
];

// location, current value of where we are in the array as we loop through
// i is the current index number of where we are in the array
const markers = locations.map(function(location, i) {
return new google.maps.Marker({
    position: location,
    label: labels[i % labels.length]
    });
});
// Add a marker clusterer to manage the markers.
const markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
};