var util = require('util');
var exception = {};

exception.negativeNumberException = function(){
	this.message = 'number must be non negative';
};

exception.outOfRangeException = function(){
	this.message = 'out of range';
};

util.inherits(exception.negativeNumberException, Error);
util.inherits(exception.outOfRangeException, Error);
module.exports = exception;