(function (module) {

  var createController = {};

  createController.index = function(ctx, next) {
    createView.renderPage();
  };

  module.createController = createController;
}(window));
