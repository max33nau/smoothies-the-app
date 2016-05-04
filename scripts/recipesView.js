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
        },
        {
          name: 'orange juice',
          quantity: 3,
          portionQuantity: '8',
          portionUnit: 'oz'
        }
      ]
    }
  ];

  var recipesView = {};

  var recipeTemplate = Handlebars.compile($('#recipe-template').html());

  //populate recipe search filter(s) with only ingredients in >=1 user Recipe
  recipesView.populateFilters = function() {
    var filterOptions = [];
    Recipe.all.forEach(function(thisRecipe) {
      thisRecipe.ingredients.forEach(function(thisIngredient) {
        if (filterOptions.indexOf(thisIngredient.name) < 0) {
          filterOptions.push(thisIngredient.name);
        }
      });
    });
    filterOptions.forEach(function(thisOption) {
      $('#recipeFilter').append('<option value = "' + thisOption + '">' + thisOption + '</option>');
    });
  };

  //when user selects filter, show and hide recipes accordingly
  recipesView.handleFilters = function() {
    /*
      remove all recipes (previews and full) from page
      iterate through Recipe.all; for each Recipe:
        iterate through ingredients; determine index of filterBy ingredient
          if index > -1, append templated recipe to #recipeCards
    */
    
  };

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

  recipesView.populateFilters();
  recipesView.showRecipePreviews();
  module.recipesView = recipesView;
}(window));
