describe('CoordinateTranslator', function() {
	var translator = require('../../lib/Battleships/CoordinateTranslator')	

	it('should translator columns as character in its position in the alphabet', function() {
		expect(translator.translate("A1").columns).toEqual(1)
		expect(translator.translate("Z1").columns).toEqual(26)
	})

	it('should translator rows as the remaining numerical value', function() {
		expect(translator.translate("A1").rows).toEqual(1)
		expect(translator.translate("A26").rows).toEqual(26)
	})
})