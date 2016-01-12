var GameBoard = require('../../lib/Battleships/GameBoard')
var Translator = require('../../lib/Battleships/CoordinateTranslator')
var Visualiser = require('../../lib/Battleships/GameBoardVisualiser')

function Battleships() {
  var self = this
  self.visualiser = new Visualiser()
  self.translator = new Translator()

  self.start = function(config) {
    self.maxTurns = config.maxTurns
    self.enemyFleet = self.createEmptyFleet(config)
    self.playerFleet = self.createEmptyFleet(config)
  }

  self.move = function() {
    return {
      type: 'ATTACK',
      gridReference: self.enemyFleet.board.unknownCells()[0]
    }
  }

  self.registerEnemyHit = function(gridReference) {
    self.enemyFleet.board.placeHit(self.translator.decode(gridReference))
  }

  self.createEmptyFleet = function(config) {
    var board = new GameBoard(self.translator.decode(config.gridSize))

    return {
      'board': board,
      'ships': config.ships,
      'mineCount': config.mineCount
    }
  }
}

module.exports = Battleships