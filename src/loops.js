var loops = {};
var exception = require('./exception.js');

loops.factorialOf = function(number) {
	if(number==0)
		return 1;
	else if(number<0)
		throw new exception.negativeNumberException();
	return loops.factorialOf(number-1)*number;
};

module.exports = loops;