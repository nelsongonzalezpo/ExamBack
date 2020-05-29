const express = require('express');
const app = express();
const mongoose = require('./mongoose')

//Declaration routes
const data_router = require('./routes/data_router')


app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();

})

//Using endpoints
app.use(data_router)
app.listen(3000, () => console.log("Server working"));

 

