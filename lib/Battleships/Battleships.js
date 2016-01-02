function Battleships() {}

Battleships.prototype.start = function(setup) {
  this.maxTurns = setup.maxTurns
  this.enemyFleet = this.createGameBoard()
}

Battleships.prototype.createGameBoard = function() {
  var board = new Array(10)

  for(var i = 0; i < board.length; i++) {
    board[i] = new Array(10)
  }

  return board
}

module.exports = Battleships