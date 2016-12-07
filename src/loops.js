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


var formatOfTable = function(factor, number){
	return factor+'*'+number+' = '+factor*number;
}

loops.multiplicationTableOf = function(factor, range){
	var table = [];
	if(range <= 0)
		throw new exception.invalidRangeException();
	for (var i = 1; i <= range; i++) {
		table.push(formatOfTable(factor,i));
	};
	return table.join("\n");
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

var startPoint = function(number, condition){
	if(condition(number))
		return number;
	return number+1;
}

var sumOfSeries = function(start, terms){
	return terms*(start+(terms-1));
}

var countTerms = function(start, last){
	return Math.ceil((last-start)/2);
}

var sumOfNumbers = function(rangeFrom, rangeTo,condition){
	if(rangeFrom <= rangeTo){
		var startNumber = startPoint(rangeFrom, condition);
		var terms = countTerms(startNumber, rangeTo);
		return sumOfSeries(startNumber, terms);
	};
	throw new exception.invalidRangeException();
};

loops.sumOfEvenNumbers = function(first, last){
	return sumOfNumbers(first, last, basic.isEven);
};

loops.sumOfOddNumbers = function(first, last){
	return sumOfNumbers(first, last, basic.isOdd);
};

var numberSeriesBackwards = function(rangeTo, condition){
	var numberSeries = [];
	if(rangeTo == Infinity)
		return rangeTo;
	for (var i = rangeTo;i>0; i--) {
		if(condition(i))
			numberSeries.push(i);
	};
	return numberSeries.join(" ");
};

loops.oddNumberSeriesBackwards = function(rangeTo){
	return numberSeriesBackwards(rangeTo, basic.isOdd);
};

loops.evenNumberSeriesBackwards = function(rangeTo){
	return numberSeriesBackwards(rangeTo, basic.isEven);
};

module.exports = loops;