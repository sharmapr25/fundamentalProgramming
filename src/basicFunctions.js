var basicFunctions = {};

basicFunctions.isEven = function(number){
	return number%2==0;
};

basicFunctions.isOdd = function(number){
	if(typeof(number) != 'number' || number == Infinity)
		return false;
	return !basicFunctions.isEven(number);
};

basicFunctions.squareOf = function(number){
	return number*number;
};

basicFunctions.cubeOf = function(number){
	return number*basicFunctions.squareOf(number);
};

var biggerNumber = function(firstNumber,secondNumber){
	if(firstNumber>secondNumber)
		return firstNumber;
	return secondNumber;
};

var smallerNumber = function(firstNumber, secondNumber){
	if(firstNumber<secondNumber)
		return firstNumber;
	return secondNumber;
}

basicFunctions.gcdOf = function(firstNumber, secondNumber){
	if(typeof(firstNumber) == 'number' && typeof(secondNumber) == 'number'){
		var bigNumber = Math.abs(biggerNumber(firstNumber, secondNumber));
		var smallNumber = Math.abs(smallerNumber(firstNumber, secondNumber));
		var remainderOfdividing = bigNumber%smallNumber;
		if(remainderOfdividing == 0)
			return smallNumber;
		return basicFunctions.gcdOf(remainderOfdividing, smallNumber);
	}
	return NaN;
};

var quotientOf = function(dividend, divisor){
	return dividend/divisor;
}

basicFunctions.lcmOf = function(firstNumber, secondNumber){
	gcmOfTwoNumbers = basicFunctions.gcdOf(firstNumber,secondNumber);
	var firstQuotient = quotientOf(firstNumber, gcmOfTwoNumbers);
	var secondQuotient = quotientOf(secondNumber, gcmOfTwoNumbers);	
	return gcmOfTwoNumbers*firstQuotient*secondQuotient;
}

module.exports = basicFunctions;
