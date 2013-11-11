// specific logger
var winston = require('winston');
var logger = new (winston.Logger)({
	transports: [
	             new (winston.transports.Console)()
	]
});

var rolls = null;
var currentRoll = null;


var game = function() {
	logger.info('bowling game created');
	currentRoll= 0;
	rolls = new Array();
	for(var i=0; i<21;i++) {
		rolls[i]=0;
	}
};


game.prototype.score = function() {
	logger.info('returning score');
	var score = 0;
	var rollIndex=0;
	for(var frame=0; frame<10;frame++) {
		
		if(rolls[rollIndex] == 10) { // test the strike
			score+= 10 + rolls[rollIndex+1] + rolls[rollIndex+2];
			rollIndex++;
		
		} else if( isSpare(rollIndex) ) { //test the spare
			score+=10 + rolls[rollIndex+2];
			rollIndex+=2;
			
		} else {
			score+=rolls[rollIndex]+rolls[rollIndex+1];
			rollIndex+=2;
		}
	}
	return score;
};

function isSpare(rollIndex) {
	return (rolls[rollIndex]+rolls[rollIndex+1]== 10 );
}

game.prototype.roll = function(pines) {
	logger.info('rolling '+pines+' pines');
	// each roll is recorded
	rolls[currentRoll++] = pines;
};

exports.game = game;