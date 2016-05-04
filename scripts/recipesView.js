(function(module) {

  var recipesView = {};

  //populate recipe search filter(s) with only ingredients in >=1 user Recipe
  recipesView.populateFilters = function() {};

  //when user selects filter, show and hide recipes accordingly
  recipesView.handleFilters = function() {};

  //set event handler for recipe previews that renders full recipe (first removing any that was rendered previously)
  // *Check that Recipe.all has recipes in it before enlarging one recipe (in case someone navigates to specific recipe page - smoothiesapp.com/recipes/tropical+tuesday - having never visited smoothiesapp.com/recipes).
  recipesView.showFullRecipe = function() {};

  //show Recipes section, hiding all other "page" sections
  recipesView.renderPage = function() {
    $('#recipesContent').show().siblings().hide();
  };

}(window));
