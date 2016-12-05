var assert = require('assert');
var basicFunctions = require('../src/basicFunctions.js');

describe('basic functions ',function(){
	describe('isEven',function(){
		var isEven = basicFunctions.isEven;
		it('should return true for an even number',function(){
			assert.ok(isEven(2));
		});

		it('should return false for an odd number',function(){
			assert.ok(!isEven(1));
		});

		it('should return true for zero',function(){
			assert.ok(isEven(0));
		});

		it('should return true for a negative even number',function(){
			assert.ok(isEven(-2));
		});

		it('should return false for a negative odd number',function(){
			assert.ok(!isEven(-1));
		});

		it('should return false if given number is an undefined',function(){
			assert.ok(!isEven(undefined));
		});

		it('should return false if given number is an Infinity',function(){
			assert.ok(!isEven(Infinity));
		});

		it('should return false if given element is not number type',function(){
			assert.ok(!isEven('1'));
		});
	});

	describe('isOdd', function() {
		var isOdd = basicFunctions.isOdd;
	    it('should return true for an odd number', function() {
	        assert.ok(isOdd(1));
	    });

	    it('should return false for an even number', function() {
	        assert.ok(!isOdd(2));
	    });

	    it('should return false for zero', function() {
	        assert.ok(!isOdd(0));
	    });

	    it('should return false for a negative even number', function() {
	        assert.ok(!isOdd(-2));
	    });

	    it('should return true for a negative odd number', function() {
	        assert.ok(isOdd(-1));
	    });

	    it('should return false if given number is an undefined', function() {
	        assert.ok(!isOdd(undefined));
	    });

	    it('should return false if given number is an Infinity', function() {
	        assert.ok(!isOdd(Infinity));
	    });

	    it('should return false if given element is not number type', function() {
	        assert.ok(!isOdd('s'));
	    });
	});

	describe('square',function(){
		var squareOf = basicFunctions.squareOf;
		it('square of 1 should be 1',function(){
			assert.equal(1, squareOf(1));
		});

		it('square of zero should be 0',function(){
			assert.equal(0, squareOf(0));
		});

		it('square of ten should be 100',function(){
			assert.equal(100, squareOf(10));
		});

		it('square of negative 1 should be 1',function(){
			assert.equal(1, squareOf(-1));
		});

		it('should return Infinity when given number is Infinity',function(){
			assert.ok(Infinity, squareOf(Infinity));
		});

		it('should return Infinity when given number is negative Infinity',function(){
			assert.ok(Infinity, squareOf(Infinity));
		});

		it('square of 0.6 should be 3.6',function(){
			assert.equal(0.36, squareOf(0.6));
		});

		it('squareOf 1.0 should be 1.0',function(){
			assert.equal(1.0, squareOf(1.0));
		});
		it('should reutrn NaN when the type of given value is not a number',function(){
			assert.ok(isNaN(squareOf(undefined)));
			assert.ok(isNaN(squareOf('s')));
		});
	});

	describe('cube',function(){
		var cubeOf = basicFunctions.cubeOf;

		it('should return 1 for the given value 1',function(){
			assert.equal(1, cubeOf(1));
		});

		it('should return 8 for the given value 2',function(){
			assert.equal(8, cubeOf(2));
		});

		it('should return -1 for the given value -1',function(){
			assert.equal(-1, cubeOf(-1));
		});

		it('should return NaN when the given value is not a number',function(){
			assert.ok(isNaN(cubeOf(undefined)));
			assert.ok(isNaN(cubeOf('s')));
		});

		it('should return Infinity when the given value is Infinity',function(){
			assert.equal(Infinity, cubeOf(Infinity));
		});

		it('should return 1.0 for the given value 1.0',function(){
			assert.equal(1.0, cubeOf(1.0));
		});

		it('should return 0.027 for the given value 0.3',function(){
			assert.equal(0.027, cubeOf(0.3));
		});

		it('should return -1.0 for the given value -1.0',function(){
			assert.equal(-1.0, cubeOf(-1.0));
		});

		it('should return -Infinity when the given value is -Infinity',function(){
			assert.equal(-Infinity, cubeOf(-Infinity));
		});
	});

	describe('GCD',function(){
		var gcdOf = basicFunctions.gcdOf;
		it('should return 1 when the given values are 1 and 2',function(){
			assert.equal(1, gcdOf(1,2));
		});

		it('should return 2 when the given values are 2 and 4',function(){
			assert.equal(2, gcdOf(4,2));
		});

		it('should return 2 when the given values are 4 and 14',function(){
			assert.equal(2, gcdOf(4,14));
		});

		it('should return 1 when the given values are 2 and 3',function(){
			assert.equal(1, gcdOf(2,3));
		});

		it('should return 13 when the given values are 13 and 26',function(){
			assert.equal(13, gcdOf(13,26));
		});

		it('should return 2 when the given values are 18 and 16',function(){
			assert.equal(2,gcdOf(18,16));
		});

		it('should return 2 when the given values are -8 and -10',function(){
			assert.equal(2, gcdOf(-8,-10));
		});

		it('should return NaN when the given values are not a number',function(){
			assert.ok(isNaN(gcdOf(2, undefined)));
			assert.ok(isNaN(gcdOf('s',2)));
			assert.ok(isNaN(gcdOf(undefined, undefined)));
		});
	});

	describe('LCM',function(){
		var lcmOf = basicFunctions.lcmOf;

		it('should return 2 when the given values are 1 and 2',function(){
			assert.equal(2, lcmOf(1,2));
		});

		it('should return 4 when the given values are 2 and 4',function(){
			assert.equal(4, lcmOf(2,4));
		});

		it('should return 2 when the given values are 4 and 14',function(){
			assert.equal(28, lcmOf(4,14));
		});

		it('should return 1 when the given values are 2 and 3',function(){
			assert.equal(6, lcmOf(2,3));
		});

		it('should return 13 when the given values are 13 and 26',function(){
			assert.equal(26, lcmOf(13,26));
		});

		it('should return 2 when the given values are 18 and 16',function(){
			assert.equal(144,lcmOf(18,16));
		});

		it('should return 2 when the given values are -8 and -10',function(){
			assert.equal(40, lcmOf(-8,-10));
		});

		it('should return NaN when the given values are not a number',function(){
			assert.ok(isNaN(lcmOf(2, undefined)));
			assert.ok(isNaN(lcmOf('s',2)));
			assert.ok(isNaN(lcmOf(undefined, undefined)));
		});
	});

	describe('Simple interest',function(){
		var siOf = basicFunctions.simpleInterestOf;

		it('should return 100 when a principle is 1000 with rate 10 over a year',function(){
			assert.equal(100, siOf(1000, 10, 1));
		});

		it('should return 400 when a principle is 5000 with rate 4 over 2 years',function(){
			assert.equal(400, siOf(5000,4,2));
		});

		it('should return NaN when the given principle is not a number',function(){
			assert.ok(isNaN(siOf(undefined,2,3)));
			assert.ok(isNaN(siOf('pi',10,3)));
		});

		it('should return 500.5 when a principle is 5000.5 with rate 3 over a year',function(){
			assert.equal(5.005, siOf(500.5, 1,1));
		});

		it('should return a message of negative principle for given negative number',function(){
			assert.equal('principle and time should not be negative',siOf(-2000,2,3));
			assert.equal('principle and time should not be negative',siOf(2000,2,-3));
		});

		it('should return 0 when the given principle is zero',function(){
			assert.equal(0,siOf(0,2,3));
		});
	});

	describe('compound interest',function(){
		var compoundInterestOf = basicFunctions.compoundInterestOf;

		it('should return 101 when a principle is 100 with rate 1 over a year',function(){
			assert.equal(101, compoundInterestOf(100,1,1));
		});

		it('should return 102.01 when a principle is 100 with rate 1 over 2 years',function(){
			assert.equal(102.01, compoundInterestOf(100,1,2));
		});

		it('should return 104.04 when a principle is 100 with rate 2 over 2 years',function(){
			assert.equal(104.04, compoundInterestOf(100,2,2));
		});

		it('should return NaN when the given principle is not a number',function(){
			assert.ok(isNaN(compoundInterestOf(undefined,2,1)));
			assert.ok(isNaN(compoundInterestOf('s',2,1)));
		});

		it('should return NaN when the given value is not a number',function(){
			assert.ok(isNaN(compoundInterestOf(1000,undefined,2)));
			assert.ok(isNaN(compoundInterestOf(1000,'r',2)));
			assert.ok(isNaN(compoundInterestOf(1000,2,undefined)));
			assert.ok(isNaN(compoundInterestOf(1000,2,'t')));
		});
	});

	describe('fahrenheit to centigrade temperature conversion',function(){
		var fToCTemperatureConversion = basicFunctions.fToCTemperatureConversion;

		it('should return 0 when temperature in fahrenheit is 32',function(){
			assert.equal(0, fToCTemperatureConversion(32));
		});

		it('should return 2.22 when temperature in fahrenheit is 34',function(){
			assert.equal(2.22, fToCTemperatureConversion(36));
		});

		it('should return -0.55 when temperature in fahrenheit is 31',function(){
			assert.equal(-0.56, fToCTemperatureConversion(31));
		});

		it('should return -35 when temperature in fahrenheit is -31',function(){
			assert.equal(-35, fToCTemperatureConversion(-31));
		});

		it('should return -17.78 when temperature in fahrenheit is 0',function(){
			assert.equal(-17.78, fToCTemperatureConversion(0));
			assert.equal(-17.78, fToCTemperatureConversion(-0));
		});

		it('should return NaN when temperature in fahrenheit is not a number',function(){
			assert.ok(isNaN(fToCTemperatureConversion(undefined)));
			assert.ok(isNaN(fToCTemperatureConversion('fahrenheit')));
		});

		it('should return 37 when temperature in fahrenheit is 98.6',function(){
			assert.equal(37, fToCTemperatureConversion(98.6));
		});

		it('should return Infinity when temperature in fahrenheit is Infinity',function(){
			assert.equal(Infinity, fToCTemperatureConversion(Infinity));
		});
	});

	describe('centigrade to fahrenheit temperature conversion',function(){
		var cToFTemperatureConversion = basicFunctions.cToFTemperatureConversion;

		it('should return 32 when temperature in centigrade is 0',function(){
			assert.equal(32, cToFTemperatureConversion(0));
		});

		it('should return 36 when temperature in centigrade is 2.22',function(){
			assert.equal(36, cToFTemperatureConversion(2.22));
		});

		it('should return 30.99 when temperature in centigrade is -0.56',function(){
			assert.equal(30.99, cToFTemperatureConversion(-0.56));
		});

		it('should return -31 when temperature in centigrade is -35',function(){
			assert.equal(-31, cToFTemperatureConversion(-35));
		});

		it('should return -4 when temperature in centigrade is -20',function(){
			assert.equal(-4, cToFTemperatureConversion(-20));
		});

		it('should return NaN when temperature in centigrade is not a number',function(){
			assert.ok(isNaN(cToFTemperatureConversion(undefined)));
			assert.ok(isNaN(cToFTemperatureConversion('fahrenheit')));
		});

		it('should return 98.6 when temperature in centigrade is 37',function(){
			assert.equal(98.6, cToFTemperatureConversion(37));
		});

		it('should return Infinity when temperature in centigrade is Infinity',function(){
			assert.equal(Infinity, cToFTemperatureConversion(Infinity));
		});
	});

	describe('sum of 1 to n',function(){
		var sumOfNNumber = basicFunctions.sumOfNNumber;

		it('should return 3 when the given range is 2',function(){
			assert.equal(3, sumOfNNumber(2));
		});

		it('should return 55 when the given range is 10',function(){
			assert.equal(55, sumOfNNumber(10));
		});

		it('should return 5050 when the given range is 100',function(){
			assert.equal(5050, sumOfNNumber(100));
		});

		it('should return 0 for the given range below 0',function(){
			assert.equal(0, sumOfNNumber(-1));
			assert.equal(0, sumOfNNumber(-2));
		});

		it('should return 0 when the given range is undefined',function(){
			assert.equal(0,sumOfNNumber(undefined));
			assert.equal(0, sumOfNNumber('hello'));
		});

		it('should return Infinity when the given range is Infinity',function(){
			assert.equal(Infinity, sumOfNNumber(Infinity));
		});
	});

	describe('greatest of three numbers',function(){
		var greatestOfThreeNumbers = basicFunctions.greatestOfThreeNumbers;

		it('should return 3 when the given numbers are 1,2 and 3',function(){
			assert.equal(3, greatestOfThreeNumbers(1,2,3));
		});

		it('should return 5 when the given numbers are 3,2 and 5',function(){
			assert.equal(5, greatestOfThreeNumbers(3,2,5));
		});

		it('should return 2 when the given numbers are 0,1 and 2',function(){
			assert.equal(2, greatestOfThreeNumbers(0,1,2));
		});

		it('should return 0 when the given numbers are -2 -1 and 0',function(){
			assert.equal(0, greatestOfThreeNumbers(-2,-1,0));
		});

		it('should return -2 when the given numbers are -5,-4 and -2',function(){
			assert.equal(-2, greatestOfThreeNumbers(-5,-4,-2));
		});

		it('should return undefined when one of the given numbers is undefined',function(){
			assert.equal(undefined, greatestOfThreeNumbers(0,1,undefined));
		});

		it('should return 1 when the given all numbers are 1',function(){
			assert.equal(1, greatestOfThreeNumbers(1,1,1));
		});

		it('should return Infinity when one of the given numbers is Infinity',function(){
			assert.equal(Infinity, greatestOfThreeNumbers(Infinity, 0,-1));
		});
	});

	describe('Average of three numbers',function(){
		var averageOfThreeNumbers = basicFunctions.averageOfThreeNumbers;

		it('should return 2 when the given numbers are 1,2 and 3',function(){
			assert.equal(2, averageOfThreeNumbers(1,2,3));
		});

		it('should return 4.67 when the given numbers are 2 7 and 5',function(){
			assert.equal(4.67, averageOfThreeNumbers(2,7,5));
		});

		it('shoule return zero when the given numbers are 1,-4 and 3',function(){
			assert.equal(0, averageOfThreeNumbers(1,-4,3));
		});

		it('should return 3 when the given numbers are 3,-3 and 3',function(){
			assert.equal(1, averageOfThreeNumbers(3,-3,3));
		});

		it('should NaN when one of the given numbers is undefined',function(){
			assert.ok(isNaN(averageOfThreeNumbers(undefined,1,2)));
			assert.ok(isNaN(averageOfThreeNumbers('one',1,2)));
		});

		it('should return Infinity when one of the given numbers is Infinity',function(){
			assert.equal(Infinity, averageOfThreeNumbers(Infinity, 0,-1));
		});

		it('should return -2 when the given numbers are -1,-2 and -3',function(){
			assert.equal(-2, averageOfThreeNumbers(-1,-2,-3));
		});
	});

	describe('Average as a percentage',function(){
		var avgAsPercentage = basicFunctions.avgAsPercentage;

		it('should return 0.4 for the given three numbers and a specified number',function(){
			assert.equal(0.4,avgAsPercentage(3,4,5,10));
		});

		it('should return 0.8 for the given three numbers and percentage specified number is 20',function(){
			assert.equal(0.8, avgAsPercentage(3,4,5,20));
		});

		it('should return 0.1 for the given three numbers and percentage specified number is 10',function(){
			assert.equal(0.1, avgAsPercentage(3,-3,3,10));
		});

		it('should return 0 when the given percentage specified number is 0',function(){
			assert.equal(0, avgAsPercentage(1,1,3,0));
		});

		it('should return NaN when the given percentage specified value is not a number',function(){
			assert.ok(isNaN(avgAsPercentage(1,2,3,undefined)));
			assert.ok(isNaN(avgAsPercentage(1,2,3,'percentage')));
		});

		it('should return Infinity when the given percentage specified number is Infinity',function(){
			assert.equal(Infinity, avgAsPercentage(1,2,3,Infinity));
		});

		it('should return -0.4 when the given percentage specified number is negative',function(){
			assert.equal(-0.4, avgAsPercentage(1,2,3,-20));
		});

		it('should return 0.3 when the given numbers are negative and percentage specified number is negative',function(){
			assert.equal(0.3, avgAsPercentage(-6,-2,-1,-10));
		});
	});
});