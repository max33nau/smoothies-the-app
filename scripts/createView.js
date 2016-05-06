(function(module) {

  var createView = {};


  //object to store current recipe ingredients and nutrition information
  createView.currentRecipe = {};

  //populate accordion drop-downs with ingredients
  createView.populateAccordion = function(dataArray) {
    var $accordionTemplate = $('#accordionTemplate');
    var compiled = Handlebars.compile($accordionTemplate.html());
    dataArray.forEach(function(ingr){
      $('#'+ ingr.foodGroup ).append(compiled(ingr));
    });
  };
  //set event listeners for each selected ingredient's X and quantity multiplier
  createView.handleSelectedIngredients = function() {
    var $accordion = $('#accordion');  //collect ingr id on-click
    var $selectedListLI = $('#selectedList li');
    var $selectedList = $('#selectedList ul');  //place to append new <li>s
    var $selectedTemplate =$('#selectedTemplate');
    var compiledNutrientTemplate = Handlebars.compile($selectedTemplate.html());
    $accordion.on('click','li',function(event){
      var idName = $(this)[0].className;
      var foodName = ($(this).find('.foodName').text());
      var unique = false;
      var listArray=[];  //this array will hold selected ingred id's
      var portionCountObj = {};
      $('#ingredients li').each(function(){  //these are <li>s created dynamically
        listArray.push(Number($(this)[0].className));
        var $foodPortions = $(this).find('.portionCount'); //portion count is class gerenated dynamically
        var portionCount = Number($foodPortions.text());
        if(idName == $(this)[0].className){
          portionCount++;
          unique = true;
        }
        portionCountObj[Number($(this)[0].className)] = portionCount;
        $foodPortions.text(portionCount);
      });
      if(unique == false){
        listArray.push(Number($(this)[0].className));
        var updatedListItem = '<li class='+idName+'> <span class="foodName">'+foodName+'</span>:&nbsp<span class="portionCount"> 1 </span> &nbsp serving(s) </li>';
        portionCountObj[idName] = 1;
        $('#ingredients').append(
          updatedListItem
          );
      }
      evaluateFinalNutrients(listArray, portionCountObj);
    });

    function evaluateFinalNutrients(listArray, portionCountObj){
      $('#nutritionFacts').empty();
      var finalNutrientsValue = {};
      var reducedArray = Ingredient.all.filter(function(object){
        if(listArray.indexOf(object.id) > -1) {
          return object;
        }
      });
      reducedArray.forEach(function(object){
        object.nutrient.forEach(function(nutrientObject){
          var newObject = {};
          if(!finalNutrientsValue[nutrientObject.name]){
            newObject.name = nutrientObject.name;
            newObject.unit = nutrientObject.unit;
            var total = Number(nutrientObject.qty) * portionCountObj[object.id];
            newObject.value = total;

            finalNutrientsValue[nutrientObject.name] = newObject;
          }else {
            finalNutrientsValue[nutrientObject.name].value +=Number(nutrientObject.qty) * portionCountObj[object.id];
          }
        });
      });
      var finalNutrientsObj = {};
      reducedArray[0].nutrient.forEach(function(nutrientObject){
        $('#nutritionFacts').append(
        compiledNutrientTemplate(finalNutrientsValue[nutrientObject.name])
        );
      });
    }
  };


  createView.addEventListeners = function() {
    createView.reset();
    createView.saveRecipe();
  };

  createView.reset = function() {
    $('#btnReset').on('click',function(){
      $('#nutritionFacts').empty();
      $('#ingredients').empty();
    });
  };
  //event handler for Save Recipe button
  createView.saveRecipe = function() {
    $('#saveRecipes').on('click',function(){
      var recipeName = prompt('Please enter the name of your recipe? If you are not ready to save your recipe click cancel.');
      if(recipeName) {
        var foodArray = [];
        var totalNutrientArray = [];
        var portionCountObj;
        $('#ingredients li').each(function(){  //these are <li>s created dynamically
          var ingredientObject = {};
          ingredientObject.name =$(this).find('.foodName').text();
          ingredientObject.servings = $(this).find('.portionCount').text();
          foodArray.push(ingredientObject);
        });
        $('#nutritionFacts li').each(function(){
          totalNutrientArray.push({'nutrientTotal':$(this).text()});
        });
        var finalRecipe = {};
        finalRecipe.name = recipeName;
        finalRecipe.ingredients = JSON.stringify(foodArray);
        finalRecipe.nutritionFacts = JSON.stringify(totalNutrientArray);
        Recipe.insertTableRow(finalRecipe, function(){
          console.log('recipe added to db');
          window.location = '/recipes';
        });
      }
    });
  };
  //show Create section, hiding all other "page" sections
  createView.renderPage = function(foodArray) {
    createView.populateAccordion(foodArray);
    createView.handleSelectedIngredients();
    createView.addEventListeners();
  };
  module.createView = createView;
}(window));
