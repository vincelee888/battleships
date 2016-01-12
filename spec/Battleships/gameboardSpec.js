describe('GameBoard', function() {
  var GameBoard = require('../../lib/Battleships/GameBoard')
  var Visualiser = require('../../lib/Battleships/GameBoardVisualiser')
  var visualiser = new Visualiser()

  describe('creation', function() {
    it('should create 1x1 board', function() {
      var initialSize = {
        'x': 1,
        'y': 1
      }
      var stu = new GameBoard(initialSize)
      expect(visualiser.output(stu)).toEqual('-')
    })

    it('should create board with many columns', function() {
      var initialSize = {
        'x': 3,
        'y': 1
      }
      var stu = new GameBoard(initialSize)
      expect(visualiser.output(stu)).toEqual('---')
    })

    it('should set width', function() {
      var initialSize = {
        'x': 3,
        'y': 1
      }
      var stu = new GameBoard(initialSize)
      expect(stu.width).toEqual(3)
    })

    it('should create board with many rows', function() {
      var initialSize = {
        'x': 1,
        'y': 3
      }
      var stu = new GameBoard(initialSize)
      expect(visualiser.output(stu)).toEqual('-\n-\n-')
    })
  })

  describe('turns', function() {
    var stu
    beforeEach(function() {
      var initialSize = {
        'x': 3,
        'y': 3
      }
      stu = new GameBoard(initialSize)
    })

    it('should place hit', function() {
      stu.placeHit({ 'x': 3, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n--*\n---')
    })

    it('should place miss', function() {
      stu.placeMiss({ 'x': 3, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n--o\n---')
    })

    it('should place mine', function() {
      stu.placeMine({ 'x': 3, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n--m\n---')
    })
  })

  describe('ship placement', function() {
    var stu
    beforeEach(function() {
      var initialSize = {
        'x': 3,
        'y': 3
      }
      stu = new GameBoard(initialSize)
    })

    it('should place single cell ship', function() {
      stu.placeShip({ 'x': 2, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n-B-\n---')
    })

    it('should place longer ship horizontally', function() {
      stu.placeShip({ 'x': 1, 'y': 2, 'length': 3 })
      expect(visualiser.output(stu)).toEqual('---\nBBB\n---')
    })

    it('should place longer ship vertically', function() {
      stu.placeShip({ 'x': 2, 'y': 1, 'length': 3, 'orientation': 'vertically' })
      expect(visualiser.output(stu)).toEqual('-B-\n-B-\n-B-')
    })
  })
})