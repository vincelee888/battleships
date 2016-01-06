var GameBoard = require('../../lib/Battleships/GameBoard')

function Battleships() {}

Battleships.prototype.start = function(config) {
  this.maxTurns = config.maxTurns
  this.enemyFleet = this.createEmptyFleet(config)
}

Battleships.prototype.createEmptyFleet = function(config) {
  var board = new GameBoard({
    'columns': 10,
    'rows': 10
  })

  return {
    'board': board
  }
}

module.exports = Battleships