describe('CoordinateTranslator', function() {
	var Translator = require('../../lib/Battleships/CoordinateTranslator')	
  var translator = new Translator()

	it('should translator columns as character in its position in the alphabet', function() {
		expect(translator.decode("A1").x).toEqual(1)
		expect(translator.decode("Z1").x).toEqual(26)
	})

	it('should translator rows as the remaining numerical value', function() {
		expect(translator.decode("A1").y).toEqual(1)
		expect(translator.decode("A26").y).toEqual(26)
	})

	it('should encode coordinates back into grid references', function() {
		expect(translator.encode(5,5)).toEqual('E5')
	})
})