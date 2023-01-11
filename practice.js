const MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://Santhosh:sandy.mongo@nodejssample.tka12rt.mongodb.net/test";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");
  const myobj = [
    { name: "Company Inc", address: "Highway 37" },
    { name: "sandy", address: "Highway 3" },
    { name: "gowtham", address: "Highway 7" },
    { name: "arun", address: "Highway 11" }
  ];

  dbo.collection("employees").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("number of document inserted:" + res.insertedCount);

    db.close();
  });
});
