var util = require('util');
var exception = {};

exception.negativeNumberException = function(){
	this.message = 'number must be non negative';
};

util.inherits(exception.negativeNumberException, Error);
module.exports = exception;