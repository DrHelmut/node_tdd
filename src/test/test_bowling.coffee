CoffeeScript = require('coffee-script')
should = require('should')
require('coffee-script/register')
bowling = require('../bowling.coffee')
CoffeeScript.register()

describe 'bowling', ->

    bowlingGame = null
    
    beforeEach ->      
        bowlingGame = new bowling.Bowling

    describe 'test suite', ->
        
        it 'score should be zero at start', ->
            bowlingGame.score().should.equal 0

        it 'score should be 20 after 1 pin at each roll', ->
            for i in [0..19]
                bowlingGame.roll(1)		
            bowlingGame.score().should.equal(20)
            
        it 'score should be 0 after 0 pin at each roll', ->
            for i in [0..19]
                bowlingGame.roll(0)
            bowlingGame.score().should.equal(0)
            
        it 'test a game with a spare', ->
            bowlingGame.roll(5)
            #spare
            bowlingGame.roll(5)
            bowlingGame.roll(3)            
            for i in [0..16]
                bowlingGame.roll(0)
            # (10 + 3)+3
            bowlingGame.score().should.equal(16)
    
        it 'test a game with a strike', ->
            #strike
            bowlingGame.roll(10)
            bowlingGame.roll(3)
            bowlingGame.roll(4)
            for i in [0..16]
                bowlingGame.roll(0)
            #(10+3+4)+3+4
            bowlingGame.score().should.equal(24)
            
        it 'test a prefect game', ->
            for i in [0..11]
                bowlingGame.roll(10)
            bowlingGame.score().should.equal(300)
            
        it 'test exception - a roll cannot exceed 10', -> 
            (-> 
                bowlingGame.roll(11)
            ).should.throw('a roll cannot exceed 10')