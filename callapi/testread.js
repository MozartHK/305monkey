var request = require("request");
  var fs = require("fs");
  var cheerio = require("cheerio");
  request({
    url: "http://node305-alexng88536444.codeanyapp.com:3002/todo/1",
    method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    console.log(r);
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("body");
    
    for(var i=0;i<titles.length;i++) {
      result.push($(titles[i]).text());
     console.log($(titles[i]).text());
    }
    fs.writeFileSync("result.json", JSON.stringify(result));
  });