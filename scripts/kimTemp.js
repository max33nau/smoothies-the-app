
  //  var $accordion = $('#accordion');  //collect ingr id on-click
  //   var $selectedListLI = $('#selectedList li');  
  //   var $selectedList = $('#selectedList ul');  //place to append new <li>s
  //    var $selectedTemplate =$('#selectedTemplate');
  //  var compiledNutrientTemplate = Handlebars.compile($selectedTemplate.html());
   
 
  // $accordion.on('click','li',function(event){   
  //     var idName = $(this)[0].className;
  //     var foodName = ($(this).find('.foodName').text());
  //     var unique = false;
  //     var listArray=[];  //this array will hold selected ingred id's 
  //     var portionCount = {};
  //     console.log("$selectedListLI= "+ $selectedListLI.class);
  //      $('#ingredients li').each(function(){  //these are <li>s created dynamically 
  //       listArray.push(Number($(this)[0].className));
  //       var $foodPortions = $(this).find('.portionCount'); //portion count is class gerenated dynamically
       
  //       var portionCount = Number($foodPortions.text());
  //       console.log(portionCount);
  //        console.log("doIhaveclassname: "+$(this)[0].className);
  //        console.log("doIhaveid?:  "+idName);
  //        console.log("list array = "+ listArray)
  //       if(idName == $(this)[0].className){
  //         portionCount++;
  //         unique = true;
  //       }
  //       portionCount[Number($(this)[0].className)] = portionCount;
  //       $foodPortions.text(portionCount);
       
  //     });
      
  //     if(unique == false){
  //       listArray.push(Number($(this)[0].className));
  //       var updatedListItem = '<li class='+idName+'> <span class="foodName">'+foodName+'</span> <br>Number Of Portions:<span class="portionCount"> 1 </span> </li>';
  //       portionCount[idName] = 1;
  //       $('#ingredients').append(
  //         updatedListItem
  //        ); 
  //     }
  //     evaluateFinalNutrients(listArray, portionCount);
  //     // console.log("list array = "+ portionCount)
  //   });
    
  //   function evaluateFinalNutrients(listArray, portionCount){
  //      $('nutritionFacts').empty();
  //     var finalNutrientsValue = {};
  //     var reducedArray = Ingredient.all.filter(function(object){
  //       if(listArray.indexOf(object.id) > -1) {
  //         console.log("listarray: "+listArray);
  //         return object;
  //       }
  //     });
      
  //     reducedArray.forEach(function(object){
  //       console.log("reduced array = "+reducedArray);
  //       object.nutrient.forEach(function(nutrientObject){
  //         var newObject = {};
  //         if(!finalNutrientsValue[nutrientObject.name]){
  //           newObject.name = nutrientObject.name;
  //           newObject.unit = nutrientObject.unit;
  //           var total = Number(nutrientObject.value) * portionCount[object.id];
  //           newObject.value = total;
  //           finalNutrientsValue[nutrientObject.name] = newObject;
  //         }else {
  //           finalNutrientsValue[nutrientObject.name].value +=Number(nutrientObject.value) * portionCount[object.id];
  //         }
  //       });
  //     });
  //     reducedArray[0].nutrient.forEach(function(nutrientObject){
  //       $('nutritionFacts').append(
  //       compiledNutrientTemplate(finalNutrientsValue[nutrientObject.name])
  //     );
  //     });
  //   }
  
  //   $('#btnReset').on('click',function(){
  //     $('#nutritionFacts').empty();
  //     $('ingredients').empty();
  //   });
    