var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var path = require('path')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


//To Create Server
var server = app.listen(process.env.PORT||3000, ()=>{
	console.log("Server Listening at http://localhost:3000");
	});


//To render HomePage i.e., to enter username
app.get('/', (req, res, next)=>{
	res.render('home.ejs');
});

