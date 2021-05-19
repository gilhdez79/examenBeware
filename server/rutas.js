'use strict';

var express = require('express');
var datosClientes = require('./controllers/crlClientes');

var router = express.Router();

router.post('/NutriNet/Cliente', datosClientes.saveCliente);
router.get('/NutriNet/Cliente/:id', datosClientes.getCliente);
router.get('/NutriNet/Cliente/', datosClientes.getCliente);
router.put('/NutriNet/Cliente/:id', datosClientes.actualizaCliente);

module.exports = router;
