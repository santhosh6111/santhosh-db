const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Santhosh:sandy.mongo@nodejssample.tka12rt.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Highway 37" };
    var newvalues = { $set: { name: "santhosh", address: "Canyon 123" } };
    dbo.collection("employees").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});
