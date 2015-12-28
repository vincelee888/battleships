var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) {
  res.send('I doubt Rihanna\'s nautical credentials.')
})

app.post('/start', function(req, res) {
	console.log('post /start')
	console.log(req)
	res.sendStatus(200)
})

app.get('/place', function(req, res) {
	console.log('get /place')
	console.log(req)
	res.sendStatus(200)
})

app.post('/place', function(req, res) {
	console.log('post /place')
	console.log(req)
	res.sendStatus(200)
})

app.get('/move', function(req, res) {
	console.log('get /move')
	console.log(req)
	res.sendStatus(200)
})

app.post('/hit', function(req, res) {
	console.log('post /hit')
	console.log(req)
	res.sendStatus(200)
})

app.post('/miss', function(req, res) {
	console.log('post /miss')
	console.log(req)
	res.sendStatus(200)
})

app.post('/scan', function(req, res) {
	console.log('post /scan')
	console.log(req)
	res.sendStatus(200)
})

app.post('/hit_mine', function(req, res) {
	console.log('post /hit_mine')
	console.log(req)
	res.sendStatus(200)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})


