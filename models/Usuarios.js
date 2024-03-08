const {db} = require('../config/db');

const Usuarios = {
    getUser: (usuarioId,callback)=>{
        db.query('SELECT * FROM usuarios WHERE id=?',[usuarioId],(error,results)=>{
            if (error) callback(error,null);
            else callback(null,results);
        });
    }
}

module.exports.Usuarios = Usuarios;