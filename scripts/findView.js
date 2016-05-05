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
        var location = results[0].geometry.location;
        var map = new google.maps.Map($('#map')[0], {
          center: location,
          zoom: 10
        });

        var marker = new google.maps.Marker({
          map: map,
          position: location
        });

        var request = {
          location: location,
          radius: 25000,
          query: 'smoothies'
        };

        var service = new google.maps.places.PlacesService(map);
        service.textSearch(request, findView.showSearchResults);

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  findView.showSearchResults = function(results, status) {

    if (status == google.maps.places.PlacesServiceStatus.OK) {
      $('#findContent').append('<ul id="searchResults">Smoothie shops near you:</ul>');
      results.splice(10).forEach(function(thisResult) {
        var marker = new google.maps.Marker({
          map: map,
          position: thisResult.geometry.location
        });

        var listItem = '<li><p>' + thisResult.name;
        listItem += '</p><p>' + thisResult.formatted_address;
        listItem += '</p>';

        $('#searchResults').append(listItem);
      });
    }
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
