var GameBoard = require('../../lib/Battleships/GameBoard')
var Translator = require('../../lib/Battleships/CoordinateTranslator')
var Visualiser = require('../../lib/Battleships/GameBoardVisualiser')
var _ = require('lodash')

function Battleships(playerName) {
  var self = this
  self.visualiser = new Visualiser()
  self.translator = new Translator()
  self.playerName = playerName

  self.start = function(config) {
    var enemyName = _.find(config.players, function(player) {
      return player !== self.playerName
    })

    self.maxTurns = config.maxTurns
    self.enemyFleet = self.createEmptyFleet(enemyName, config)
    self.playerFleet = self.createEmptyFleet(self.playerName, config)
  }

  self.move = function() {
    return {
      type: 'ATTACK',
      gridReference: self.enemyFleet.board.unknownCells()[0]
    }
  }

  self.registerHit = function(notification) {
    var fleetHit = _.find([self.enemyFleet, self.playerFleet], function(fleet) {
      return fleet.name !== notification.attacker
    })
    fleetHit.board.placeHit(self.translator.decode(notification.gridReference))
  }

  self.createEmptyFleet = function(name, config) {
    var board = new GameBoard(self.translator.decode(config.gridSize))

    return {
      'name': name,
      'board': board,
      'ships': config.ships,
      'mineCount': config.mineCount
    }
  }
}

module.exports = Battleships