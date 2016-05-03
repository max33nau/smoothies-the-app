var request = require( 'request' );
var fs = require( 'fs' );

function get(offset){
  var url = 'http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&max=500&offset=' + offset + '&api_key=RN7DziGWb9pvZGRnMLAW9G3534a5rH7rrKSYWbRt';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var length = data.list.item.length; 
      console.log( offset, length );
      if( length ) {
        fs.writeFile( 'food' + offset + '-' + length + '.txt', JSON.stringify(data.list.item) );
        get( offset + 500 );
      }
      
    }
  });
}

// get(0);  //this runs get food list

//get nutrition list below

var filename = 'food-nutrients.json';

function nutrient(ndbno, cb){
  var url = 'http://api.nal.usda.gov/ndb/reports/?ndbno=' +ndbno+ '&type=f&format=json&api_key=RN7DziGWb9pvZGRnMLAW9G3534a5rH7rrKSYWbRt';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var nutrients = data.report.food.nutrients.map( function(nutrient){
        return { nutrient_id: nutrient.nutrient_id, value: nutrient.value };
      });
      
      var result = { ndbno: ndbno, nutrients: nutrients };
        
      fs.appendFileSync( filename, JSON.stringify(result, true, 2) + ',' );
      cb();
    } else {
      console.log( 'error', error );  
    }
  });
}

var ids = ['35192', '09400']
fs.writeFileSync( filename, '[\n' );
var count = 0;
getNutrients();

function getNutrients(){
  id = ids[count];
  nutrient(id, function(){
    count++;
    if( count < ids.length ){
      getNutrients();
    }
    else {
      fs.appendFileSync( filename, '\n]' );
    }
  });
}


