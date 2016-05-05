(function(module) {

  var findView = {};

  findView.initMap = function() {
    var map = new google.maps.Map($('#map')[0], {
      zoom: 4,
      center: {lat: 37.09024, lng: -95.712891}
    });
    var geocoder = new google.maps.Geocoder();

    document.getElementById('addressSubmit').addEventListener('click', function() {
      findView.geocodeAddress(geocoder, map);
    });
  };

  findView.geocodeAddress = function(geocoder, resultsMap) {
    var address = document.getElementById('addressInput').value;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log('results: ' + results[0].geometry.location);
        var location = results[0].geometry.location;
        var map = new google.maps.Map($('#map')[0], {
          center: location,
          zoom: 11
        });

        var request = {
          location: location,
          radius: 25000,
          query: 'smoothies'
        };

        var service = new google.maps.places.PlacesService(map);
        service.textSearch(request /*CALLBACK HERE*/);

        //TODO: Instead of logic below, run search for smoothie shops near results[0].geometry.location
        // resultsMap.setCenter(results[0].geometry.location);
        // var marker = new google.maps.Marker({
        //   map: resultsMap,
        //   position: results[0].geometry.location
        // });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  findView.showSearchResults = function(results) {
    $('#findContent').append('<ul id="searchResults">Smoothie shops near you:</ul>');
    results.forEach(function(thisResult) {
      //CREATE li AND APPEND TO #searchResults
    });
  };

  //set event handler for search button - query Google Maps API to find smoothie shops near user-inputted address
  findView.handleSearchButton = function() {};

  //render Find section and hide other "page" sections
  findView.renderPage = function() {
    $('#findContent').show().siblings().hide();
    // findView.initMap();
  };

  findView.renderPage();

  module.findView = findView;
}(window));
