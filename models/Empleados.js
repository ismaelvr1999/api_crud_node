const {db} = require('../config/db');

const Empleados = {

    getAllEmpleados: (callback) =>{
        db.query('SELECT * FROM empleados',
        (error,results)=>{
            if (error) callback(error,null);
            else callback(null,results);
        });
    },
    createEmpleado: (empleado,callback) =>{
        db.query('INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES(?,?,?,?,?)',
        [empleado.nombre,empleado.edad,empleado.pais,empleado.cargo,empleado.anios],(error,results)=>{
            if (error) callback(error,null);
            else callback(null,results);
        });
    },
    updateEmpleado: (empleadoId,empleado,callback)=>{

        db.query('UPDATE empleados SET nombre=?,edad=?,pais=?,cargo=?,anios=? WHERE id=?',
        [empleado.nombre,empleado.edad,empleado.pais,empleado.cargo,empleado.anios,empleadoId],(error,results)=>{
            if (error) callback(error,null);
            else callback(null,results);
        });
    },
    deleteEmpleado: (empleadoId,callback) =>{
        db.query('DELETE FROM empleados WHERE id=?',[empleadoId],(error,results)=>{
            if (error) callback(error,null);
            else callback(null,results);
        });
    },
    getEmpleadoById: (empleadoId,callback)=>{
        db.query('SELECT * FROM empleados WHERE id=?',[empleadoId],(error,results)=>{
            if (error) callback(error,null);
            else callback(null,results);
        });
    }
}

module.exports.Empleados = Empleados;