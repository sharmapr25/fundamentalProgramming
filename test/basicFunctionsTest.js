var assert = require('assert');
var isEven = require('../src/basicFunctions.js').isEven;

describe('isEven',function(){
	it('should return true for an even number',function(){
		assert.ok(isEven(2));
	});

	it('should return false for an odd number',function(){
		assert.ok(!isEven(1));
	});

	it('should return true for zero',function(){
		assert.ok(isEven(0));
	});

	it('should return true for a minus even number',function(){
		assert.ok(isEven(-2));
	});

	it('should return false for a minus odd number',function(){
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