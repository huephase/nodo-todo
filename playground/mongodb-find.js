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

//   db.collection(dbName_TODOS).find().count().then((count) => {

//     console.log(`\n---\n TODOS:\n ${count} \n---\n`);
  
//   }, (err) => {
//       console.log('Unable to fetch todos', err);
//   });

    db.collection(dbName_USERS).find({name: 'Morgan'}).toArray().then((docs) => {

    console.log(`\n---\n TODOS:\n ${JSON.stringify(docs, null, 2)} \n---\n`);
  
  }, (err) => {
      console.log('Unable to fetch todos', err);
  });


  client.close();
});