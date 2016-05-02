/* 'CONTROL' FUNCTIONALITY POSSIBLY NEEDED FOR APP

***********************************************************************************************
createController.js

$('#createContent').show().siblings().hide();

***********************************************************************************************

***********************************************************************************************
recipesController.js

$('#recipesContent').show().siblings().hide();

***********************************************************************************************

***********************************************************************************************
findController.js

$('#findContent').show().siblings().hide();

***********************************************************************************************

***********************************************************************************************
aboutController.js

$('#aboutContent').show().siblings().hide();

***********************************************************************************************

Ingredient.createTable();

We only run model or view when CONTROLLER tells us to
Only runs when page tells it to

For ABOUT (static), you'd just call aboutView.showAbout / aboutView.showHide (or whatever)

Could have hideShow function in generic app.js

Page controls Controller controls Model/View

Check that Recipe.all has recipes in it before enlarging one recipe

*/
