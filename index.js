const people = [
  [{lat: -31.634533815397468, lng: -60.707796586854265}, 'Santa Fe, Argentina', 'Emilia', '\uf072', 'Wants to travel around the globe!'],
  [{lat: 51.551926033477685, lng: 0.678028811628905}, 'Southbourne Grove, Westcliff on Sea, UK', 'Amber', '\uf5a7', 'Loves cooking!'],
  [{lat: 10.481212955524812, lng: -66.90993793563824}, 'Caracas, Venezuela', 'Alessandro', '\uf030', 'Passionate about photography'],
  [{lat: 10.245222623629994, lng: -67.6114192692057}, 'Maracay, Aragua, Venezuela', 'Bernardo', '\uf130', "Stand up comedy it's his calling"],
  [{lat: 54.484996598927125, lng: -6.234820761829326}, '18 Hedingham, Moira, UK', 'Gary', '\uf001', 'Music is in his veins'],
  [{lat: 54.484996598927125, lng: -6.234810761829326}, '18 Hedingham, Moira, UK', 'Nicola', '\uf18c', 'Loves gardening and sewing'],
  [{lat: 50.61638770192587, lng: -4.217472853063895}, 'Chillaton, Devon, UK', 'John', '\uf1de', 'Semi pro DJ and music producer!!'],
  [{lat: 51.51531377787151, lng: -0.13113161420453323}, 'London, UK', 'Carlos', '\uf7a6', 'Likes playing the guitar!'],
  [{lat: 51.54865807993901, lng: 0.8184551287169305}, 'Great Wakering, Southend on Sea, UK', 'Gary M', '\uf1e3', 'Football geek! Go Tottenham!'],
  [{lat: 50.827979108945264, lng: -0.1698206215388268}, 'Hove, UK', 'Sara', '\uf53f', 'Loves art, design, exhibitions and dance!'],
  [{lat: 53.56777236342333, lng: -1.0113209733914919}, 'Doncaster, UK', 'Danny M.', '\uf0fc', 'Enjoys having a John Smiths while cheering for the Leeds United'],
  [{lat: 54.98167112995274, lng: -1.6187362680703237}, 'Newcastle Upon Tyne, UK', 'Lee', '\uf7fa', 'Hobbies? Jiu Jitsu, Surfing, Guitar, Skating, Astronomy<br>A real multipotentialite!'],
  [{lat: 51.51531377787151, lng: -0.14113161420453323}, 'London, UK', 'Nathan', '\uf8d9', 'Plays in a band!'],
];

// Initialize and add the map
function initMap() {
  // Center the map
  var mapOptions = {
    center: { lat: 22, lng: 0 },
    zoom: 2
  }
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow({disableAutoPan: true});

  // Create the markers
  const markers = people.map(([position, location, name, icon, hobby]) => {
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
      infoWindow.setContent(
        '<strong>'+ name +'</strong><br>'
        + location +
        '<br><strong class="map__hobby">' + hobby + '</strong><br>'
      );
      infoWindow.open(marker.getMap(), marker);
    });

    return marker;
  })

  new markerClusterer.MarkerClusterer({ markers, map });
}