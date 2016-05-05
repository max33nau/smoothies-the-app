(function(module) {

  var findView = {};

  //set event handler for search button - query Google Maps API to find smoothie shops near user-inputted address
  findView.handleSearchButton = function() {};

  //render Find section and hide other "page" sections
  findView.renderPage = function() {
    $('#findContent').show().siblings().hide();
  };

  findView.renderPage();
  
  module.findView = findView;
}(window));
