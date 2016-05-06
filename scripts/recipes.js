(function(module) {

  /*
  object constructor
  options = all the key-value pairs of the row passed in
  Object.keys(options) returns an array of its (options') properties
  anonymous function's params: e = current property; index = current property's index; keys = the array that's being traversed
  .forEach takes function and (optional) value that dictates value to be used as 'this' in that function
  */
  var Recipe = function(options) {
    Object.keys(options).forEach(function(e, index, keys) {
      this[e] = options[e];
    }, this);
  };

  //to hold all Recipe objects
  Recipe.all = [];

  //use html5sql.js, vis-à-vis webDB, to create recipes table in DB if not exists

  Recipe.createTable = function(callback) {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY, name TEXT, ingredients TEXT, nutrientFacts TEXT);',
      function(result) {
        console.log('Successfully set up the recipes table.', result);
        if (callback) callback();
      }
    );
  };

  //use html5sql.js, vis-à-vis webDB, to insert row in recipes table for given Recipe
  Recipe.insertTableRow = function(recipe, callback) {
    webDB.execute(
      [
        {
          'sql': 'INSERT INTO recipes (name, ingredients, nutritionFacts) ' +
          'VALUES (?, ?, ?);',
          'data': [recipe.name, recipe.ingredients, recipe.nutritionFacts]
        }
      ],
      callback
    );
  };

  //create Recipe object for each row in DB and push to Recipe.all array
  Recipe.createAll = function(rows) {
    Recipe.all = rows.map(function(thisRow) {
      return new Recipe(thisRow);
    });
  };

  //retrieve data from recipes DB if rows.length; call Recipe.createAll
  Recipe.retrieveAll = function(callback) {
    webDB.execute('SELECT * FROM recipes ORDER BY name ASC', function(rows) {
      if (rows.length) {
        Recipe.createAll(rows);
        callback();
      } else {
        $('#recipesContent p').text('You haven\'t saved any recipes yet. Click on the CREATE tab above to start concocting!');
      }
    });
  };

  module.Recipe = Recipe;
}(window));
