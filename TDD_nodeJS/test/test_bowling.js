var fs = require('fs');
var bowling = require('../bowling.js');
var should = require('should');

describe('bowling test suite', function() {
	
	var bowlingGame = null;
	
	beforeEach(function(){
		bowlingGame = new bowling.game();
	});

	it('score should be zero at start', function() {

		var score = bowlingGame.score();
		score.should.equal(0);
	});

	it('score should be 20 after 1 pin at each roll', function() {

		for (var i = 0; i < 20; i++) {
			bowlingGame.roll(1);
		}
		var score = bowlingGame.score();
		score.should.equal(20);
	});
	
	it('score should be 0 after 0 pin at each roll', function() {

		for (var i = 0; i < 20; i++) {
			bowlingGame.roll(0);
		}
		var score = bowlingGame.score();
		score.should.equal(0);
	});
	
	it('test a game with a spare', function() {

		bowlingGame.roll(5);
		bowlingGame.roll(5); // spare
		bowlingGame.roll(3);
		for (var i = 0; i < 17; i++) {
			bowlingGame.roll(0);
		}
		var score = bowlingGame.score();
		score.should.equal(16); // (10 + 3)+3
	});

});