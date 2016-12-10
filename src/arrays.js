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


arrays.fiboReverse = function(number){
	var list = [[0],[1,0]];
	if(number == 1 || number ==2)
		return list[number-1];
	var list = Array.apply(null, Array(number-2));
	return list.reduce(function(initial){
		initial.unshift(initial[0]+initial[1]);
		return initial;
	},[1,0]);
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
};

arrays.averageOf = function(list){
	return arrays.sumOfNumbers(list)/list.length;
};

arrays.mappingLengths = function(list){
	return list.map(function(element){
		return element.length;
	});
};

arrays.countOddNumbers = function(list){
	return list.filter(basic.isOdd).length;
};

arrays.countEvenNumbers = function(list){
	return list.filter(basic.isEven).length;
};

module.exports = arrays;