 import express from 'express';
 
 const app=express();
 const PORT=process.env.PORT || 4321;
 let headers = {
    'Content-Type':'text/plain',
    ...{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE',
  }
  }
  
 app
 .get('/', function (req, res) {
    res.set(headers).send('hello world')
  })
.get('/p', function(req, res) {
    res.set(headers).send("tagId is set to " + req.query.tagId); })
   // /p?tagId=5 (query parameteres)
.get('/p/:tagId', function(req, res) {  res.set(headers).send("tagId is set to " + req.params.tagId);})
// GET /p/5// tagId is set to 5
// GET /p/5// tagId is set to 5
.get('*', function(req, res){
    res.status(404).send('what???');
  })
 .listen(PORT,()=>{
     console.log(`Server is listening on ${PORT}`)
 })