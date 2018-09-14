const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err){
    return console.log('Unable to connect to mMongodb server');

  }
  console.log('connected to MongoDb server');
  db.collection('Users').insertOne({
    _id: 123,
    name:'sanjeev',
    age:26,
  },(err,result) => {
    if(err){
      return console.log('unable to connect',err);
    }
    console.log(result.ops);
  });
 // db.collection('Todos').insertOne({
 //
 // }, (err,result) => {
 //   if(err){
 //     return console.log("unable to insert to do");
 //   }
 //   console.log(JSON.stringify(result.ops, undefined, 2));
 // });
  db.close();
});
