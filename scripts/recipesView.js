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
    $('aside').on('change', 'select', function() {
      $('.recipe').remove();

      var filterBy = $(this).val();
      Recipe.all.forEach(function(thisRecipe) {
        thisRecipe.ingredients.forEach(function(thisIngredient) {
          if (thisIngredient.name == filterBy) {
            recipesView.appendRecipePreview(thisRecipe);
          }
        });
      });
    });
  };

  //append a single recipe to the #recipeCards section
  recipesView.appendRecipePreview = function(recipe) {
    $('#recipeCards').append(recipeTemplate(recipe));
  };

  //render a recipe preview for each recipe in Recipe.all
  recipesView.showRecipePreviews = function() {
    Recipe.all.forEach(function(thisRecipe) {
      recipesView.appendRecipePreview(thisRecipe);
    });
  };

  //set event handler for recipe previews that renders full recipe
  recipesView.handleSeeFullRecipe = function() {
    $('.recipePreview button').on('click', function(e) {
      //the recipe the user wants to see in full
      var selectedRecipe = ($(this).parent().attr('id'));

      //if a full recipe is already rendered, remove it
      $('#fullRecipe').empty();
      //show in full the recipe the user selected
      $('#fullRecipe').append($(this).parent());

      //remove all recipe cards
      $('#recipeCards').empty();
      //recipes not selected by the user to be shown in full
      var recipesToPreview = Recipe.all.filter(function(thisRecipe) {
        return (thisRecipe.name != selectedRecipe);
      });
      //render previews of recipes not selected by user to be shown in full
      recipesToPreview.forEach(function(thisRecipe) {
        recipesView.appendRecipePreview(thisRecipe);
      });
    });
  };

  //show Recipes section, hiding all other "page" sections
  recipesView.renderPage = function() {
    $('#recipesContent').show().siblings().hide();
    recipesView.showRecipePreviews();
    recipesView.populateFilters();
    recipesView.handleFilters();
    recipesView.handleSeeFullRecipe();
  };

/*******!!!!!!!*****DELETE THESE CALLS!!! FOR TESTING ONLY!!!******!!!!!!!********/
  recipesView.populateFilters();
  recipesView.handleFilters();
  recipesView.showRecipePreviews();
  recipesView.handleSeeFullRecipe();

  module.recipesView = recipesView;
}(window));
