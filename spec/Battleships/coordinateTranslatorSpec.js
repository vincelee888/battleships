describe('CoordinateTranslator', function() {
	var CoordinateTranslator = require('../../lib/Battleships/CoordinateTranslator')	
	var translator

	beforeEach(function() {	
		translator = new CoordinateTranslator()
	})

	it('should translate columns as character in its position in the alphabet', function() {
		expect(translator.translate("A1").columns).toEqual(1)
		expect(translator.translate("Z1").columns).toEqual(26)
	})

	it('should translate rows as the remaining numerical value', function() {
		expect(translator.translate("A1").rows).toEqual(1)
		expect(translator.translate("A26").rows).toEqual(26)
	})
})