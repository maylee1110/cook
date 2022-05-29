const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')


 const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://maylee:abcd1234@cluster0.td5cl.mongodb.net/?retryWrites=true&w=majority";
 const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 client.connect(err => {
   const collection = client.db("test").collection("devices");
   console.log('연결') 
   client.close();
 });


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





