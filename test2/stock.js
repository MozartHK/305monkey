var http = require('http');
var stockPrice = 10;

function GetStockPrice(ticker) {
  var options = {
    host: 'dev.markitondemand.com',
    port: 80,
    path: '/MODApis/Api/v2/Quote/json?symbol=' + ticker,
    method: 'GET'
  };
  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log(chunk);
      const json = JSON.parse(chunk);
      stockPrice = json.LastPrice;
    });
  }).end();

  return (stockPrice)

}

//module.exports = GetStockPrice;
//exports.GetStockPrice = GetStockPrice;

GetStockPrice('AMZN', function(data){
   console.log(data);
});
