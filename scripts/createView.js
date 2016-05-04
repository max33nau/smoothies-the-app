(function(module) {

  var createView = {};

  createView.populateFilters = function() {};  //populate dietary goal filter(s)

  createView.handleFilters = function() {};  //when user selects filter,
                                             //highlight ingredients accordingly

  createView.showFullLabel = function() {};  //show (or create) full label popup

  createView.hideFullLabel = function() {};  //hide (or remove) full label popup

  createView.saveRecipe = function() {};  //event handler for Save Recipe button

  createView.resetPage = function() {};  //deselect all ingredients, set quantities to 0

  createView.renderPage = function() {  //render page and set event handlers
    $('#createContent').show().siblings().hide();
  };

}(window));
