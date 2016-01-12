// coordinates are 1-based

function Translator() {
  var self = this

  self.alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  self.decode = function(coord) {
    var re = /([a-z])(\d*)/ig
    var result = re.exec(coord)

  	return {
  		'x': self.alpha.indexOf(result[1]) + 1,
  		'y': parseInt(result[2])
  	}
  }

  self.encode = function(x, y) {
    return self.alpha.charAt(x - 1) + y
  }
}

module.exports = Translator