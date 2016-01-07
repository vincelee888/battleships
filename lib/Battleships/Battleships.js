var GameBoard = require('../../lib/Battleships/GameBoard')
var translator = require('../../lib/Battleships/CoordinateTranslator')

function Battleships() {}

Battleships.prototype.start = function(config) {
  this.maxTurns = config.maxTurns
  this.enemyFleet = this.createEmptyFleet(config)
}

Battleships.prototype.createEmptyFleet = function(config) {
  var board = new GameBoard(translator.translate(config.gridSize))

  return {
    'board': board
  }
}

module.exports = Battleships