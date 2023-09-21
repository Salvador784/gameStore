const express = require('express');
const router = express.Router();
const pool = require('../database');

// router.post('/registro',async(req,res)=>{
//     const{nombre,email,username,password}=req.body;
//     const estatus=1;
//     const fecha=new Date();
//     const fechaRegistro=fecha.toLocaleDateString('es-MX');
//     const nuevoUsuario={
//         nombre,
//         email,
//         username,
//         password,
//         estatus,
//         fechaRegistro
//     }
//     console.log(nuevoUsuario);
//     await pool.query('insert into usuarios set?', [nuevoUsuario]);
//     res.render('./formLogin');
// })

router.post('/registro', async (req, res) =>{
    const {nombre, email, username, password} = req.body;
    const estatus = 1;
    const fecha = new Date();
    const fechaRegistro = fecha.toLocaleDateString('es-MX');
    const nuevoUsuario = {
        nombre, 
        email, 
        username,
        password,
        estatus,
        fechaRegistro
    }
    console.log(nuevoUsuario);
    await pool.query('INSERT INTO USUARIOS set ?', [nuevoUsuario]);
    res.render('./formLogin')
});

module.exports = router;