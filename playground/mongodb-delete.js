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

  // deleteMany
  db.collection(dbName_USERS).deleteMany({location: 'Brazil'}).then( (result) => {
    console.log(result);
  });


  // deleteOne
//   db.collection(dbName_TODOS).deleteOne({text: 'Get Coffee'}).then( (result) => {
//     console.log(result.result);
//   });

  // // findOneAndDelete
  // db.collection(dbName_TODOS).findOneAndDelete({completed: false}).then( (result) => {
  //   console.log(result);
  // });
  // findOneAndDelete by _id using mongo ObjectID
  db.collection(dbName_TODOS).findOneAndDelete({_id: new ObjectID('5c41c2022cfcbc9a0925e9d9')}).then( (result) => {
    console.log(result);
  });



  client.close();
});