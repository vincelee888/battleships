describe('1x1 game', function() {
  var Battleships = require('../../lib/Battleships/Battleships')
  var game,
      move

  beforeEach(function() {
    game = new Battleships()
    game.start({
      'maxTurns' : 2,
      'gridSize' : 'A1',
      'players'  : ['playerOne', 'playerTwo'],
      'ships' : ['CARRIER', 'DESTROYER', 'FRIGATE', 'FRIGATE', 'GUNBOAT'],
      'mineCount' : 0
    })

    move = game.move()
  })
  it('should attack A1', function() {
    expect(move.type).toEqual('ATTACK')
    expect(move.gridReference).toEqual('A1')
  })
})

describe('1x2 game', function() {
  var Battleships = require('../../lib/Battleships/Battleships')
  var game,
      move1,
      move2

  beforeEach(function() {
    game = new Battleships()
    game.start({
      'maxTurns' : 2,
      'gridSize' : 'B1',
      'players'  : ['playerOne', 'playerTwo'],
      'ships' : ['CARRIER', 'DESTROYER', 'FRIGATE', 'FRIGATE', 'GUNBOAT'],
      'mineCount' : 0
    })

    move1 = game.move()
    game.registerEnemyHit(move1.gridReference)
    move2 = game.move()
  })
  it('should not attack same cell twice', function() {
    expect(move1.type).toEqual('ATTACK')
    expect(move2.type).toEqual('ATTACK')
    expect(move1.gridReference).not.toEqual(move2.gridReference)
  })
})

