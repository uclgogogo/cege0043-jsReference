var navigatorid;
var userMarker;

function trackLocation() {
    if (navigator.geolocation) {
        navigatorid =navigator.geolocation.watchPosition(showPosition);
    } else {
        document.getElementById('showLocation').innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {

    userMarker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
    .bindPopup("This is location lat/lon: "+ position.coords.latitude + " "+ position.coords.longitude);
}

if (userMarker){
mymap.removeLayer(userMarker);
}

function stopTrackLocation(){
    navigator.geolocation.clearWatch(navigatorid);
}