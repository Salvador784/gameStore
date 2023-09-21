//Importaciones
const express = require('express');
const morgan = require('morgan');
const{engine} = require('express-handlebars');
const path = require('path');

//Inicializaciones
const app = express();

//Settings
app.set('port', process.env.PORT || 2000);
const ruta = __dirname;
//console.log (ruta);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',engine ({
    defaultlayout : 'main',
    LayoutsDir : path.join(app.get('views'),'layouts'),
    PartialsDir : path.join(app.get('views'),'partials'),
    extname : 'hbs',
    helpers : require('./lib/handlebars')
}));

//Usar la configuracion
app.set('view engine','.hbs')

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended : false}));

//Variables globales
app.use((req,res,next)=>{
    next();
})

//routes
app.use(require('./routes'));
app.use('/categorias', require('./routes/categorias'));
app.use('/productos', require('./routes/productos'));
app.use('/usuarios', require('./routes/usuarios'))
//Public

app.use(express.static(path.join(__dirname,'public')));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('server port :', app.get('port'));
});