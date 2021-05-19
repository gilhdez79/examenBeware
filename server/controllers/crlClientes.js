'use strict'
 const clienteModel = require('../models/Clientes');
 let arryClientes = [];
let cliente = new clienteModel();
   cliente.Nombre = "Juan";
   cliente.Apellidos = "Perez izquierdo";
   cliente.Nombre_Usuario = "JPEREZ";
   cliente.Correo_Electronico = "juan.perez@nutri.com";
   cliente.Contrasenia = "abcd1020";
   let clientes2 = new clienteModel();
      clientes2.Nombre = "Maria";
      clientes2.Apellidos = "Juarez izquierdo";
      clientes2.Nombre_Usuario = "MJUAREZ";
      clientes2.Correo_Electronico = "mjuarez@nutri.com";
      clientes2.Contrasenia = "abcd1021";
   arryClientes.push(cliente);
    arryClientes.push(clientes2);

 var controller= {
   saveCliente:(req,res)=>{
     try {
       return res.status-(200).send({

           curso:"Angular"
         })
     } catch (e) {
       return res.status-(400).send(
         {
           Cve_Error:"error",
           Cve_Mensaje:e
         });
     }
   },
   getCliente:(req,res)=>{
     try {
       return res.status-(200).send(arryClientes)
     } catch (e) {
       return res.status-(400).send({

           Cve_Error:"error",
           Cve_Mensaje:e

       })
     }
   },
   eliminarCliente:(req,res)=>{
     try {
       return res.status-(200).send(
         {
           curso:"Angular"
         }
       )
     } catch (e) {
       return res.status-(400).send({

           Cve_Error:"error",
           Cve_Mensaje:e

       })
     }
   },
   actualizaCliente:(req,res)=>{
     try {
       return res.status-(200).send({

           curso:"Angular"

       })
     } catch (e) {
       return res.status-(400).send({

           Cve_Error:"error",
           Cve_Mensaje:e

       })
     }
   },

 };

 module.exports = controller;
