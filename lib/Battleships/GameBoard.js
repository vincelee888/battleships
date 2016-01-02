function GameBoard(config) {
  this.board = this.create(config)
}

GameBoard.prototype.create = function(config) {
  var board = new Array(config.rows)

  for(var i = 0; i < config.rows; i++) {
    board[i] = new Array(config.columns)
    for(var j = 0; j < config.columns; j++) {
    board[i][j] = '-'
    }
  }

  return board
}

GameBoard.prototype.hit = function(coords) {
  this.update(coords, '*')
}

GameBoard.prototype.miss = function(coords) {
  this.update(coords, 'o')
}

GameBoard.prototype.mine = function(coords) {
  this.update(coords, 'm')
}

GameBoard.prototype.ship = function(config) {
  if(config.length === undefined) {
    config.length = 1
  }
  for(var i = 0; i < config.length; i++) {
    if(config.orientation == 'vertically') {
      this.update({ 'x': config.x, 'y': config.y + i }, 'B')
    }else {
      this.update({ 'x': config.x + i, 'y': config.y }, 'B')
    }
  }
}

GameBoard.prototype.update = function(coords, type) {
  this.board[coords.y - 1][coords.x - 1] = type
}

module.exports = GameBoard