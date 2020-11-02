var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var path = require('path')
var { exec } = require('child_process')
var fs = require('fs')

var app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//To Create Server
var server = app.listen(process.env.PORT||5000, ()=>{
	console.log(`Server Listening at http://localhost:${process.env.PORT||5000}`);
	});


// Static files
app.use(express.static('frontend/build'));

// Server React Client
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

//To Get Code and Language
app.post('/submit',async(req, res, next)=>{

	var code = String(req.body.code);
	var input = String(req.body.input);
	
	var code_filename = 'test.' + req.body.lang;
	var input_filename = 'input.txt';

	fs.writeFile(code_filename,code, (err)=>{
		if(err)
			throw err;
		//console.log("Sabed");
	})

	fs.writeFile(input_filename, input, (err)=>{
                if(err)
                        throw err;
        })

	var command = 'python3 compile.py ' + code_filename + ' input.txt';
	exec(command, (error, stdout, stderr)=>{
	if (error)
	{
		//console.error(`exec error: ${stderr}`)
		//console.error("STDOURT: ",stdout);
		data = {
                	error: stdout,
        	        code: req.body.code
 	           };
		res.status(500).json(data);
	}
	else{	//console.log(`stdout:\n${stdout}`);
		//console.error(`stderr: ${stderr}`);
		//console.error(`exec error: ${error}`)
		data = {
			output: stdout,
			code: req.body.code
		};
		console.log("C: ", data);
			res.status(200).json(data);
	}	
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
