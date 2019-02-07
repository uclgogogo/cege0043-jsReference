// create the code to get the Earthquakes data using an XMLHttpRequest
var client;
var mymap;


function getEarthquakes() {
   client = new XMLHttpRequest();
   client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
   client.onreadystatechange = earthquakeResponse;  // note don't use earthquakeResponse() with brackets as that doesn't work
   client.send();
}
// create the code to wait for the response from the data server, and process the response once it is received
function earthquakeResponse() {
  // this function listens out for the server to say that the data is ready - i.e. has state 4
  if (client.readyState == 4) {
    // once the data is ready, process the data
    var earthquakedata = client.responseText;
    loadGeoJSONLayer(earthquakedata);
    }
}
// convert the received data - which is text - to JSON format and add it to the map
function loadGeoJSONLayer(earthquakedata) {
    // convert the text to JSON
    var earthquakejson = JSON.parse(earthquakedata);

    // add the JSON layer onto the map - it will appear using the default icons
    geojsonLayer = L.geoJson(earthquakejson).addTo(mymap);

    // change the map zoom so that all the data is shown
    mymap.fitBounds(geojsonLayer.getBounds());
}