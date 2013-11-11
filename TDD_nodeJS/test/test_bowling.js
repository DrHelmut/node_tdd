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
	
	it('test a game with a strike', function() {

		bowlingGame.roll(10); // strike
		bowlingGame.roll(3); 
		bowlingGame.roll(4);
		for (var i = 0; i < 17; i++) {
			bowlingGame.roll(0);
		}
		var score = bowlingGame.score();
		score.should.equal(24); // (10+3+4)+3+4
	});
	
	it('test a prefect game', function() {

		for (var i = 0; i < 12; i++) {
			bowlingGame.roll(10);
		}
		var score = bowlingGame.score();
		score.should.equal(300);
	});

});