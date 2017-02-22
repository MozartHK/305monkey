if(typeof exports == "undefined"){
    exports = this;
}

Example2 = function() {
    this.init();
};

Example2.prototype = {
    init: function() {
         console.log('hello world');
      var http = require('http');
      http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      console.log(chunk);
      const json = JSON.parse(chunk);
      stockPrice = json.LastPrice;
    });
  }).end();
    }
};

exports.Example2 = new Example2();