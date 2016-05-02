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

get(0);