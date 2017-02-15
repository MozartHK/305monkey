var request = require('request');
function get_trustyou(trust_you_id, callback) {
    var options = {
        uri : 'https://api.trustyou.com/hotels/'+trust_you_id+'/seal.json',
        method : 'GET'
    }; 
    var res = '';
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res = body;
      
        }
        else {
            res = 'Not Found';
        }
        callback(res);
    });
}
var Http = require( 'http' ),
    Router = require( 'router' ),
    server,
    router;
router = new Router();
 
server = Http.createServer( function( request, response ) {
  router( request, response, function( error ) {
    if ( !error ) {
      response.writeHead( 404 );
    } else {
      // Handle errors
      console.log( error.message, error.stack );
      response.writeHead( 400 );
    }
    get_trustyou("674fa44c-1fbd-4275-aa72-a20f262372cd", function(resp){
    console.log(resp);
});
    response.end( 'RESTful API Server is running!' );
  });
});
 
server.listen( 3000, function() {
  console.log( 'Listening on port 3000' );
});