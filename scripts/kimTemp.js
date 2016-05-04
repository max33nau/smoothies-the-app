//(function(module){     //establishing iffe
  
  // Ingredient.allData = [];
  
  // //object constructor  
  // function Ingredient (obj){
  //   for (key in obj) this [key] = obj[key];
  // };
  
  
  // //push ingredients from raw data into array
  // Ingredient.populateArray = function(ingData){
  //   ingData.forEach(function(ele){
  //     Ingredient.allData.push(new Ingredient(ele));
  //   });
  // };
  
  // //request ingredient data from local storage or from json file
  // if (localStorage.ingredientData){
  //   Ingredient.populateArray(
  //     JSON.parse(localStorage.getItem('ingredientData'))
  //   );
  // } else {
  //   $.getJSON('dataFiles/ingred.json').done(function(data){
  //     Ingredient.populateArray(data);
  //     localStorage.setItem('ingredientData',JSON.stringify(data));
  //   }).fail(console.log('alertUser'));
  // };
  
  
  // //push data into accordion sections
  // var $fruits = $('#fruits');
  // var $accordion = $('#accordion');
  // var accordionIds =  //"'#"+Ingredient.allData[0].foodGroup+"'"
    
  //   //the below section is supposed to do this dynamically...still in process, and will be run in the if(local storage) expression above.
    
  //   // Ingredient.allData.map(function(ele){
  //   //   $accordion.find($('#fats')).append('<li>'+ele.name+'</li>') === $('#fats')
  //   //    if($accordion.find("$('#"+ ele.foodGroup + "')").append('<li>'+ele.name+'</li>') === $('#fats')){
  //     //    console.log(ele.foodGroup); 
  //     //  } else {console.log(false);}
  //   // });
    
  //   //  var options, template = Handlebars.compile($('ingredTemplate').text());
  //   //    options = Ingredient. 
  //   //     return Ingredient.name;
    
  // $accordion.on('click','li',function(){
  //   //first thing: append name template to selectedList 'ul'
  //   //sencond thing: append nutrition data and add to current balances (reduce)
  //     $('#selectedList ul').append('<li>'+ this.name+ '</li>');
  //    console.log(this); 
  // })
    
 
  //   //stil in process!!!
  // Ingredient.allIngredients = function() {
  //   return Ingredient.allData.map(function(ingr){
  //     return {ingrName: ingr.name, ingrFoodGroup: ingr.foodGroup} ;
  //   });
  // }; 
          
 
  
  // var populateAccordion = function(ingr){
  //   var template = Handlebars.compile($('#ingredTemplate').text());
  //   return template(ingr);   
  // };
  
  // Ingredient.allData.forEach(function(a){
  //   $fruits.append(populateAccordion(Ingredient.name));
    
  // });
  







//   module.Ingredient = Ingredient;
// })(window);  //end iffe and assign to global




//##############GATHERING & FORMATTING DATA!######################

var IngredObj = {} ;

$.getJSON('dataFiles/ingred.json').done(function(data){
  IngredObj.all = data;
  
  $.getJSON('dataFiles/nutrient-v2.json').done(function(data){
    IngredObj.nutrients = data[0];  
    
    manipulateData(IngredObj.all, IngredObj.nutrients);
    console.log(IngredObj.finalArray);
  });
});

var arrNutrients = ["Water", "Calories", "Protein", "Lipids", "Carbohydrate", "Fiber", "Sugars", "Calcium", "Iron", "Magnesium", "Phosphorus", "Potassium", "Sodium", "Zinc", "Copper", "Manganesium", "Vitamin C", "Thiamin", "Riboflavin", "Niacin", "Vitamin B6", "Folic Acid", "Vitamin B12", "Vitamin A", "Beta Carotine", "Vitamin E", "Vitamin D", "Vitamin K", "Fat: Saturated", "Fat: Monounsaturated", "Fat: Polyunsaturated", "Cholesterol"];

function manipulateData(ingredients, nutrients){
  IngredObj.finalArray = ingredients.map(function(obj){
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
}

