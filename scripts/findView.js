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
        console.log('results: ' + results);
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
        console.log('results: ' + results);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
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
