//(function(module){     //establishing iffe
  
  Ingredient.allData = [];
  
  //object constructor  
  function Ingredient (obj){
    for (key in obj) this [key] = obj[key];
  };
  
  
  //push ingredients from raw data into array
  Ingredient.populateArray = function(ingData){
    ingData.forEach(function(ele){
      Ingredient.allData.push(new Ingredient(ele));
    });
  };
  
  
  if (localStorage.ingredientData){
    Ingredient.populateArray(
      JSON.parse(localStorage.getItem('ingredientData'))
    );
  } else {
    $.getJSON('dataFiles/ingred.json').done(function(data){
      Ingredient.populateArray(data);
      localStorage.setItem('ingredientData',JSON.stringify(data));
    })/*.fail(alertUser)*/;
  }
  








//   module.Ingredient = Ingredient;
// })(window);  //end iffe and assign to global
