var MongoClient = require('mongodb').MongoClient;
 
var myCollection;
var db = MongoClient.connect('mongodb://Node305-alexng88536444.codeanyapp.com:27017/test', function(err, db) {
    if(err)
        throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('test_collection');
});