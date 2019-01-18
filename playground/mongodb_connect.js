// const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const dbURL = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoAPP';
const dbName_USERS = 'TodoAPP_Users';

// Create a new MongoClient
const client = new MongoClient(dbURL,{ useNewUrlParser: true });

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

//   db.collection(dbName).insertOne({
//     text: 'Something new to do',
//     completed: false
//   }, (err, result) => {
//     if (err) {
//         return console.log('Unable to insert todo!', err);
//     } else {
//         console.log(JSON.stringify(result.ops, null, 2));
//     }
//   });

db.collection(dbName_USERS).insertOne({
    name: 'Jackson',
    age: '27',
    location: 'Moon'
  }, (err, result) => {
    if (err) {
        return console.log('Unable to insert todo!', err);
    } else {
        // console.log(JSON.stringify(result.ops, null, 2));
        console.log(result.ops[0]._id.getTimestamp());
    }
  });

  client.close();
});