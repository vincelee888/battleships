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
    var targetFleet = _.find([self.enemyFleet, self.playerFleet], function(fleet) {
      return fleet.name !== notification.attacker
    })
    targetFleet.board.placeHit(self.translator.decode(notification.gridReference))
    console.log("*** HIT *** on " + targetFleet.name)
    console.log(self.visualiser.output(targetFleet.board))
  }

  self.registerMiss = function(notification) {
    var targetFleet = _.find([self.enemyFleet, self.playerFleet], function(fleet) {
      return fleet.name !== notification.attacker
    })
    targetFleet.board.placeMiss(self.translator.decode(notification.gridReference))
    console.log("*** MISS *** on " + targetFleet.name)
    console.log(self.visualiser.output(targetFleet.board))
  }

  self.registerMine = function(notification) {
    var targetFleet = _.find([self.enemyFleet, self.playerFleet], function(fleet) {
      return fleet.name !== notification.attacker
    })
    targetFleet.board.placeMine(self.translator.decode(notification.gridReference))
    console.log("*** MINE HIT *** on " + targetFleet.name)
    console.log(self.visualiser.output(targetFleet.board))
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