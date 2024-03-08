const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {Usuarios} = require('../models/Usuarios');


const authController = {
    login: (req, res)=>{
        const {id} = req.body;
        Usuarios.getUser(id,(error,results)=>{
            if(error){
                return res.status(500).json({message: error.message});
            }

            let {password} = results[0];
            res.send(password)
        });
    }
}

module.exports.authController = authController;