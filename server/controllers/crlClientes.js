'use strict'
 const clienteModel = require('../models/Clientes');
 let clientes_json = [];
let cliente = new clienteModel();
    cliente.Cliente_ID=1;
   cliente.Nombre = "Juan";
   cliente.Apellidos = "Perez izquierdo";
   cliente.Nombre_Usuario = "JPEREZ";
   cliente.Correo_Electronico = "juan.perez@nutri.com";
   cliente.Contrasenia = "abcd1020";

   let clientes2 = new clienteModel();
      clientes2.Cliente_ID=2;
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
      console.log(clientes_lista_correo);
      console.log(clientes_lista_cliente);
       let repsuesta = {};
       if (clientes_lista_correo.length == 0 && clientes_lista_cliente.length == 0) {
         let clientes2 = new clienteModel();
          clientes2.Cliente_ID=  req.body.Cliente_ID;
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
      //console.log(req.body.Correo_Electronico);
       return res.status(200).json(repsuesta)
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
       if (parseInt(req.params.id)>0 ) {
         let clientes_lista = [];
         if(req.params.id != "" && req.params.id != "0")
            clientes_lista = clientes_json.filter(item =>{
                return item.Cliente_ID == req.params.id;
            });
            //  clientes_lista = clientes_json;
              return res.status(200).json(clientes_lista)
       }else {
         return res.status(200).json(clientes_json)
       }

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
     let arraux = clientes_json;
     console.log(req.body.Cliente_ID);
     try {
       let repsuesta = {};
       if (parseInt(req.body.Cliente_ID>0 )) {

           arraux.map(item =>{
             if ( parseInt(item.Cliente_ID) == parseInt(req.body.Cliente_ID)){
               item.Nombre_Usuario = res.body.Nombre_Usuario;
               item.Nombre = res.body.Nombre;
               item.Correo_Electronico = res.body.Correo_Electronico;
               item.Fecha_Creacion = res.body.Fecha_Creacion;
               item.Apellidos = res.body.Apellidos;
             }
             });

             clientes_json = arraux;
             repsuesta = {'Cve_Error' : 0, 'Cve_Mensaje':'Cliente ingresado correctamente'};

     }
     console.log(clientes_json);
      return res.status(200).json(repsuesta)
   }
   catch (e) {
        repsuesta = {'Cve_Error' : -1, 'Cve_Mensaje':'El Cliente no se actualizo, intente de nuevo'};
     return res.status(400).send(repsuesta)
   }
 }
}
 module.exports = controller;
