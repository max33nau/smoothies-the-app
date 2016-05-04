(function(module) {

  /*******!!!!!!!*****DELETE THIS!!! FOR TESTING ONLY!!!******!!!!!!!********/
  Recipe.all = [
    {
      name: 'Green Machine',
      ingredients: [
        {
          name: 'cherry',
          quantity: 2,
          portionQuantity: '1/2',
          portionUnit: 'cup'
        },
        {
          name: 'orange juice',
          quantity: 1.5,
          portionQuantity: '8',
          portionUnit: 'oz'
        }
      ]
    },
    {
      name: 'Yummy Berry',
      ingredients: [
        {
          name: 'strawberry',
          portionQuantity: '3',
          portionUnit: '100 g'
        },
        {
          name: 'pineapple juice',
          portionQuantity: '2',
          portionUnit: '3/4 cup'
        }
      ]
    }
  ];

  var recipesView = {};

  var recipeTemplate = Handlebars.compile($('#recipe-template').html());

  //populate recipe search filter(s) with only ingredients in >=1 user Recipe
  recipesView.populateFilters = function() {};

  //when user selects filter, show and hide recipes accordingly
  recipesView.handleFilters = function() {};

  //render a recipe preview for each recipe in Recipe.all
  recipesView.showRecipePreviews = function() {
    Recipe.all.forEach(function(thisRecipe) {
      $('#recipeCards').append(recipeTemplate(thisRecipe));
    });
  };

  //set event handler for recipe previews that renders full recipe (first removing any that was rendered previously)
  // *Check that Recipe.all has recipes in it before enlarging one recipe (in case someone navigates to specific recipe page - smoothiesapp.com/recipes/tropical+tuesday - having never visited smoothiesapp.com/recipes).
  recipesView.showFullRecipe = function() {};

  //show Recipes section, hiding all other "page" sections
  recipesView.renderPage = function() {
    $('#recipesContent').show().siblings().hide();
  };

  recipesView.showRecipePreviews();
  module.recipesView = recipesView;
}(window));
