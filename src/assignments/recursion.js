var exception = require('../lib/exception');
var recursion ={};

var areNumbers = function(first,second){
	return (Number.isInteger(first) && Number.isInteger(second));
		
};

var commonNumber = function(first, second){
	var remainder = second%first;
	if(remainder == 0)
		return first;
	return commonNumber(remainder, first);
};


recursion.gcdOf = function(first, second){
	if(!areNumbers(first, second)){
		return NaN;
	}
	return commonNumber(first, second);
};

var addSumOfLastTwoElements = function(list){
	var len = list.length;
	list.push(list[len-1]+list[len-2]);
	return list;
};

var areTerms = function(terms){
	return (terms>0 && Number.isInteger(terms));
};

var fiboOf = function(terms){
	if(terms == 1)
		return [0];
	if(terms == 2)
		return [0,1];
	return addSumOfLastTwoElements(recursion.fibo(terms-1));
};

recursion.fibo = function(terms){
	if(!areTerms(terms))
		throw new exception.OutOfRangeException();
	return fiboOf(terms);
};

module.exports = recursion;