/* 'VIEW' FUNCTIONALITY POSSIBLY NEEDED FOR APP



***********************************************************************************************

var recipesView = {};

recipesView.populateFilters = function() {};  //populate recipe search filter(s)
                                             //with only ingredients in >=1 user Recipe

recipesView.handleFilters = function() {};  //when user selects filter,
                                           //show and hide recipes accordingly

recipesView.renderPage = function() {  //render page and set event handlers
  $('#recipesContent').show().siblings().hide();
};


*IF recipe cards are previews w/ only ingredients + 'Click to show nutrition information':

recipesView.showFullRecipe = function() {};  //show (or create) full recipe popup
  *Check that Recipe.all has recipes in it before enlarging one recipe (in case someone navigates to specific recipe page - smoothiesapp.com/recipes/tropical+tuesday - having never visited smoothiesapp.com/recipes).

recipesView.hideFullRecipe = function() {};  //hide (or remove) full recipe popup

***********************************************************************************************

var findView = {};

findView.renderPage = function() {  //render page and set event handlers
  $('#findContent').show().siblings().hide();
};

***********************************************************************************************



*/
