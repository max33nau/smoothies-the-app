(function(module) {

  var createView = {};
  
  
  //object to store current recipe ingredients and nutrition information
  createView.currentRecipe = {};

  //populate accordion drop-downs with ingredients
  createView.populateAccordion = function(dataArray) {
    var $accordionTemplate = $('#accordionTemplate');
    var compiled = Handlebars.compile($accordionTemplate.html());

    dataArray.forEach(function(ingr){
      $("#"+ ingr.foodGroup ).append(compiled(ingr));    
    });
  };    


  //set event listeners for accordion drop-down options (ingredients)
  createView.handleAccordion = function() {};

 
  //set event listeners for each selected ingredient's X and quantity multiplier
  createView.handleSelectedIngredients = function() {
    var $accordion = $('#accordion');  //collect ingr id on-click
    var $selectedListLI = $('#selectedList li');  //
    var $selectedList = $('#selectedList ul');  //place to append new <li>s
    var $selectedTemplate =$('#selectedTemplate');
    var compiledNutrientTemplate = Handlebars.compile($selectedTemplate.html());
   
    //click event on accordion list item
    $accordion.on('click','li',function(event){   
      var idName = $(this)[0].className;
      var foodName = ($(this).find('.foodName').text());
      var unique = false;
      var listArray=[];
      var portionCount = {};
      $selectedListLI.each(function(){
        listArray.push(Number($(this)[0].className));
        var $foodPortions = $(this).find('.portionCount');
        var portionCount = Number($foodPortions.text());
        if(idName == $(this)[0].className){
          portionCount++;
          unique = true;
        }
        portionCount[Number($(this)[0].className)] = portionCount;
        $foodPortions.text(portionCount);
      });
      
      if(unique == false){
        listArray.push(Number($(this)[0].className));
        var updatedListItem = '<li class='+idName+'><span class="foodName">' + foodName + '</span>Portions:<span class="portionCount"> 1 </span> </li>';
        portionCount[idName] = 1;
        $('#selectedList').append(
          updatedListItem
        );
      }
      evaluateFinalNutrients(listArray, portionCount);
    });
    
    function evaluateFinalNutrients(listArray, portionCount){
      $('nutritionFacts').empty();
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
            var total = Number(nutrientObject.value) * portionCount[object.id];
            newObject.value = total;
            finalNutrientsValue[nutrientObject.name] = newObject;
          }else {
            finalNutrientsValue[nutrientObject.name].value +=Number(nutrientObject.value) * portionCount[object.id];
          }
        });
      });
      reducedArray[0].nutrient.forEach(function(nutrientObject){
        $('nutritionFacts').append(
        compiledNutrientTemplate(finalNutrientsValue[nutrientObject.name])
      );
      });
    }
  
    $('#btnReset').on('click',function(){
      $('#nutritionFacts').empty();
      $('#selectedList').empty();
    });
      
    
      
      
      // //append to dom   
      // $('#Calories').text(selectObject.Calories);
      // $('#Fat').text(selectObject.lipids);
      // // $('#Fat-Saturated').text(selectObject);
      // $('#Carbohydrate').text(selectObject.Carbohydrate);
      // $('Fiber').text(selectObject.Fiber);
      // $('#Sugars').text(selectObject.Sugars);
      // $('#Vitamin D').text(selectObject['Vitamin D']);
      // $('#Calcium').text(selectObject.Calcium);
      // $('#Iron').text(selectObject.Iron);
      // $('#Potassium').text(selectObject.Potassium);
      // $('#Vitamin A').text(selectObject['Vitamin A']);
      // $('#Vitamin C').text(selectObject['Vitamin C']);
      
      // console.log(selectObject);
  };
 
  
       

  //when ingredient added or removed or quantity changed, update ingredients AND nutrition info
  createView.updateCurrentRecipe = function() {};

  //render partial nutrition label based on latest currentRecipe info
  createView.renderPartialLabel = function() {};//see on click

  //show (or create) full label popup based on latest currentRecipe info
  createView.showFullLabel = function() {};

  //hide (or remove) full label popup
  createView.hideFullLabel = function() {};

  //event handler for Save Recipe button
  createView.saveRecipe = function() {};

  //deselect all ingredients, set quantities to 0
  createView.resetPage = function() {
    var $btnReset = $('#btnReset');
    
    $btnReset.on('click',function() {
      ///empty selectObject {}
    });
  };

  //show Create section, hiding all other "page" sections
  createView.renderPage = function() {
    $('#createContent').show().siblings().hide();
  };







//temporary hide to keep clean workspace REMOVE! WHEN COMPLETE
  $('#aboutContent').hide();
  $('#recipesContent').hide();

  createView.handleSelectedIngredients();
  createView.resetPage();

  module.createView = createView;
}(window));


