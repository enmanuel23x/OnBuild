/*  Utilidades y librerias */
var express = require('express'),app = express();
var bodyParser = require('body-parser')
var multer = require('multer');
var fs = require("fs");
var upload = multer({ dest: '/tmp' })
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine','ejs')
app.use('/css',express.static(__dirname+'/src/css'));
app.use('/img',express.static(__dirname+'/src/img'));
app.use('/js',express.static(__dirname+'/src/js'));
/* /Utilidades y librerias */
app.get('/', function(req,res) {
	//Redirecciona al login
	res.sendFile(__dirname+'/index.html')
});
app.get('/*', function(req,res) {
	//Redirecciona al login
	res.redirect('/')
});
//Define el puerto de la plataforma
app.set('port', (process.env.PORT || 8080));
app.listen(app.get('port'), function () {
	//Comienza a ejecutar la plataforma
	console.log('App listening on port '+app.get('port'));
    });
