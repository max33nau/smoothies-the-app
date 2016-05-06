(function(module) {

  var aboutView = {};
  //render About section and hide other "page" sections
  aboutView.renderPage = function() {
    $('#createContent').hide();
    $('#aboutContent').show();
    $('#recipesContent').hide();
    $('#findContent').hide();
  };
  module.aboutView = aboutView;
}(window));
