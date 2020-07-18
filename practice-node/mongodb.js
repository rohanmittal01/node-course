const mongodb = require("mongodb");
const { db } = require("../task-manager/src/models/task");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const ConnectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "practice-node";

const id = new ObjectId();
console.log(id);

MongoClient.connect(
  ConnectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to Database!");
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Rohan',
    //     age: 18
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Rohan',
    //     age: 19
    // },{
    //     name: 'Vandana',
    //     age: 47
    // }], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //     description: 'Utensils',
    //     completed: true
    // },{
    //     description: 'Tray cleaning',
    //     completed: false
    // }], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection("users").findOne(
    //     {
    //     // _id: new ObjectId('5f120248ece43729b59f1563')
    //     age: 18
    //   },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to find user");
    //     }

    //     console.log(user);
    //   }
    // );


    // db.collection("users").find({age: 18}).toArray((error, users) => {
    //     console.log(users)  
    //   });

    //   db.collection("users").find({age: 18}).count((error, users) => {
    //     console.log(users)  
    //   });

  

//   db.collection('tasks').findOne({_id: new ObjectId("5f11fdafda20802842774aa8")}, (error, task)=>{
//       console.log(task)
//   })

//   db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
//       console.log(tasks)
//   })


//   db.collection('users').updateOne({
//       _id: new ObjectId('5f11fd33ed64eb28212050da')
//     }, { $set: {
//       name: 'Mike'
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })


    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     name: "Rohan"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteOne({
        age: 47
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

});
