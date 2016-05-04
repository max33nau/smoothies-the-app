(function(module) {

  //object to store current recipe ingredients and nutrition information
  var currentRecipe = {};

  var createView = {};

  //populate accordion drop-downs with ingredients
  createView.populateAccordion = function() {};

  //set event listeners for accordion drop-down options (ingredients)
  createView.handleAccordion = function() {};

  //set event listeners for X and quantity multiplier for selected ingredients
  createView.handleSelectedIngredients = function() {};

  //when ingredient added or removed or quantity changed, update ingredients AND nutrition info
  createView.updateCurrentRecipe = function() {};

  //render partial nutrition label based on latest currentRecipe info
  createView.renderPartialLabel = function() {};

  //show (or create) full label popup based on latest currentRecipe info
  createView.showFullLabel = function() {};

  //hide (or remove) full label popup
  createView.hideFullLabel = function() {};

  //event handler for Save Recipe button
  createView.saveRecipe = function() {};

  //deselect all ingredients, set quantities to 0
  createView.resetPage = function() {};

  //render page and set event handlers
  createView.renderPage = function() {
    $('#createContent').show().siblings().hide();
  };

}(window));
