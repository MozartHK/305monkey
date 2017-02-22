var http = require('http');
fs = require('fs');
url = require('url');

http.createServer(function (req, res) {
    console.log('request received');
   var action, form, formData, msg, publicPath, urlData;
    urlData = url.parse(req.url, true);
    action = urlData.pathname;
   if (action === "/signup") {
        res.end('_testcb(\'{"message": "opop"}\')');
   }else if (action==="/lo"){
      form = "run.html";
        return fs.readFile(form, function(err, contents) {
          if (err !== true) {
            res.writeHead(200, {
              "Content-Type": "text/html"
            });
            return res.end(contents);
          } else {
            res.writeHead(500);
            return res.end;
          }
        });
   }
  else{
      res.writeHead(200, {'Content-Type': 'text/plain'});
   // res.write("Ajax call");
     //res.end("end call");
  res.end('_testcb(\'{"message": "Hello world alex!"}\')');
     
   }
     
     
  
  
   
}).listen(9002);