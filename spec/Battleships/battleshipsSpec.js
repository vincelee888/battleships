describe('Battleships start', function() {
	var Battleships = require('../../lib/Battleships/Battleships')
	var game

	beforeEach(function() {
		game = new Battleships()
		game.start({
      'maxTurns' : 150,
      'gridSize' : 'J10',
      'players'  : ['playerOne', 'playerTwo'],
      'ships' : ['CARRIER', 'DESTROYER', 'FRIGATE', 'FRIGATE', 'GUNBOAT'],
      'mineCount' : 3
    })
	})

  it('should record maxTurns', function() {
    expect(game.maxTurns).toEqual(150)
  })

  it('should create an empty game board for the enemy ships', function() {
    expect(game.enemyFleet.board.width).toEqual(10)
    expect(game.enemyFleet.board.height).toEqual(10)
  })
})