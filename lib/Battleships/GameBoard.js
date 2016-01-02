function GameBoard(config) {
  this.board = this.create(config)
  this.hit = '*'
  this.miss = 'o'
  this.mine = 'm'
  this.ship = 'B'
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
  this.update(coords, this.hit)
}

GameBoard.prototype.miss = function(coords) {
  this.update(coords, this.miss)
}

GameBoard.prototype.mine = function(coords) {
  this.update(coords, this.mine)
}

GameBoard.prototype.ship = function(config) {
  if(config.length === undefined) {
    config.length = 1
  }
  for(var i = 0; i < config.length; i++) {
    if(config.orientation == 'vertically') {
      this.update({ 'x': config.x, 'y': config.y + i }, this.ship)
    }else {
      this.update({ 'x': config.x + i, 'y': config.y }, this.ship)
    }
  }
}

GameBoard.prototype.update = function(coords, type) {
  this.board[coords.y - 1][coords.x - 1] = type
}

module.exports = GameBoard