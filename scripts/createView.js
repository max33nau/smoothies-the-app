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
    var $accordion = $('#accordion');
    var selectedArrayText = [];
    var $qtySelected = $('#qtySelected');
    var $nutrientList = $('#nutrientList ul');
    var selectObject = {}; //object to capture user selections

    $accordion.on('click','li',function(){
      var selectedText = $(this).text().split(":",1)[0];
      selectedArrayText.push(selectedText);
      $nutrientList.append('<li>' + selectedText + '</li>');


      Ingredient.all.forEach(function(object){
        if(selectedArrayText.indexOf(object.name)>-1){
          object.nutrient.forEach(function(nutrientObj){
            if(selectObject[nutrientObj.name]){
              selectObject[nutrientObj.name]+=nutrientObj.qty;
            } else{
              selectObject[nutrientObj.name]=0;
              selectObject[nutrientObj.name]+=nutrientObj.qty;
            }
          });
        }
      });

      //the below function sorts the nutrients biggest to smallest and outputs an array. Currently not being used.
      // var keys = [];
      // var vals = [];
      // Object.keys(selectObject)
      //   .map(function (k) {return [k, selectObject[k]]; })
      //   .sort(function (b,a) {
      //     if(a[1]> b[1]) return 1;
      //     if(a[1]< b[1]) return -1;
      //     return 0;
      //   }).forEach(function(d){
      //     keys.push(d[0]);
      //     vals.push(d[1]);
      //   });
      // topTenKeys = keys.slice(0,10);
      // topTenVals = vals.slice(0,10);
      // console.log(topTenKeys, topTenVals);


      //append to dom
      $('#Calories').text(selectObject.Calories);
      // $('#Fat').text(selectObject.Calories);
      // $('#Fat-Saturated').text(selectObject);
      $('#Carbohydrate').text(selectObject.Carbohydrate);
      $('Fiber').text(selectObject.Fiber);
      $('#Sugars').text(selectObject.Sugars);
      $('#Vitamin D').text(selectObject['Vitamin D']);
      $('#Calcium').text(selectObject.Calcium);
      $('#Iron').text(selectObject.Iron);
      $('#Potassium').text(selectObject.Potassium);
      $('#Vitamin A').text(selectObject['Vitamin A']);
      $('#Vitamin C').text(selectObject['Vitamin C']);

      console.log(selectObject, selectedArrayText);
    });
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
  // $('#aboutContent').hide();
  // $('#recipesContent').hide();

  // createView.handleSelectedIngredients();
  // createView.resetPage();

  module.createView = createView;
}(window));
