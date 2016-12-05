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
		var remainder = bigNumber%smallNumber;
		if(remainder == 0)
			return smallNumber;
		return basicFunctions.gcdOf(remainder, smallNumber);
	}
	return NaN;
};

var quotientOf = function(dividend, divisor){
	return dividend/divisor;
}

basicFunctions.lcmOf = function(firstNumber, secondNumber){
	gcdOfTwoNumbers = basicFunctions.gcdOf(firstNumber,secondNumber);
	return quotientOf(firstNumber*secondNumber, gcdOfTwoNumbers); 
}

basicFunctions.siOf = function(principle, rate, time){
	if(principle >0 && time >0)
		return (principle*rate*time)/100;
	if(principle == 0)
		return 'principle should not be zero';
	return 'principle and time should not be negative';
};

basicFunctions.compoundInterestOf = function(principle, rate, time){
	if(typeof(time) == 'number'){
		while(time >0){
			principle += basicFunctions.siOf(principle,rate, 1);
			time--;
		};
	return principle;
	}
};

basicFunctions.fToCTemperatureConversion = function(temperature){
	return parseFloat((((temperature-32)*5)/9).toFixed(2));
}

basicFunctions.cToFTemperatureConversion = function(temperature){
	return parseFloat((((temperature*9)/5)+32).toFixed(2));
}

basicFunctions.sumOfNNumber = function(range){
	if(range >0)
		return (range*(range+1))/2;
	return 0;
};

module.exports = basicFunctions;
