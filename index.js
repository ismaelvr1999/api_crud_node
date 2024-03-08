const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

//Routes
const { routerEmpleados } = require('./routes/routerEmpleados');
app.use('/empleados',routerEmpleados);

const { routerAuth } = require('./routes/routerAuth');
app.use('/auth',routerAuth);

/*
app.post('/create',(req,res)=>{
    const {nombre} = req.body;
    const {edad} = req.body;
    const {cargo} = req.body;
    const {pais} = req.body;
    const {anios} = req.body;

    db.query('INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES(?,?,?,?,?)',[nombre,edad,pais,cargo,anios],
    (err,result)=>{
        if (err) console.log(err);
        else res.send(result);
    });
});
*/
//app.get('/empleados',empleadoController.getAllEmpleados);
/*
app.put('/update',(req,res)=>{
    const {id} = req.body
    const {nombre} = req.body;
    const {edad} = req.body;
    const {cargo} = req.body;
    const {pais} = req.body;
    const {anios} = req.body;

    db.query('UPDATE empleados SET nombre=?,edad=?,pais=?,cargo=?,anios=? WHERE id=?',[nombre,edad,pais,cargo,anios,id],
    (err,result)=>{
        if (err) console.log(err);
        else res.send(result);
    });
});

app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params;

    db.query('DELETE FROM empleados WHERE id=?',[id],
    (err,result)=>{
        if (err) console.log(err);
        else res.send(result);
    });
});


*/

app.get('/',(req,res)=>{
    res.send("hola mundo");
});

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001");
});