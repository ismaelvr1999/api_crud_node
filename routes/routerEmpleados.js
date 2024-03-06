const express = require('express');
const routerEmpleados = express.Router();
const { empleadoController } = require('../controllers/empleadoController');

routerEmpleados.get('/',empleadoController.getAllEmpleados);

routerEmpleados.get('/:id',empleadoController.getEmpleadoById);

routerEmpleados.post('/',empleadoController.createEmpleado);

routerEmpleados.put('/:id',empleadoController.updateEmpleado);

routerEmpleados.delete('/:id',empleadoController.deleteEmpleado);

module.exports.routerEmpleados = routerEmpleados;