/*

V.	Create
  a.	Check for ingredients database
    i.	If exists:
      1.	Use data to create Ingredient objects
    ii.	If doesn’t:
      1.	Retrieve nutrient info from API
      2.	Create ingredients database
      3.	Use data to create Ingredient objects

var Ingredient = function() {};  //object constructor

Ingredient.all = [];  //to hold all Ingredient objects

Ingredient.createTable = function() {};  //create ingredients table in DB if not exists

Ingredient.insertTableRow = function() {};  //insert row in ingredients table for given Ingredient

Ingredient.createAll = function() {};  //create Ingredient object for each row in DB
                                       //and push to Ingredient.all array

Ingredient.retrieveAll = function() {};  //retrieve data from ingredients DB if rows.length
                                         //else fetch USDA data and create Ingredients, rows
                                         //in either case, call Ingredient.createAll

***********************************************************************************************

var Recipe = function() {};  //object constructor

Recipe.all = [];  //to hold all Recipe objects

Recipe.createTable = function() {};  //create recipes table in DB if not exists

Recipe.insertTableRow = function() {};  //insert row in recipes table for given Recipe

Recipe.createAll = function() {};  //create Recipe object for each row in DB
                                   //and push to Recipe.all array

Recipe.retrieveAll = function() {};  //retrieve data from recipes DB if rows.length
                                     //call Recipe.createAll


*/
