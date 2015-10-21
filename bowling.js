// specific logger
var winston = require('winston');
var logger = new (winston.Logger)({
	 transports: [
	              new (winston.transports.Console)(),
	              new (winston.transports.File)({ filename: 'bowling.log', json: false, maxsize: 24657920 })
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

exports.game = game;