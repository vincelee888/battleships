GameBoardVisualiser = function() {}

GameBoardVisualiser.prototype.output = function(gameBoard) {
  var output = ''

  for(var i = 0; i < gameBoard.board.length; i++) {
    if(output.length > 0) {
      output += '\n'
    }
    for(var j = 0; j < gameBoard.board[i].length; j++) {
    output += gameBoard.board[i][j]
    }
  }

  return output
}

module.exports = GameBoardVisualiser