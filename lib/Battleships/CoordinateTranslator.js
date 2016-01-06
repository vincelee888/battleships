function CoordinateTranslator() {}

CoordinateTranslator.prototype.translate = function(coord) {
	var re = /([a-z])(\d*)/ig
	var result = re.exec(coord)
	var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

	return {
		'columns': alpha.indexOf(result[1]) + 1,
		'rows': parseInt(result[2])
	}
}

module.exports = CoordinateTranslator