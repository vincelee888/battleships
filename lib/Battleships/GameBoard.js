var Visualiser = require('../../lib/Battleships/GameBoardVisualiser')
var Translator = require('../../lib/Battleships/CoordinateTranslator')

function GameBoard(config) {
  var self = this
  self.visualiser = new Visualiser()
  self.translator = new Translator()

  self.unknown = '-'
  self.hit = '*'
  self.miss = 'o'
  self.mine = 'm'
  self.ship = 'B'

  self.create = function(config) {
    var board = new Array(config.y)

    for(var i = 0; i < config.y; i++) {
      board[i] = new Array(config.x)
      for(var j = 0; j < config.x; j++) {
      board[i][j] = self.unknown
      }
    }

    return board
  }

  self.placeHit = function(coords) {
    self.update(coords, self.hit)
  }

  self.placeMiss = function(coords) {
    self.update(coords, self.miss)
  }

  self.placeMine = function(coords) {
    self.update(coords, self.mine)
  }

  self.placeShip = function(config) {
    if(config.length === undefined) {
      config.length = 1
    }
    for(var i = 0; i < config.length; i++) {
      if(config.orientation == 'vertically') {
        self.update({ 'x': config.x, 'y': config.y + i }, self.ship)
      }else {
        self.update({ 'x': config.x + i, 'y': config.y }, self.ship)
      }
    }
  }

  self.update = function(coords, type) {
    self.board[coords.y - 1][coords.x - 1] = type
  }

  self.unknownCells = function() {
    var unknowns = []

    for(var i = 0; i < self.width; i++) {
      for(var j = 0; j < self.height; j++) {
        if(self.board[j][i] === self.unknown) {
          unknowns.push(self.translator.encode(j + 1, i + 1))
        }
      }
    }

    return unknowns
  }

  self.board = self.create(config)
  self.width = self.board[0].length
  self.height = self.board.length
}

module.exports = GameBoard