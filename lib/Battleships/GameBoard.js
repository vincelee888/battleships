function GameBoard(config) {
  this.columns = config.columns
  this.rows = config.rows
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

GameBoard.prototype.ship = function(coords) {
  this.update(coords, 'B')
}

GameBoard.prototype.update = function(coords, type) {
  this.board[coords.x - 1][coords.y - 1] = type
};

GameBoard.prototype.output = function() {
  var output = ''

  for(var i = 0; i < this.rows; i++) {
    if(output.length > 0) {
      output += '\n'
    }
    for(var j = 0; j < this.columns; j++) {
    output += this.board[i][j]
    }
  }

  return output
}

module.exports = GameBoard