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

    describe('Even number series',function(){
    	var evenNumberSeries = loops.evenNumberSeries;
    	it('should return 0 when the given range is 1',function(){
    		assert.equal(0, evenNumberSeries(1));
    	});

    	it('should return 0 when the given range is 1 to 2',function(){
    		assert.equal(0,evenNumberSeries(2));
    	});

    	it('should return 2 when the given range is 1 to 4',function(){
    		assert.equal(2, evenNumberSeries(4));
    	});

    	it('should return 20 when the given range is 1 to 10',function(){
    		assert.equal(20, evenNumberSeries(10));
    	});

    	it('should return -20 when the given range is -10 to -1',function(){
    		assert.equal(-20, evenNumberSeries(-10));
    	});

    	it('should return Infinity when the given range is 1 to Infinity',function(){
    		assert.equal(Infinity, evenNumberSeries(Infinity));
    	});

    	it('should return 0 when the given range is -1',function(){
    		assert.equal(0, evenNumberSeries(-1));
    	});

    	it('should return -12 when the given range is -7 to -1',function(){
    		assert.equal(-12, evenNumberSeries(-7));
    	});
    });

    describe('Multiplication table',function(){
    	multiplicationTableOf = loops.multiplicationTableOf;

    	it('should return 3 when the given number is 1 and factor is 3',function(){
    		assert.equal('3', multiplicationTableOf(3, 1));
    	});

    	it('should return table of 3 until 18 when the given range is 6',function(){
    		assert.equal('3 6 9 12 15 18',multiplicationTableOf(3, 6));
    	});

    	it('should return table of 5 until 50 when the given range is 10',function(){
    		assert.equal('5 10 15 20 25 30 35 40 45 50',multiplicationTableOf(5, 10));
    	});

    	it('should return table of -1 until -9 when the given range is 9',function(){
    		assert.equal('-1 -2 -3 -4 -5 -6 -7 -8 -9',multiplicationTableOf(-1, 9));
    	});

    	it('should return table of Infinity until Infinity when the given range is Infinity',function(){
    		assert.equal('Infinity Infinity Infinity Infinity Infinity',multiplicationTableOf(Infinity, 5)); 
    	});

    	it('should throw an error for negative range when the given range is negative number',function(){
    		assert.throws(function(){multiplicationTableOf(2,-9)}, Error, "invalid range");
    	});

    	it('should throw an error when the given range is zero',function(){
    		assert.throws(function(){multiplicationTableOf(2,0)},Error,"invalid range");
    	});
    });

    describe('Sum of N numbers',function(){
    	var sumOfNNumbers = loops.sumOfNNumbers;
    	
    	it('should return 1 when the given range is 1',function(){
    		assert.equal(1, sumOfNNumbers(1));
    	});

    	it('should return 1275 when the given range is 1 to 50',function(){
    		assert.equal(1275, sumOfNNumbers(50));
    	});

    	it('should return 3 when the given range is 1 to 2',function(){
			assert.equal(3, sumOfNNumbers(2));
		});

		it('should return 55 when the given range is 1 to 10',function(){
			assert.equal(55, sumOfNNumbers(10));
		});

		it('should return 5050 when the given range is 1 to 100',function(){
			assert.equal(5050, sumOfNNumbers(100));
		});

		it('should return 0 for the given range below 0',function(){
			assert.equal(0, sumOfNNumbers(-1));
			assert.equal(0, sumOfNNumbers(-2));
		});

		it('should return Infinity when the given range is 1 to Infinity',function(){
			assert.equal(Infinity, sumOfNNumbers(Infinity));
		});

    });
});