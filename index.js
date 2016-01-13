var express = require('express')
var app = express()

var Battleships = require('/lib/battleships')

var game = new Battleships('IDoubtRihannasNauticalCredentials')

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) {
  res.send('I doubt Rihanna\'s nautical credentials.')
})

app.post('/start', function(req, res) {
	console.log('---POST: START---')
	console.log(req)
	res.sendStatus(200)
})

app.get('/place', function(req, res) {
	console.log('---GET: PLACE---')
	console.log(req)
	res.sendStatus(200)
})

app.post('/place', function(req, res) {
	console.log('---POST: PLACE---')
	console.log(req)
	res.sendStatus(200)
})

app.get('/move', function(req, res) {
	console.log('---GET: MOVE---')
	console.log(req)

	var move = game.move()

	console.log(move)
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(move));
})

app.post('/hit', function(req, res) {
	console.log('---POST: HIT---')
	console.log(req)
	game.registerHit(req)
	res.sendStatus(200)
})

app.post('/miss', function(req, res) {
	console.log('---POST: MISS---')
	console.log(req)
	game.registerMiss(req)
	res.sendStatus(200)
})

app.post('/hit_mine', function(req, res) {
	console.log('---POST: HIT_MINE---')
	console.log(req)
	game.registerMine(req)
	res.sendStatus(200)
})

app.post('/scan', function(req, res) {
	console.log('---POST: SCAN---')
	console.log(req)
	res.sendStatus(200)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})


