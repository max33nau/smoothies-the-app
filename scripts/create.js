(function(module) {

  var Ingredient = function() {};  //object constructor

  Ingredient.all = [];  //to hold all Ingredient objects

  Ingredient.createTable = function() {};  //create ingredients table in DB if not exists

  Ingredient.insertTableRow = function() {};  //insert row in ingredients table for given Ingredient

  Ingredient.createAll = function() {};  //create Ingredient object for each row in DB
                                         //and push to Ingredient.all array

  Ingredient.retrieveAll = function() {};  //retrieve data from ingredients DB if rows.length
                                           //else fetch JSON data and create Ingredients, rows
                                           //in either case, call Ingredient.createAll

}(window));
