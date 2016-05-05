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
    var selectedArray = [];
    var $qtySelected = $('#qtySelected');
    
    $accordion.on('click','li',function(){
      var selectedItem = $(this).text().split(":",1)[0];
      selectedArray.push(selectedItem);
      // $qtySelected.text(function(i, val){
      //   return +val+1});
      console.log(selectedArray);
      
      var selectedNutrients = {}
      Ingredient.all.forEach(function(object){
        if(selectedArray.indexOf(object.name)>-1){
          object.nutrient.forEach(function(nutrientObj){
            if(!selectedNutrients[nutrientObj.name]){
              selectedNutrients[nutrientObj.name]=0;
            } else{
              console.log(nutrientObj.value);
              finalNutrients[nutrientObj.name]+=nutrientObj.value;
            }
          });
        };
      }); 
    });    
  };
           

  //when ingredient added or removed or quantity changed, update ingredients AND nutrition info
  createView.updateCurrentRecipe = function() {};

  //render partial nutrition label based on latest currentRecipe info
  createView.renderPartialLabel = function() {};

  //show (or create) full label popup based on latest currentRecipe info
  createView.showFullLabel = function() {};

  //hide (or remove) full label popup
  createView.hideFullLabel = function() {};

  //event handler for Save Recipe button
  createView.saveRecipe = function() {};

  //deselect all ingredients, set quantities to 0
  createView.resetPage = function() {};

  //show Create section, hiding all other "page" sections
  createView.renderPage = function() {
    $('#createContent').show().siblings().hide();
  };







//temporary hide to keep clean workspace REMOVE! WHEN COMPLETE
$('#aboutContent').hide();
$('#recipesContent').hide();

createView.handleSelectedIngredients();


  module.createView = createView;
}(window));


