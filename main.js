var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var path = require('path')
var { exec } = require('child_process')
var fs = require('fs')

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


//To Get Code and Language
app.post('/submit', (req, res, next)=>{

	var code = String(req.body.code);
	//console.log("REQ: ",req);
	
	var filename = 'test.' + req.body.lang;
	fs.writeFile(filename,code, (err)=>{
		if(err)
			throw err;
		console.log("Sabed");
	})

	var command = 'python3 compile.py ' + filename;
	exec(command, (error, stdout, stderr)=>{
	if (error)
	{
		console.error(`exec error: ${error}`)
		return;
	}
		//console.log(`stdout:\n${stdout}`);
		//console.error(`stderr: ${stderr}`);
		data = {
			output: stdout,
			code: req.body.code
		};
		res.render('result.ejs',data);
	});
});

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log("Message: ",err.message);
  console.log("ERROR: ",res.locals.error);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
