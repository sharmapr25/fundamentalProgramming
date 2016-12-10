var arrays = {};
var basic = require('./basicFunctions.js');

arrays.oddNumbers = function(list){
	return list.filter(basic.isOdd);
};

arrays.evenNumbers = function(list){
	return list.filter(basic.isEven);
};

var sumOf = function(first, second){
	return first+second;
};

arrays.sumOfNumbers = function(list){
	return list.reduce(sumOf);
};

var reverseOrder = function(initial, current, index, list){
	initial.unshift(current);
	return initial;
};

arrays.printReverseOrder = function(list){
	newList = list.reduce(reverseOrder,[]);
	return newList.join("\n");
};

arrays.eachSecondElement = function(list){
	return list.filter(function(number, index){
		return basic.isEven(index);
	});
};

var fibo = function(number){
	if(number == 0 || number == 1)
		return number;
	return fibo(number-1)+fibo(number-2);
};

arrays.fiboReverse = function(number){
	var list = Array.apply(null, Array(number));
	list.forEach(function(d, i, l){
		l.pop(l[i]);
		l.unshift(fibo(i))
	});
	return list;
};


arrays.greatestElement = function(list){
	return list.reduce(function(initial, number){
		return Math.max(initial, number);
	});
}

arrays.lowestElement = function(list){
	return list.reduce(function(initial, number){
		return Math.min(initial, number);
	});	
}

module.exports = arrays;