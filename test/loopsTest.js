var assert = require('assert');
var loops = require('../src/loops');

describe('loops', function() {
    describe('Factorial', function() {
        var factorialOf = loops.factorialOf;

        it('should return 1 when the given number is 1', function() {
            assert.equal(1, factorialOf(1));
        });

        it('should return 2 for given number 2', function() {
            assert.equal(2, factorialOf(2));
        });

        it('should return 6 when the given number is 3', function() {
            assert.equal(6, factorialOf(3));
        });

        it('should return 720 when the given number is 6', function() {
            assert.equal(720, factorialOf(6));
        });

        it('should return 1 when the given number is 0', function() {
            assert.equal(1, factorialOf(0));
        });

        it('should throw an error when the given number is negative', function() {
            assert.throws(function() { factorialOf(-1) }, Error, "number must be non negative");
        });

        it('should return Infinity when the given number is Infinity', function() {
            assert.equal(Infinity, factorialOf(Infinity));
        });
    });

    describe('Fibonacci',function(){
    	var fibonacciOf = loops.fibonacciOf;

    	it('should return 1 when the given number is 1',function(){
    		assert.equal('0', fibonacciOf(1));
    	});

    	it('should return 0 1 when the given number is 2',function(){
    		assert.equal('0 1', fibonacciOf(2));
    	});

    	it('should return 0 1 1 2 when the given number is 4',function(){
    		assert.equal('0 1 1 2', fibonacciOf(4));
    	});

    	it('should return 0 1 1 2 3 5 when the given number is 6',function(){
    		assert.equal('0 1 1 2 3 5', fibonacciOf(6));
    	});

    	it('should return 1 when the given number is -1',function(){
    		assert.equal('0', fibonacciOf(-1));
    	});

    	it('should return 0 1 when the given number is -2',function(){
    		assert.equal('0 1', fibonacciOf(-2));
    	});

    	it('should return 0 1 -1 2 -3 when the given number is -5',function(){
    		assert.equal('0 1 -1 2 -3', fibonacciOf(-5));
    	});

    	it('should return 0 1 -1 2 -3 5 when the given number is -6',function(){
    		assert.equal('0 1 -1 2 -3 5', fibonacciOf(-6));
    	});
    });

    describe('Odd number series',function(){
    	var oddNumberSeries = loops.oddNumberSeries;
    	
    	it('should return 0 when the given range is 1',function(){
    		assert.equal(0, oddNumberSeries(1));
    	});

    	it('should return 4 when the given range is 1 to 5',function(){
    		assert.equal(4, oddNumberSeries(5));
    	});

    	it('should return 25 when the given range is 1 to 10',function(){
    		assert.equal(25, oddNumberSeries(10));
    	});

    	it('should return Infinity when the given range is 1 to Infinity',function(){
    		assert.equal(Infinity, oddNumberSeries(Infinity));
    	});

    	it('should return -25 when the given range is -10 to -1',function(){
    		assert.equal(-25, oddNumberSeries(-10));
    	});

    	it('should return -9 when the given range is -7 to -1',function(){
    		assert.equal(-16, oddNumberSeries(-7));
    	});
    });
});