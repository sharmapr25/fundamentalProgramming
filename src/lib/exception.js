var util = require('util');
var exception = {};

exception.NegativeNumberException = function(){
	this.message = 'number must be non negative';
};

exception.OutOfRangeException = function(){
	this.message = 'out of range';
};

exception.InvalidNumber = function(){
	this.message = 'invalid number';
};

util.inherits(exception.NegativeNumberException, Error);
util.inherits(exception.OutOfRangeException, Error);
util.inherits(exception.InvalidNumber, Error);

module.exports = exception;