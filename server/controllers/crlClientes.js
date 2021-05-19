'use strict'
 const clienteModel = require('../models/Clientes');
 let clientes_json = [];
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
   clientes_json.push(cliente);
    clientes_json.push(clientes2);

 var controller= {
   saveCliente:(req,res)=>{

     try {
       const clientes_lista_correo = clientes_json.filter(item => {
         return item.Correo_Electronico == req.body.Correo_Electronico
       });

       const clientes_lista_cliente = clientes_json.filter(item => {
         return item.Nombre_Usuario == req.body.Nombre_Usuario
       });

       let repsuesta = {};
       if (clientes_lista_correo.length == 0 && clientes_lista_cliente.length == 0) {
         let clientes2 = new clienteModel();
            clientes2.Nombre = req.body.Nombre;
            clientes2.Apellidos = req.body.Apellidos;
            clientes2.Nombre_Usuario = req.body.Nombre_Usuario;
            clientes2.Correo_Electronico = req.body.Correo_Electronico;
            clientes2.Contrasenia = req.body.Contrasenia;
         clientes_json.push(clientes2);
         repsuesta = {
           'Cve_Error': 0,
           'Cve_Mensaje': 'Cliente ingresado correctamente'
         };
       } else {
         if (clientes_lista_correo.length > 0)
           repsuesta = {
             'Cve_Error': -1,
             'Cve_Mensaje': 'El cliente no se agrego, por que el correo ya se encuentra registrado.'
           };
         else if (clientes_lista_cliente.length > 0)
           repsuesta = {
             'Cve_Error': -1,
             'Cve_Mensaje': 'El cliente no se registro por que el usuario utilizado, no se encuentra disponible.'
           };
       }
      console.log(req.body.Correo_Electronico);
       return res.status(200).json(clientes_json)
     } catch (e) {
       return res.status(400).send(
         {
           Cve_Error:"error",
           Cve_Mensaje:e
         });
     }
   },
   getCliente:(req,res)=>{
     try {
       return res.status(200).json(clientes_json)
     } catch (e) {
       return res.status(400).send({

           Cve_Error:"error",
           Cve_Mensaje:e

       })
     }
   },
   eliminarCliente:(req,res)=>{
     try {
       return res.status(200).send(
         {
           curso:"Angular"
         }
       )
     } catch (e) {
       return res.status(400).send({

           Cve_Error:"error",
           Cve_Mensaje:e

       })
     }
   },
   actualizaCliente:(req,res)=>{
     try {
       return res.status(200).send({

           curso:"Angular"

       })
     } catch (e) {
       return res.status(400).send({

           Cve_Error:"error",
           Cve_Mensaje:e

       })
     }
   },

 };

 module.exports = controller;
