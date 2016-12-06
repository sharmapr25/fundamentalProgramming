var assert = require('assert');
var loops = require('../src/loops');

describe('Factorial',function(){
	var factorialOf = loops.factorialOf;
	
	it('should return 1 when the given number is 1',function(){
		assert.equal(1, factorialOf(1));
	});

	it('should return 2 when the given number is 2',function(){
		assert.equal(2, factorialOf(2));
	});

	it('should return 6 when the given number is 3',function(){
		assert.equal(6, factorialOf(3));
	});

	it('should return 720 when the given number is 6',function(){
		assert.equal(720, factorialOf(6));
	});

	it('should return 1 when the given number is 0',function(){
		assert.equal(1, factorialOf(0));
	});

	it('should throw an error when the given number is negative',function(){
		assert.throws(function(){factorialOf(-1)}, Error, "number must be non negative");
	});
});