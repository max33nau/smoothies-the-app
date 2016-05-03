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
        var label = '';
        if (nutrient.measures[0]){
          label=nutrient.measures[0].label;}
        return {nutrient_id: nutrient.nutrient_id, portion: label, nutrient_name: nutrient.name, value: nutrient.value };
      });
      
      var result = { ndbno: ndbno, nutrients: nutrients };
        
      fs.appendFileSync( filename, JSON.stringify(result, true, 2) + ',' );
      cb();
    } else {
      console.log( 'error', error );  
    }
  });
}

var ids = ['35192','09400']
  // '35192','09400','09003','09021']
// ,'11007','11959','11011','09037','11022','09040','02044','11086','11080','14056','14016','14091','14121','14171','14090','14180','14284','14654','14064','14067','14066','14639','14544','14278','14545','14649','09042','09050','09057','11096','11090','09060','01145','11109','11112','11114','11124','11135','11143','11147','11149','01016','01015','09062','09070','11152','11154','19902','19903','19904','01049','09433','19165','11161','11165','09079','09078','43382','01053','11206','09084','11207','09087','09421','02045','04589','11212','01124','01123','01125','11209','09088','11213','11984','11957','09089','09451','11215','19177','11216','09110','09107','11218','11974','09404','09111','09131','09139','35233','02055','35043','09144','09150','11233','01289','09148','09149','11972','11250','11251','11252','11257','09159','09164','09167','11254','09176','09181','09183','09184','01230','01175','42290','01106','01174','01109','01211','09190','11270','16235','16236','09191','12695','12061','12077','12088','12087','12098','12115','12104','12117','12119','12127','12120','12131','12142','12147','12151','12154','20033','48052','04529','04581','04501','04047','42231','04055','04058','04545','04528','09206','09200','09226','11297','09232','09236','16098','16087','09340','09252','09412','09414','09415','02064','11819','11979','11333','11821','11951','09265','09409','09266','09277','09279','09442','09286','09287','09423','19296','11422','09296','20137','11952','11429','09298','09302','09307','20060','02063','11435','02047','11442','11445','11446','11666','11669','12006','12220','12012','12205','12014','12198','12023','12036','16223','02065','02001','02002','02003','02005','02006','02009','02010','02011','02012','02014','02017','02025','02027','02033','02043','11457','11641','11482','11643','11485','11492','11953','09316','19334','19335','19340','11507','19918','19912','19353','09322','09218','20068','02049','43476','11954','11529','11568','02050','02048','09326','20077','20078','11601','01287','01256','01293','01297','01286','01117','01118','01116','01295'
// ]
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


