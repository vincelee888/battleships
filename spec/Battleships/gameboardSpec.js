describe('GameBoard', function() {
  var GameBoard = require('../../lib/Battleships/GameBoard')
  var Visualiser = require('../../lib/Battleships/GameBoardVisualiser')
  var visualiser = new Visualiser()

  describe('creation', function() {
    it('should create 1x1 board', function() {
      var initialSize = {
        'columns': 1,
        'rows': 1
      }
      var stu = new GameBoard(initialSize)
      expect(visualiser.output(stu)).toEqual('-')
    })

    it('should create board with many columns', function() {
      var initialSize = {
        'columns': 3,
        'rows': 1
      }
      var stu = new GameBoard(initialSize)
      expect(visualiser.output(stu)).toEqual('---')
    })

    it('should create board with many rows', function() {
      var initialSize = {
        'columns': 1,
        'rows': 3
      }
      var stu = new GameBoard(initialSize)
      expect(visualiser.output(stu)).toEqual('-\n-\n-')
    })
  })

  describe('turns', function() {
    var stu
    beforeEach(function() {
      var initialSize = {
        'columns': 3,
        'rows': 3
      }
      stu = new GameBoard(initialSize)
    })

    it('should place hit', function() {
      stu.hit({ 'x': 3, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n--*\n---')
    })

    it('should place miss', function() {
      stu.miss({ 'x': 3, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n--o\n---')
    })

    it('should place mine', function() {
      stu.mine({ 'x': 3, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n--m\n---')
    })
  })

  describe('ship placement', function() {
    var stu
    beforeEach(function() {
      var initialSize = {
        'columns': 3,
        'rows': 3
      }
      stu = new GameBoard(initialSize)
    })

    it('should place single cell ship', function() {
      stu.ship({ 'x': 2, 'y': 2 })
      expect(visualiser.output(stu)).toEqual('---\n-B-\n---')
    })

    it('should place longer ship horizontally', function() {
      stu.ship({ 'x': 1, 'y': 2, 'length': 3 })
      expect(visualiser.output(stu)).toEqual('---\nBBB\n---')
    })

    it('should place longer ship vertically', function() {
      stu.ship({ 'x': 2, 'y': 1, 'length': 3, 'orientation': 'vertically' })
      expect(visualiser.output(stu)).toEqual('-B-\n-B-\n-B-')
    })
  })
})