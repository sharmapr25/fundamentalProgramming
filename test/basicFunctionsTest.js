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
			assert.ok(!isEven('s'));
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

		it('should return NaN when given number is undefined',function(){
			assert.ok(isNaN(squareOf(undefined)));
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
	});
});