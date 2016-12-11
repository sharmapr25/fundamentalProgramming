var util = require('util');
var exception = {};

exception.negativeNumberException = function(){
	this.message = 'number must be non negative';
};

exception.outOfRangeException = function(){
	this.message = 'out of range';
};

exception.invalidNumber = function(){
	this.message = 'invalid number';
};

util.inherits(exception.negativeNumberException, Error);
util.inherits(exception.outOfRangeException, Error);
util.inherits(exception.invalidNumber, Error);

module.exports = exception;