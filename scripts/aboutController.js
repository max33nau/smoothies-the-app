(function (module) {

  var aboutController = {};

  aboutController.index = function(ctx, next) {
    console.log('here');
    aboutView.renderPage();
  };
  module.aboutController = aboutController;
}(window));
