describe('GameBoard', function() {
  var GameBoard = require('../../lib/Battleships/GameBoard')

  describe('creation', function() {
    it('should create 1x1 board', function() {
      var initialSize = {
        'columns': 1,
        'rows': 1
      }
      var stu = new GameBoard(initialSize)
      expect(stu.output()).toEqual('-')
    })

    it('should create board with many columns', function() {
      var initialSize = {
        'columns': 3,
        'rows': 1
      }
      var stu = new GameBoard(initialSize)
      expect(stu.output()).toEqual('---')
    })

    it('should create board with many rows', function() {
      var initialSize = {
        'columns': 1,
        'rows': 3
      }
      var stu = new GameBoard(initialSize)
      expect(stu.output()).toEqual('-\n-\n-')
    })
  })

  describe('updating', function() {
    var stu
    beforeEach(function() {
      var initialSize = {
        'columns': 3,
        'rows': 3
      }
      stu = new GameBoard(initialSize)
    })

    it('should place hit', function() {
      stu.hit({ 'x': 2, 'y': 2 })
      expect(stu.output()).toEqual('---\n-*-\n---')
    })

    it('should place miss', function() {
      stu.miss({ 'x': 2, 'y': 2 })
      expect(stu.output()).toEqual('---\n-o-\n---')
    })
  })
})