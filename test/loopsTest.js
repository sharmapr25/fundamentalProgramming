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
    	it('should return empty when the given range is 1',function(){
    		assert.equal(oddNumberSeries(1,1).length,0);
    	});

    	it('should return 1 3 when the given range is 1 to 5',function(){
    		assert.equal('1 3', oddNumberSeries(1,5));
    	});

    	it('should return 1 3 5 7 9 when the given range is 1 to 10',function(){
    		assert.equal('1 3 5 7 9', oddNumberSeries(1,10));
    	});

    	it('should return -9 -7 -5 -3 when the given range is -10 to -1',function(){
    		assert.equal('-9 -7 -5 -3', oddNumberSeries(-10,-1));
    	});

    	it('should return -7 -5 -3 when the given range is -7 to -1',function(){
    		assert.equal('-7 -5 -3', oddNumberSeries(-7,-1));
    	});
    });

    describe('Even number series',function(){
    	var evenNumberSeries = loops.evenNumberSeries;

    	it('should return 0 when the given range is 1',function(){
    		assert.equal(0, evenNumberSeries(0,1));
    	});

    	it('should return 0 when the given range is 1 to 2',function(){
    		assert.equal(0,evenNumberSeries(0,2));
    	});

    	it('should return 2 when the given range is 1 to 4',function(){
    		assert.equal('2', evenNumberSeries(1,4));
    	});

    	it('should return 2 4 6 8  when the given range is 1 to 10',function(){
    		assert.equal('2 4 6 8', evenNumberSeries(1,10));
    	});

    	it('should return -10 -8 -6 -4 -2 when the given range is -10 to -1',function(){
    		assert.equal('-10 -8 -6 -4 -2', evenNumberSeries(-10,-1));
    	});

    	it('should return 0 when the given range is -1 to 0',function(){
    		assert.equal(0, evenNumberSeries(-1,0));
    	});

    	it('should return -6 -4 -2 when the given range is -7 to -1',function(){
    		assert.equal('-6 -4 -2', evenNumberSeries(-7,-1));
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
    		assert.equal(1, sumOfNNumbers(1,1));
    	});

    	it('should return 1275 when the given range is 1 to 50',function(){
    		assert.equal(1275, sumOfNNumbers(1,50));
    	});

    	it('should return 3 when the given range is 1 to 2',function(){
			assert.equal(3, sumOfNNumbers(1,2));
		});

		it('should return 55 when the given range is 1 to 10',function(){
			assert.equal(55, sumOfNNumbers(1,10));
		});

		it('should return 5050 when the given range is 1 to 100',function(){
			assert.equal(5050, sumOfNNumbers(1,100));
		});

		it('should return 0 for the given range below 0',function(){
			assert.equal(0, sumOfNNumbers(1,-1));
			assert.equal(0, sumOfNNumbers(1,-2));
		});

    });

    describe('Product of N numbers',function(){
    	var productOf = loops.productOf;

    	it('should return 1 when the given range is 1',function(){
    		assert.equal(1, productOf(1,1));
    	});

    	it('should return 120 when the given range is 1 to 5',function(){
    		assert.equal(120, productOf(1,5));
    	});

    	it('should return -120 when the given range is -1 to -5',function(){
    		assert.equal(-120, productOf(-5,-1));
    	});

    	it('should return 0 when the given range is -1 to 0,',function(){
    		assert.equal(0,productOf(-1, 0));
    	});

    	it('should return Infinity when the given range is 1 to Infinity',function(){
    		assert.equal(Infinity, productOf(1,Infinity));
    	});

    	it('should return NaN when the given range is 0 to Infinity',function(){
    		assert.ok(isNaN(productOf(0,Infinity)));
    	});
    });

    describe('Sum of any N numbers',function(){
    	var sumOfAnyNNumbers = loops.sumOfAnyNNumbers;

    	it('should return 1 when the given range is 0 to 1',function(){
    		assert.equal(1, sumOfAnyNNumbers(0,1));
    	});

    	it('should return 30 when the given range is 4 to 8',function(){
    		assert.equal(30, sumOfAnyNNumbers(4,8));
    	});

    	it('should return 18 when the given range is 5 to 7',function(){
			assert.equal(18, sumOfAnyNNumbers(5,7));
		});

		it('should return 57 when the given range is 7 to 12',function(){
			assert.equal(57, sumOfAnyNNumbers(7,12));
		});

		it('should return 3825 when the given range is 1 to 100',function(){
			assert.equal(3825, sumOfAnyNNumbers(50,100));
		});

		it('should return 0 for the given range below 0',function(){
			assert.equal(0, sumOfAnyNNumbers(1,-1));
			assert.equal(0, sumOfAnyNNumbers(1,-2));
		});
    });

    describe('Product of any N numbers',function(){
    	var productOfAnyNNumbers = loops.productOfAnyNNumbers;

    	it('should return 1 when the given range is 1',function(){
    		assert.equal(1, productOfAnyNNumbers(1,1));
    	});

    	it('should return 60 when the given range is 3 to 5',function(){
    		assert.equal(60, productOfAnyNNumbers(3,5));
    	});

    	it('should return -60 when the given range is -5 to -3',function(){
    		assert.equal(-60, productOfAnyNNumbers(-5,-3));
    	});

    	it('should return 0 when the given range is -1 to 0,',function(){
    		assert.equal(0,productOfAnyNNumbers(-1, 0));
    	});

    	it('should return Infinity when the given range is 1 to Infinity',function(){
    		assert.equal(Infinity, productOfAnyNNumbers(1,Infinity));
    	});

    	it('should return NaN when the given range is 0 to Infinity',function(){
    		assert.ok(isNaN(productOfAnyNNumbers(0,Infinity)));
    	});
    });

    describe('Odd numbers between any two numbers',function(){
    	var oddNumbersBetweenAnyRange = loops.oddNumbersBetweenAnyRange;
    	it('should return empty when the given range is 1',function(){
    		assert.equal(oddNumbersBetweenAnyRange(1,1).length,0);
    	});

    	it('should return 3 5 7 when the given range is 3 to 8',function(){
    		assert.equal('3 5 7', oddNumbersBetweenAnyRange(3,8));
    	});

    	it('should return 91 93 95 97 99 when the given range is 90 to 100',function(){
    		assert.equal('91 93 95 97 99', oddNumbersBetweenAnyRange(90,100));
    	});

    	it('should return -19 -17 -15 -13 when the given range is -20 to -11',function(){
    		assert.equal('-19 -17 -15 -13', oddNumbersBetweenAnyRange(-20,-11));
    	});

    	it('should return -7 -5 -3 when the given range is -7 to -2',function(){
    		assert.equal('-7 -5 -3', oddNumbersBetweenAnyRange(-7,-2));
    	});
    });

    describe('Even number between any two numbers',function(){
    	var evenNumbersBetweenAnyRange = loops.evenNumbersBetweenAnyRange;

    	it('should return 0 when the given range is 1',function(){
    		assert.equal(0, evenNumbersBetweenAnyRange(0,1));
    	});

    	it('should return 2 4 when the given range is 2 to 5',function(){
    		assert.equal('2 4',evenNumbersBetweenAnyRange(2,5));
    	});

    	it('should return 2 when the given range is 2 to 4',function(){
    		assert.equal('2', evenNumbersBetweenAnyRange(2,4));
    	});

    	it('should return 12 14 16 18 20 when the given range is 12 to 21',function(){
    		assert.equal('12 14 16 18 20', evenNumbersBetweenAnyRange(12,21));
    	});

    	it('should return -10 -8 -6 -4 when the given range is -10 to -3',function(){
    		assert.equal('-10 -8 -6 -4', evenNumbersBetweenAnyRange(-10,-3));
    	});

    	it('should return 0 when the given range is -1 to 0',function(){
    		assert.equal(0, evenNumbersBetweenAnyRange(-1,0));
    	});

    	it('should return -70 -68 -66 when the given range is -70 to -65',function(){
    		assert.equal('-70 -68 -66', evenNumbersBetweenAnyRange(-70, -65));
    	});
    });

});