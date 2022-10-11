const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const folderViews = path.join(__dirname, "views");
const app = express();
const productsRouter = require("./routes/routes");
//const luxon= require ("luxon")
//const { DateTime } = require("luxon");
//const jwt = require('jsonwebtoken');
//const multer = require('multer');
//const upload = multer();
//require('crypto').randomBytes(64).toString('hex')//->genera el token
//guardado en el .env
//const dotenv = require('dotenv');
const  Contenedor  = require('./Contenedor.js').Contenedor
const myInstance = new Contenedor("productos.txt");

// get config vars
//dotenv.config();

// access config var
//process.env.TOKEN_SECRET;
//function generateAccessToken(username) {
//  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
//}


//let datos = DateTime.now().setZone('America/Argentina/Buenos_Aires').toLocaleString({ month: 

app.listen(8080,()=>console.log("server listening on port 8080"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine("handlebars", handlebars.engine());
app.set("views", folderViews);
app.set("view engine", "ejs");
app.get('/handlebars/productos', (req, res) => {app.set("view engine", "handlebars");myInstance.getAll().then((data) => 
res.render('existingProduct', {productos:data}))});


app.get('/ejs/productos', (req, res) => {app.set("view engine", "ejs");myInstance.getAll().then((data) => 
res.render('existingProduct', {data}))});

app.get('/pug/productos', (req, res) => {app.set("view engine", "pug");myInstance.getAll().then((data) => 
res.render('existingProduct', {data}))});
app.get('/addproduct', (req, res) => {app.set("view engine", "ejs");
res.render('newProduct');
})
app.post('/productos/',(req, res)=>{myInstance.save(req.body);res.render('/productos')});

app.get('/', (req, res) =>  res.render('welcome'));

//app.use("/productos", productsRouter);
//app.get('/', (req, res) => res.sendFile(__dirname + '/views/crud.html'))
//app.get('/signup', (req, res) => res.sendFile(__dirname + '/views/signup.html'))
//app.get('/index', (req, res) => res.sendFile(__dirname + '/views/index.html'))
//app.get('/productos', (req, res) => res.sendFile(__dirname + '/views/handlebar1.html'))






















