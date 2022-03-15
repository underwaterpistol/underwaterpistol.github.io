// Initialize and add the map
function initMap() {
  // Center the map
  var mapOptions = {
    center: new google.maps.LatLng(22, 0),
    zoom: 2
  }
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const locations = [
    [{ lat: -31.610658, lng: -60.697294 }, 'Santa Fe, Argentina<br>Wants to travel around the globe!', 'Emilia', '\uf072'],
    [{ lat: 51.551799, lng: 0.678061 }, 'Southbourne Grove, Westcliff on Sea, SS0 0AA<br>Loves cooking!', 'Amber', '\uf5a7'],
  ];

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers
  locations.forEach(([position, location, name, icon]) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: name,
      label: {
        fontFamily: 'Fontawesome',
        color: 'white',
        text: icon
      },
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent('<strong>'+name+'</strong></i><br>'+location);
      infoWindow.open(marker.getMap(), marker);
    });
    marker.setMap(map);
  })
}