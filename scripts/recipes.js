(function(module) {

  //object constructor
  var Recipe = function() {};

  //to hold all Recipe objects
  Recipe.all = [];

  //create recipes table in DB if not exists
  Recipe.createTable = function() {};

  //insert row in recipes table for given Recipe
  Recipe.insertTableRow = function() {};

  //create Recipe object for each row in DB and push to Recipe.all array
  Recipe.createAll = function() {};

  //retrieve data from recipes DB if rows.length; call Recipe.createAll
  Recipe.retrieveAll = function() {};

  module.Recipe = Recipe;
}(window));
