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
//rutas
app.use('api/',rutas);
app.listen(3000, function(){
  console.log("corriendo el server en el puerto 3000");
});
