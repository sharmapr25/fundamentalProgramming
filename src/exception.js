var util = require('util');
var exception = {};

exception.negativeNumberException = function(){
	this.message = 'number must be non negative';
};

exception.invalidRangeException = function(){
	this.message = 'invalid range';
};

util.inherits(exception.negativeNumberException, Error);
util.inherits(exception.invalidRangeException, Error);
module.exports = exception;