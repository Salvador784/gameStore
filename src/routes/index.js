const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/', async(req, res) => {
    const productos = await pool.query('select id, nombre, precio, imagen from productos')
    const img = await pool.query('select * from img');
    console.log(img)
    res.render('home', {productos});
});

router.get('/img', async (req, res)=>{
    const img = await pool.query('select * from img');
    console.log(img)
    res.render('home', {img:img})
});

router.get('/signup', (req, res) => {
    res.render('formLogin');
});


router.post('/signup/', async (req, res) => {
    //console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const resultado = await pool.query('select * from usuarios where username=? and password=?', [username, password]);
    //console.log(resultado);
    if (username == "admin" && password == '123456') {
        res.send('Vista de administrador');
    } if (resultado != '') {
        if (resultado[0].username == username && resultado[0].password == password) {
            const reactivos = await pool.query('SELECT * FROM REACTIVOS');
           // res.render('test/test', { reactivos/*:reactivoAleatorio */});
           res.send('Vista usuario')
        }
    } else {
        res.render('./formLogin')
    }

});



router.get('/registro', (req, res) => {
    res.render('registro')
});

module.exports = router;