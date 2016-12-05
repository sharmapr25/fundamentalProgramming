var basicFunctions = {};

basicFunctions.isEven = function(number){
	return number%2==0;
};

basicFunctions.isOdd = function(number){
	if(typeof(number) != 'number' || number == Infinity)
		return false;
	return !basicFunctions.isEven(number);
}

basicFunctions.squareOf = function(number){
	return number*number;
}

module.exports = basicFunctions;
