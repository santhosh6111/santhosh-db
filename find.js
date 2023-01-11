var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Santhosh:sandy.mongo@nodejssample.tka12rt.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("employees").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});