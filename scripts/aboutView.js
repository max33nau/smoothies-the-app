(function(module) {

  var aboutView = {};

  //render About section and hide other "page" sections
  aboutView.renderPage = function() {
    $('#aboutContent').show().siblings().hide();
  };

  module.aboutView = aboutView;
}(window));
