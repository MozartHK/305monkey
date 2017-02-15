var mongo = require('mongodb');

db = new mongo.Db('mydb', new mongo.Server("http://Node305-alexng88536444.codeanyapp.com", 27017, {}), {});
console.log("Connected to Database");
db.open(function(err, db) {
    db.collection('sample', function(err, collection) {
        doc = {
            "prop1" : "val",
            "prop2" : {
                a : 1,
                b : 2
            }
        };
        collection.insert(doc, function() {
            db.close();
        });
    });
});