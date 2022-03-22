const people = [
  [{lat: -31.634533815397468, lng: -60.707796586854265}, 'Santa Fe, Argentina', 'Emilia', '\uf1d8', 'Wants to travel around the globe!'],
  [{lat: 51.551926033477685, lng: 0.678028811628905}, 'Southbourne Grove, Westcliff on Sea, UK', 'Amber', '\uf5a7', 'Loves cooking!'],
  [{lat: 10.481212955524812, lng: -66.90993793563824}, 'Caracas, Venezuela', 'Alessandro', '\uf030', 'Passionate about photography'],
  [{lat: 10.245222623629994, lng: -67.6114192692057}, 'Maracay, Aragua, Venezuela', 'Bernardo', '\uf130', "Stand up comedy it's his calling"],
  [{lat: 54.484996598927125, lng: -6.234820761829326}, '18 Hedingham, Moira, UK', 'Gary', '\uf001', 'Music is in his veins'],
  [{lat: 54.484996598927125, lng: -6.234810761829326}, '18 Hedingham, Moira, UK', 'Nicola', '\uf18c', 'Loves gardening and sewing'],
  [{lat: 50.61638770192587, lng: -4.217472853063895}, 'Chillaton, Devon, UK', 'John', '\uf1de', 'Semi pro DJ and music producer!!'],
  [{lat: 51.51531377787151, lng: -0.13113161420453323}, 'London, UK', 'Carlos', '\uf7a6', 'Likes playing the guitar!'],
  [{lat: 51.54865807993901, lng: 0.8184551287169305}, 'Great Wakering, Southend on Sea, UK', 'Gary M', '\uf1e3', 'Football geek! Go Tottenham!'],
  [{lat: 50.827979108945264, lng: -0.1698206215388268}, 'Hove, UK', 'Sara', '\uf53f', 'Loves art, design, exhibitions and dance!'],
  [{lat: 53.56777236342333, lng: -1.0113209733914919}, 'Doncaster, UK', 'Danny M.', '\uf1e3', 'Enjoys having a John Smiths while cheering for the Leeds United'],
  [{lat: 54.98167112995274, lng: -1.6187362680703237}, 'Newcastle Upon Tyne, UK', 'Lee', '\uf7fa', 'Likes Jiu Jitsu, Surfing, Guitar, Skating and Astronomy <br> very versatile!'],
  [{lat: 51.51531377787151, lng: -0.14113161420453323}, 'London, UK', 'Nathan', '\uf8d9', 'Plays in a band!'],
  [{lat: 53.14773864797172, lng: -2.36735352511473}, 'Sandbach, Cheshire, UK', 'Anna', '\uf083', 'Likes taking long walks with her camera in hand'],
  [{lat: 51.51531377787151, lng: -0.12113161420453323}, 'London, UK', 'Ben', '\uf86d', 'Hobbies? Music, art, literature, philosophy, cars, football (Arsenal!)<br>A real multipotentialite!'],
  [{lat: 52.284214582242235, lng: -1.584999507370846}, 'Warwick, UK', 'Danny W.', '\uf1b0', 'Enjoys playing football, walking his dog, reading and eating out'],
  [{lat: 54.726590079483344, lng: -6.228187696299442}, 'Craigavon, UK', 'Tara', '\uf0c4', 'Likes to relax by crafting, designing and pressing tshirts'],
  [{lat: 53.485301359318456, lng: -2.2426906719967405}, 'Manchester, UK', 'Dan', '\uf0fc', 'Enjoys drinking a cold beer with friends'],
  [{lat: 51.79998611177292, lng: -1.7927508622201622}, 'Cotswolds, UK', 'Pete', '\uf669', 'Likes playing football, basketball, skateboarding <br> and watching Star Wars marthons'],
  [{lat: 14.35282543840641, lng: 121.04372325178481}, 'La Laguna, Philippines', 'Jason', '\uf1fc', 'Likes illustration, concept art<br> noise music and movies!'],
  [{lat: 53.96101534739672, lng: -1.0768154423501357}, 'York, UK', 'Charlie', '\uf072', 'Likes to travel, cooking and spending time with her dog!'],
  [{lat: 51.52531377787151, lng: -0.12113161420453323}, 'London, UK', 'Naomi', '\uf206', 'Likes to travel, listening to music, walking<br> hula-hooping, cycling, yoga and roller-skating'],
  [{lat: 57.045816318621114, lng: 23.993794613993806}, 'Riga, Latvia', 'Uldis', '\uf6fc', 'Likes traveling, board games and hiking!'],
  [{lat: 51.480303387387345, lng: -0.13944238219321328}, 'Nine Elms, London, UK', 'Jen', '\uf025', 'Loves art and music!'],
  [{lat: 53.485301359318456, lng: -2.2526906719967405}, 'Manchester, UK', 'Mord', '\uf518', 'Likes reading and cycling!'],
  [{lat: 40.426894014118446, lng: -3.708383563820576}, 'Madrid, Spain', 'Marion', '\uf290', 'Loves thrift shopping and running!'],
  [{lat: 51.2693816398622, lng: -2.5028867109905204}, 'Chilcompton, Somerset, UK', 'Natasha', '\uf7a6', 'Likes playing the guitar!'],
  [{lat: 40.426894014118446, lng: -3.718383563820576}, 'Madrid, Spain', 'Angus', '\uf028', 'Likes making music with his guitar!'],
  [{lat: 51.536729855039226, lng: -0.9032209221460329}, 'Henley-on-thames, UK', 'Beth', '\uf773', "Likes to swim, paint and rowboats<br>She'll take any excuse to be in or near water!"],
  [{lat: 51.52531377787151, lng: -0.14113161420453323}, 'London, UK', 'Oriane', '\ue55a', 'Enjoys pilates and yoga!'],
  [{lat: 51.4490979627959, lng: -0.9824869135724369}, 'Reading, UK', 'Leigh', '\uf564', 'Loves football, running, gym, EATING<br>and spending time with his loving ones!'],
  [{lat: 51.45673561186572, lng: 0.04412819378779798}, 'South East London, UK', 'Adrian', '\uf06c', 'Likes cycling, yoga, electronic music,<br> plants/decorating, films and art galleries'],
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