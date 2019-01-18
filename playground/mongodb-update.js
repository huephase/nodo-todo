// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const dbURL = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoAPP';
const dbName_TODOS = 'Todos';
const dbName_USERS = 'TodoAPP_Users';

// Create a new MongoClient
const client = new MongoClient(dbURL,{ useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  // findOneAndUpdate by _id using mongo ObjectID
  db.collection(dbName_USERS).findOneAndUpdate(
      { _id: new ObjectID('5c3f6f8df5093f226806c618') },
      { $set: {"name": "Morganssss"}, $inc: {"age": 3} },
      { returnOriginal: false }
  ).then( (result) => {
    console.log(result);
  });

  client.close();
});