const express = require('express');
const routerEmpleados = express.Router();
const { empleadoController } = require('../controllers/empleadoController');
/*const middlewareEpleados = (req,res,next)=>{
    ip = req.ip;
    console.log(ip);
    next();
}
*/
//routerEmpleados.use(middlewareEpleados);

routerEmpleados.get('/',empleadoController.getAllEmpleados);

routerEmpleados.get('/:id',empleadoController.getEmpleadoById);

routerEmpleados.post('/',empleadoController.createEmpleado);

routerEmpleados.put('/:id',empleadoController.updateEmpleado);

routerEmpleados.delete('/:id',empleadoController.deleteEmpleado);

module.exports.routerEmpleados = routerEmpleados;