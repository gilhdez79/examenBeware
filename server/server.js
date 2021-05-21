const clientes= require('./models/Clientes');
const express = require('express');


const bodyparser = require('body-parser');
const app = express();


const rutas = require("./rutas")

//Middleware
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


let cliente = new clientes();
cliente.Cliente_ID = 222;
app.get("/",function(rq,rs){
    rs.send({mensaje:"Hola mundo", cliente:cliente.Cliente_ID});
});

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
//rutas
app.use('/api',rutas);

app.listen(3000, function(){
  console.log("corriendo el server en el puerto 3000");
});
