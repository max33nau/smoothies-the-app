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
    var $labelTemplate = $('#labelTemplate');
    var compiledLabel = Handlebars.compile($labelTemplate.html());
    
    
    $accordion.on('click','li',function(){
      var selectedText = $(this).text().split(":",1)[0];
      selectedArrayText.push(selectedText);
      // $nutrientList.append('<li>' + selectedText + '</li>');
      // $qtySelected.text(function(i, val){
      //   return +val+1});
   
      // Ingredient.all.forEach(function(object){
      //   >-1){
      var emptyObject = {};
      Ingredient.all.forEach(function(object){
       if(selectedArrayText.indexOf(object.name)>-1){
          object.nutrient.forEach(function(nutrientObj){
            if(emptyObject[nutrientObj.name]){
              emptyObject[nutrientObj.name]+=nutrientObj.qty;
            } else{
              emptyObject[nutrientObj.name]=0;
              emptyObject[nutrientObj.name]+=nutrientObj.qty;
            } 
          });
        }  
      });
      // console.log(emptyObject.Water);
          //the below function sorts the nutrients biggest to smallest and outputs an array.
          var keys = []          
          Object.keys(emptyObject)
            .map(function (k) {return [k, emptyObject[k]]; })
            .sort(function (b,a) {
              if(a[1]> b[1]) return 1;
              if(a[1]< b[1]) return -1;
              return 0;   
            }).forEach(function(d){
              keys.push(d[0],d[1])
            });
            topTen = keys.slice(0,20);
            console.log(topTen);
              
        
          
           
            
      console.log(emptyObject, selectedArrayText);
    });
      
      
  }; 
  
              
  //need to take calories and fats out of array then reduce to top 10, then do handlebars.
           
                    

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


