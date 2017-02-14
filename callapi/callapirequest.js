var request = require('request');
request({
    uri: 'https://example.com/book/search?q=' + bookName,
    method: 'GET'
}, function (error, response, body) {
    if (!error && response.statusCode == 200){}
       // Do something ...
});