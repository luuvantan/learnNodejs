var mongodb = require('mongodb');

const uri = "mongodb://localhost:27017/learnNode";
var MongoClient = mongodb.MongoClient;

MongoClient.connect(uri, function (err, db) {
    useUnifiedTopology: true;
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      //HURRAY!! We are connected. :)
      console.log('Connection established to', uri);
  
      // do some work here with the database.
  
      //Close connection
      db.close();
    }
  });