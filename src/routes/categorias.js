const express = require('express');
const router = express.Router();
const pool = require('../database');
router.get('/add', (req, res) =>{
    res.render('categorias/formCategoria')
});

router.post('/add', async(req, res)=>{
    const{nombre, descripcion } =req.body;

    const NCat ={
        nombre, 
        descripcion
    }

    await pool.query('INSERT INTO CATEGORIAS set ?', [NCat]);
    res.redirect('/categorias/')
})

router.get('/',async(req,res)=>{
    const categorias=await pool.query('select * from categorias');
    res.render('categorias/listacategoria',{categorias});
});


router.get('/eliminar/:id',async(req,res) =>{
    //console.log(req.params.id);
    //res.send('Eliminado')
    const{id} = req.params;
    await pool.query('delete from categorias where id = ?',[id]);
    res.redirect('/categorias/')
})
module.exports = router;