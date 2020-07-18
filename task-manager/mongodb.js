//CRUD Create read update delete 

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const { MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1/27017'
const databaseName = 'task-manager'

const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{useNewUrlParser: true,useUnifiedTopology:true},(error,client)=>{
    if(error){
      return console.log('Unable to connect to Database!')
    }
    console.log('Connected Successfully')
    const db = client.db(databaseName)

/////////////////////////////////DELETE////////////////////////////////////////    
    // db.collection('tasks').deleteOne({completed: false}).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').deleteOne({
    //     age:40
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
/////////////////////////////////UPDATE////////////////////////////////////////    
    // db.collection('tasks').updateMany({
    //     completed:false
    // },{
    //     $set: {
    //         completed:true
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


    //    db.collection('tasks').updateOne({completed:false},{
    //     $set:{
    //         description:"Sweeping"
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // db.collection('users').updateOne({_id:new ObjectID("5e88ea522a69f9049fbba492")},{
    //     $set:{
    //         age:19
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })


//////////////////////////////////READ/////////////////////////////////////////
    // db.collection('users').findOne({_id: new ObjectID('5e88ea522a69f9049fbba492')},(error,result)=>{
    //   if(error){
    //     return console.log(error)
    //   }
    //   console.log(result)
    // })
    // db.collection('tasks').find({completed:true}).toArray((error,result)=>{
    //   console.log(result)
    // })

    // db.collection('users').find({name:'Rohan Mittal'}).toArray((error,result)=>{
    //   console.log(result)
    // })

    // db.collection('users').find({name:'Rohan Mittal'}).count((error,result)=>{
    //   console.log(result)
    // })

    // db.collection('users').findOne({name:'Rohan Mittal'},(error,result)=>{
    //   if(error){
    //     return console.log(error)
    //   }
    //   console.log(result)
    // })



////////////////////////////////CREATE/////////////////////////////////////////
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Rohan Mittal',
    //     age:20
    // }, (error,result)=>{
    //   if(error){
    //     return console.log('Unable to insert user')
    //   }
    //   console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //   {
    //     name:'Vandana',
    //     age: 40
    //   },{
    //     name: 'Vinod',
    //     age:40
    //   }],(error,result)=>{
    //   if(error){
    //     return console.log(error)
    //   }
    //   console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([{
    //   description: 'Sweep',
    //   completed:true
    // },{
    //   description: 'mop',
    //   completed:true
    // },{
    //   description:'utensils',
    //   completed:false
    // }],(error,result)=>{
    //   if(error){
    //     return console.log(error)
    //   }
    //   console.log(result.ops)
    // })
})

