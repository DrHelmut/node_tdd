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
	for(var i=0; i<rolls.length;i++) {
		score+=rolls[i];
	}
	return score;
};

game.prototype.roll = function(pines) {
	logger.info('rolling '+pines+' pines');
	// each roll is recorded
	rolls[currentRoll++] = pines;
};

exports.game = game;