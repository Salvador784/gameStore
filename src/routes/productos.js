const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/add',async (req, res) => {
    const categorias = await pool.query('select * from categorias')
    res.render('productos/formProductos', {categorias});
})

router.get('/', async (req, res)=>{
    const productos = await pool.query('select * from productos');
    res.render('productos/listaProductos', {productos:productos})
}) 

router.post('/add', async(req, res) =>{
    console.log(req.body);
    const {nombre, descripcion, imagen, precio, idcategoria} = req.body;
    const nuevoPro = {
        nombre, 
        descripcion,
        imagen,
        precio,
        idcategoria
    }
    await pool.query('insert into productos set ?', [nuevoPro]);
    //await pool.qu
    //console.log(req.body);
    res.redirect('/productos/')
});



router.get('/eliminar/:id', async (req, res)=>{
    const {id} = req.params;
    await pool.query('delete from productos where id = ?', [id]);
    res.redirect('/productos/')
})


router.get('/desc/:id', async (req, res) => {
    const { id } = req.params; // Se corrigió el guion en req.params
    const productos = await pool.query('SELECT nombre, descripcion, precio, imagen FROM productos WHERE id = ?', [id]);
    if (productos.length === 0) {
        // Manejo de error si no se encuentra el producto con el id especificado
        res.status(404).send('Producto no encontrado');
    } else {
        const producto = productos[0];
        res.render('productos/descripcion', { productos: producto[0] });
    }
});

module.exports = router;