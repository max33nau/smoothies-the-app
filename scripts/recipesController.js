(function (module) {

  var recipesController = {};

  recipesController.index = function(ctx, next) {
    // *SHOULD CHECK TO SEE IF (ctx.params.recipeName) TO KNOW WHETHER TO SHOW A FULL RECIPE
    recipesView.renderPage();
  };

  module.recipesController = recipesController;
}(window));
