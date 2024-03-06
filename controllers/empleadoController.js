
const {Empleados} = require('../models/Empleados');

const empleadoController = {
    getAllEmpleados: (req,res)=>{
        Empleados.getAllEmpleados((error,empleados)=>{
            if(error){
                return res.status(500).json({message: error.message})
            }
            res.json(empleados);
        })
    },
    createEmpleado: (req,res)=>{

        const newEmpleado = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            cargo: req.body.cargo,
            pais: req.body.pais,
            anios: req.body.anios
        };
        Empleados.createEmpleado(newEmpleado,(error,results)=>{
           

            if(error){
                return res.status(400).json({ message: error.message });
            }
            res.status(201).json({message: 'Empleado Registrado exitosamente',empleado:newEmpleado})
        })
    },

    updateEmpleado: (req,res)=>{
        const empleadoId = req.params.id;
        const updateEmpleado = {
            nombre: req.body.nombre,
            edad: req.body.edad,
            cargo: req.body.cargo,
            pais: req.body.pais,
            anios: req.body.anios
        };

        Empleados.updateEmpleado(empleadoId,updateEmpleado,(error,results)=>{
            if(error){
                return res.status(400).json({ message: error.message });
            }
            res.json({message: 'Empleado actualizado correctamente',empleado:updateEmpleado})
        });
    },
    deleteEmpleado: (req,res)=>{
        const empleadoId = req.params.id;
        Empleados.deleteEmpleado(empleadoId,(error,results)=>{
            if(error){
                return res.status(400).json({ message: error.message });
            }
            res.json({message: 'Empleado eliminado exitosamente',empleado:results})
        });
    },
    getEmpleadoById: (req,res)=>{
        const empleadoId = req.params.id;
        Empleados.getEmpleadoById(empleadoId,(error,results)=>{
            if(error){
                return res.status(500).json({message: error.message})
            }
            res.json(results);
        })
    }

}

module.exports.empleadoController = empleadoController;