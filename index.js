var express = require('express')
var app = express()


var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data


app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function(req, res) {
  res.send('I doubt Rihanna\'s nautical credentials.')
})

app.post('/start', function(req, res) {
	console.log('post /start')
	console.log(req.body)
	res.sendStatus(200)
})

app.get('/place', function(req, res) {
	console.log('get /place')
	console.log(req.body)
	res.sendStatus(200)
})

app.post('/place', function(req, res) {
	console.log('post /place')
	console.log(req.body)
	res.sendStatus(200)
})

app.get('/move', function(req, res) {
	console.log('get /move')
	console.log(req.body)
	res.sendStatus(200)
})

app.post('/hit', function(req, res) {
	console.log('post /hit')
	console.log(req.body)
	res.sendStatus(200)
})

app.post('/miss', function(req, res) {
	console.log('post /miss')
	console.log(req.body)
	res.sendStatus(200)
})

app.post('/scan', function(req, res) {
	console.log('post /scan')
	console.log(req.body)
	res.sendStatus(200)
})

app.post('/hit_mine', function(req, res) {
	console.log('post /hit_mine')
	console.log(req.body)
	res.sendStatus(200)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})


