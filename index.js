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
 .listen(PORT,()=>{
     console.log(`Server is listening on ${PORT}`)
 })