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
		var siOf = basicFunctions.siOf;

		it('should return 100 for the given sum 1000 with rate 10 over a given 1 year',function(){
			assert.equal(100, siOf(1000, 10, 1));
		});

		it('should return 400 for the given sum 5000 with rate 4 over given 2 years',function(){
			assert.equal(400, siOf(5000,4,2));
		});

		it('should return NaN when the given sum is not a number',function(){
			assert.ok(isNaN(siOf(undefined,2,3)));
			assert.ok(isNaN(siOf('pi',10,3)));
		});

		it('should return 500.5 for the given sum 5000.5 with rate 3 over a given 1 year',function(){
			assert.equal(5.005, siOf(500.5, 1,1));
		});

		it('should return a message of negative principle for given negative number',function(){
			assert.equal('principle and time should not be negative',siOf(-2000,2,3));
			assert.equal('principle and time should not be negative',siOf(2000,2,-3));
		});

		it('should return a message of not zero principle when given principle is zero',function(){
			assert.equal('principle should not be zero',siOf(0,2,3));
		});
	});

	describe('compound interest',function(){
		var compoundInterestOf = basicFunctions.compoundInterestOf;

		it('should return 101 for the given sum 100 with rate 1 over a given 1 year',function(){
			assert.equal(101, compoundInterestOf(100,1,1));
		});

		it('should return 102.01 for the given sum 100 with rate 1 over a given 2 years',function(){
			assert.equal(102.01, compoundInterestOf(100,1,2));
		});

		it('should return 104.04 for the given sum 100 with rate 2 over a given 2 years',function(){
			assert.equal(104.04, compoundInterestOf(100,2,2));
		});

		it('should return NaN when the given sum is not a number',function(){
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

		it('should return 0 when the given fahrenheit temperature is 32',function(){
			assert.equal(0, fToCTemperatureConversion(32));
		});

		it('should return 2.22 when the given fahrenheit temperature is 34',function(){
			assert.equal(2.22, fToCTemperatureConversion(36));
		});

		it('should return -0.55 when the given fahrenheit temperature is 31',function(){
			assert.equal(-0.56, fToCTemperatureConversion(31));
		});

		it('should return -35 when the given fahrenheit temperature is -31',function(){
			assert.equal(-35, fToCTemperatureConversion(-31));
		});

		it('should return -17.78 when the given fahrenheit temperature is 0',function(){
			assert.equal(-17.78, fToCTemperatureConversion(0));
			assert.equal(-17.78, fToCTemperatureConversion(-0));
		});

		it('should return NaN when the given fahrenheit temperature is not a number',function(){
			assert.ok(isNaN(fToCTemperatureConversion(undefined)));
			assert.ok(isNaN(fToCTemperatureConversion('fahrenheit')));
		});

		it('should return 37 when the given fahrenheit temperature is 98.6',function(){
			assert.equal(37, fToCTemperatureConversion(98.6));
		});

		it('should return Infinity when the given fahrenheit temperature is Infinity',function(){
			assert.equal(Infinity, fToCTemperatureConversion(Infinity));
		});
	});
});