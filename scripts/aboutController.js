(function (module) {

  var aboutController = {};

  aboutController.index = function(ctx, next) {
    aboutView.renderPage();
  };

  module.aboutController = aboutController;
}(window));
