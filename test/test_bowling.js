var fs = require('fs');
var bowling = require('../bowling.js');
var should = require('should');

describe('bowling test suite', function(){
  
  it('score should be zero at start', function(){

	  var bowlingGame = new bowling.game();
	  var score = bowlingGame.score();
	  score.should.equal(0);
  });
  
});