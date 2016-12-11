var arrays = {};
var basic = require('./basicFunctions.js');
var exception = require('../lib/exception.js');

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

var isGreater = function(number, limit){
	return limit<number;
}

var isLesser = function(number, limit){
	return limit> number;
}


arrays.numbersAboveThresold = function(list, thresold){
	return isNumberValidateUpon(list, thresold, isGreater);
};

isNumberValidateUpon = function(list, thresold, condition){
	return list.filter(function(number){
		return condition(number, thresold);
	}).length;
};

arrays.numbersBelowThresold = function(list, thresold){
	return isNumberValidateUpon(list, thresold, isLesser);
};

arrays.reversing = function(list){
	return list.reduce(reverseOrder,[]);
};

arrays.firtsIndexOfNumber = function(list, number){
	//Since it doesn't perfrom each element of an array. It comes out when it got the number.  
	for (var i = 0; i < list.length; i++) {
		if(list[i]==number)
			return i;
	};
	return -1;
};

var resultOf = function(result,list, condition){
	var newList = list.map(function(number){return number;})
	return function(number){
		if(condition(newList)!=number)
			result.value = false;
		newList.shift();
	};
};

var inOrderOf = function(list, condition){
	var  result = {value:true};
	list.forEach(resultOf(result, list, condition));
	return result.value;
}

arrays.isAscendingOrder = function(list){
	return inOrderOf(list, arrays.lowestElement);
};

arrays.isDescendingOrder = function(list){
	return inOrderOf(list, arrays.greatestElement);
};

var addElementIn = function(list, number){
	list.forEach(function(){
		list.pop();
		list.unshift(number%10);
		number = parseInt(number/10);
	});
};

arrays.extractDigits = function(number){
	if(!Number.isInteger(number))
		throw new exception.invalidNumber();

	var len = Math.abs(number).toString().length;
	var list = Array.apply(null, Array(len));	
	addElementIn(list, number);
	return list;
};

module.exports = arrays;