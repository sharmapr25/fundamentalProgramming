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
});