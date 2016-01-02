describe("Battleships", function() {
  var Battleships = require('../../lib/Battleships/Battleships')
  var game

  beforeEach(function() {
    game = new Battleships()
  })

  it("should start not playing", function() {
    expect(game.playing).toEqual(false)
  })
})