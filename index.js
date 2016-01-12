var express = require('express')
var app = express()

var Battleships = require('/lib/battleships')

var game = new Battleships('IDoubtRihannasNauticalCredentials')

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) {
  res.send('I doubt Rihanna\'s nautical credentials.')
})

app.post('/start', function(req, res) {
	res.sendStatus(200)
})

app.get('/place', function(req, res) {
	res.sendStatus(200)
})

app.post('/place', function(req, res) {
	res.sendStatus(200)
})

app.get('/move', function(req, res) {
	res.sendStatus(200)
})

app.post('/hit', function(req, res) {
	res.sendStatus(200)
})

app.post('/miss', function(req, res) {
	res.sendStatus(200)
})

app.post('/scan', function(req, res) {
	res.sendStatus(200)
})

app.post('/hit_mine', function(req, res) {
	res.sendStatus(200)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})


