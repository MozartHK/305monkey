var mongo = require('mongodb');
var myCollection;


var insertData = function(db, callback) {  
    //连接到表  
    var collection = this.db.collection('tb2');
    //插入数据
    var data = [{"name":'wilson001',"age":21},{"name":'wilson002',"age":22}];
    collection.insert(data, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
    });
}

db = new mongo.Db('mydb', new mongo.Server("http://Node305-alexng88536444.codeanyapp.com", 27017, {}), {});
console.log("Connected to Database");
db.open(function(err, db) {
  //  myCollection = this.db.collection('test_collection');
insertData(db, function(result) {
        console.log(result);
        //db.close();
    });
                    console.log("element inserted");  
              
});


