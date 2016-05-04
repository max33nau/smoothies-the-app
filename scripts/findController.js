(function (module) {

  var findController = {};

  findController.index = function(ctx, next) {
    findView.renderPage();
  };

  module.findController = findController;
}(window));
