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






//********here are the view items for main page******
//IngredObj.finalArray is where data is housed.

//object constructor from array
// function Ingredient (opts){
//   this.name: opts.name;
  
// }



// var ingredients;



// var $accordion = $('accordion');




// populateAccordion = function(ingredient){
//   var template = Handlebars.compile($('ingredTemplate')).text();
//   return template(ingredient);
// };
// $accordion.append(render(IngredObj.finalArray));