// specific logger
var winston = require('winston');
var logger = new (winston.Logger)({
	 transports: [
	              new (winston.transports.Console)(),
	              new (winston.transports.File)({ filename: __dirname+'/bowling.log', json: false, maxsize: 24657920 })
	 ]
});

var game = function() {
	logger.info('bowling game created');
};
var score = 0;

game.prototype.score = function() {
	logger.info('returning score');
	return score;
};

game.prototype.roll = function(pines) {
	logger.info('rolling '+pines+' pines');
	score+=pines;
};

exports.game = game;