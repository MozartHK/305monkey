var http = require('http');

http.createServer(function (req, res) {
    console.log('request received');
    res.writeHead(200, {'Content-Type': 'text/plain'});
   // res.write("Ajax call");
     //res.end("end call");
  res.end('_testcb(\'{"message": "Hello world!"}\')');
}).listen(9001);