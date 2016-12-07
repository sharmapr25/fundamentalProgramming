var loops = {};
var exception = require('./exception.js');
var basic = require('./basicFunctions.js');

loops.factorialOf = function(number) {
	if(number==0)
		return 1;
	if(number<0)
		throw new exception.negativeNumberException();
	if(number == Infinity)
		return Infinity;
	return loops.factorialOf(number-1)*number;
};

var positiveFibonacciOf = function(number, current, next){
	var terms = [];
	var newTerm;

	for (var i = 0; i < number; i++) {
		terms.push(current);
		newTerm = next+current;
		current = next;
		next = newTerm;
	};
	return terms.join(" ");
}

var negativeFibonacciOf = function(number, current, next){
	var terms = [];
	var newTerm;

	for (var i = 0; i > number; i--) {
		terms.push(current);
		newTerm = next-current;
		next = current;
		current = newTerm;
	};
	return terms.join(" ");
}

loops.fibonacciOf = function(number){
	if(number>= 0)
		return positiveFibonacciOf(number,0,1);
	return negativeFibonacciOf(number,0,1);
};

loops.oddNumberSeries = function(first,limit){
	var oddSeries = [];
	for (var i = first; i < limit; i++) {
		if(basic.isOdd(i))
			oddSeries.push(i);	
	};
	return oddSeries.join(" ");
};

loops.evenNumberSeries = function(first,limit){
	var oddSeries = [];
	for (var i = first; i < limit; i++) {
		if(basic.isEven(i))
			oddSeries.push(i);	
	};
	return oddSeries.join(" ");
};



loops.multiplicationTableOf = function(factor, range){
	var table = [];
	if(range <= 0)
		throw new exception.invalidRangeException();
	for (var i = 1; i <= range; i++) {
		table.push(i*factor);
	};
	return table.join(" ");
};

loops.sumOfNNumbers = function(initial,range){
	var count = initial;
	var sum = 0;
	while(range>= count){
		sum += count;
		count++;
	};
	return sum;
};

loops.productOf = function(initial,range){
	if(range == Infinity)
		return Infinity*initial;
	var count = initial;
	var total = 1;
	while(range>= count){
		total = total*count;
		count++;
	};
	return total;
};

loops.sumOfAnyNNumbers = function(initial, range){
	return loops.sumOfNNumbers(initial, range);
};

loops.productOfAnyNNumbers = function(initial, range){
	return loops.productOf(initial, range);
};

loops.oddNumbersBetweenAnyRange = function(firstNumber, range){
	return loops.oddNumberSeries(firstNumber, range);
};

loops.evenNumbersBetweenAnyRange = function(firstNumber, range){
	return loops.evenNumberSeries(firstNumber, range);
};

loops.nthNumberBetweenAnyRange = function(firstNumber, range, number){
	var terms = [];
	var count = firstNumber;
	while(count <= range){
		terms.push(count);
		count += number;
	}

	return terms.join(" ");
};

var makeEvenNumber = function(number){
	if(basic.isEven(number))
		return number;
	return number+1;
}

loops.sumOfEvenNumbers = function(first, last){
	if(last< first)
		throw new invalidRangeException();
	var terms = Math.ceil((last-first)/2);
	var start = makeEvenNumber(first);
	return terms*(start+(terms-1));
};

module.exports = loops;