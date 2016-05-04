(function(module) {

  //object constructor
  /*
  options = all the key-value pairs of the row passed in
  Object.keys(options) returns an array of its (options') properties
  anonymous function's params: e = current property; index = current property's index; keys = the array that's being traversed
  .forEach takes function and (optional) value that dictates value to be used as 'this' in aforementioned function
  */
  var Recipe = function(options) {
    Object.keys(options).forEach(function(e, index, keys) {
      this[e] = options[e];
    }, this);
  };

  //to hold all Recipe objects
  Recipe.all = [];

  //uses html5sql.js, vis-à-vis webDB, to create recipes table in DB if not exists
  Recipe.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS recipes (' +
      'id INTEGER PRIMARY KEY, ' +
      'name VARCHAR(40) NOT NULL' +
      'ingredients TEXT NOT NULL' +
      'nutritionFacts TEXT NOT NULL);',
      
      callback);
  };

  //insert row in recipes table for given Recipe
  Recipe.insertTableRow = function() {};

  //create Recipe object for each row in DB and push to Recipe.all array
  Recipe.createAll = function() {};

  //retrieve data from recipes DB if rows.length; call Recipe.createAll
  Recipe.retrieveAll = function() {};

  module.Recipe = Recipe;
}(window));
