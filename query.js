const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Santhosh:sandy.mongo@nodejssample.tka12rt.mongodb.net/test";


MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mydb");
    dbo.collection("customers").drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
        db.close();
    });
});
