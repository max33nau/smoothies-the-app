(function(module) {

  //object constructor
  var Ingredient = function() {};

  //to hold all Ingredient objects
  Ingredient.all = [];

  //create ingredients table in DB if not exists
  Ingredient.createTable = function() {};

  //insert row in ingredients table for given Ingredient
  Ingredient.insertTableRow = function() {};

  //create Ingredient object for each row in DB and push to Ingredient.all array
  Ingredient.createAll = function() {};

  //retrieve data from ingredients DB if rows.length, else fetch JSON data and create Ingredients, rows; in either case, call Ingredient.createAll
  Ingredient.retrieveAll = function() {};

  module.Ingredient = Ingredient;
}(window));
