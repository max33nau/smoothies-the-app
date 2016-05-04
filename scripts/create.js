(function(module) {

  //array of nutrient names used to create final 'nutrient' property of ingredient objects
  var arrNutrients = ['Water', 'Calories', 'Protein', 'Lipids', 'Carbohydrate', 'Fiber', 'Sugars', 'Calcium', 'Iron', 'Magnesium', 'Phosphorus', 'Potassium', 'Sodium', 'Zinc', 'Copper', 'Manganesium', 'Vitamin C', 'Thiamin', 'Riboflavin', 'Niacin', 'Vitamin B6', 'Folic Acid', 'Vitamin B12', 'Vitamin A', 'Beta Carotine', 'Vitamin E', 'Vitamin D', 'Vitamin K', 'Fat: Saturated', 'Fat: Monounsaturated', 'Fat: Polyunsaturated', 'Cholesterol'];


  var Ingredient = {};

  //to hold all ingredient objects
  Ingredient.all = [];

  //grabbing data sets that need to be compiled into final array
  Ingredient.compileAll = function(){
    $.getJSON('dataFiles/ingred.json').done(function(data){
      Ingredient.rawData = data;

      $.getJSON('dataFiles/nutrient-v2.json').done(function(data){
        Ingredient.nutrientData = data[0];

        //calling function to create array
        Ingredient.createArray(Ingredient.rawData, Ingredient.nutrientData);
      });
    });
  };

  //method to pull data from various datasets into a single array of ingredient objects, with one nutrient property that is an array.
  Ingredient.createArray = function (ingredients, nutrients){
    Ingredient.all = ingredients.map(function(obj){
      var newIngredObj = {};
      newIngredObj.id = obj.id;
      newIngredObj.name = obj.name;
      newIngredObj.qty = obj.qty;
      newIngredObj.unit = obj.unit;
      newIngredObj.foodGroup = obj.foodGroup;
      newIngredObj.nutrient = arrNutrients.map(function(nutrient){
        var nutrientObj = {};
        nutrientObj.name = nutrient;
        nutrientObj.qty = obj[nutrient];
        nutrientObj.unit = nutrients[nutrient];
        return nutrientObj;
      });
      return newIngredObj;
    });
  };

  /******!!!!!!!!!!!!!!!!!!!!!!!!!!!!!TO BE REMOVED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*****/
  Ingredient.compileAll();

  module.Ingredient = Ingredient;
}(window));
