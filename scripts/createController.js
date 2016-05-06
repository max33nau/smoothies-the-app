(function (module) {

  var createController = {};

  createController.index = function(ctx, next) {
    $('#createContent').show();
    $('#aboutContent').hide();
    $('#recipesContent').hide();
    $('#findContent').hide();
    Ingredient.compileAll(createView.renderPage);
  };
  module.createController = createController;
}(window));
