(function (module) {

  var recipesController = {};

  recipesController.index = function(ctx, next) {
    recipesView.renderPage();
  };

}(window));
