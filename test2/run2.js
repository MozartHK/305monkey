var http = require('http');
url = require('url');
fs = require('fs');
var request = require("request");
var cheerio = require("cheerio");

http.createServer(function (request, response) {
    if (request.headers['x-requested-with'] == 'XMLHttpRequest') {
        // handle async request
        var u = url.parse(request.url, true); //not needed

        response.writeHead(200, {'content-type':'text/json'})
        response.end(JSON.stringify(some_array.slice(1, 10))) //send elements 1 to 10
    } else {
        // handle sync request (by server index.html)
        if (request.url == '/') {
            response.writeHead(200, {'content-type': 'text/html'})
            response.end();
          // util.pump(fs.createReadStream('index.html'), response)
        } else if (request.url == '/car'){
             form = "callcar.html";
          fs.readFile(form, function(err, contents) {
          if (err !== true) {
            response.writeHead(200, {
              "Content-Type": "text/html"
            });
            response.end(contents);
          } else {
            response.writeHead(500);
			response.end('_testcb(\'{"message": "Hello world 444!"}\')');
            //return response.end;
          }
        });
      }else if (request.url == '/weather'){
         form = "callweather.html";
          fs.readFile(form, function(err, contents) {
          if (err !== true) {
            response.writeHead(200, {
              "Content-Type": "text/html"
            });
            response.end(contents);
          } else {
            response.writeHead(500);
			response.end('_testcb(\'{"message": "Hello world 444!"}\')');
            //return response.end;
          }
        });
      }else if (request.url == '/other'){
         form = "callstock.html";
          fs.readFile(form, function(err, contents) {
          if (err !== true) {
            response.writeHead(200, {
              "Content-Type": "text/html"
            });
            response.end(contents);
          } else {
            response.writeHead(500);
			response.end('_testcb(\'{"message": "Hello world 444!"}\')');
            //return response.end;
          }
        });
      }else if (request.url == '/git'){
         form = "callgithubapi.html";
          fs.readFile(form, function(err, contents) {
          if (err !== true) {
            response.writeHead(200, {
              "Content-Type": "text/html"
            });
            response.end(contents);
          } else {
            response.writeHead(500);
			response.end('_testcb(\'{"message": "Hello world 444!"}\')');
            //return response.end;
          }
        });
      }
			else if(request.url == '/other2') {
        html = fs.readFileSync("callstock.html", "utf8");
        response.write(html);
      } else if (request.url ==  "/Example2.js") {
        console.log("call stock.js");
        form = "Example2.js";
          fs.readFile(form, function(err, contents) {
          if (err !== true) {
            response.writeHead(200, {
              "Content-Type": "text/html"
            });
            response.end(contents);
          } else {
            response.writeHead(500);
			response.end('_testcb(\'{"message": "Hello world 444!"}\')');
            //return response.end;
          }
        });
    
      }
                      
          // 404 error
   }

    
}).listen(8002);