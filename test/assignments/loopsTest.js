var assert = require('assert');
var loops = require('../../src/assignments/loops');

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
            assert.throws(function() { factorialOf(-1) },/number must be non negative/);
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

    describe('First N odd numbers series',function(){
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

    describe('First N even numbers series',function(){
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

    	it('should return 3*1 = 3 when the given number is 1 and factor is 3',function(){
    		assert.equal('3*1 = 3', multiplicationTableOf(3, 1));
    	});

    	it('should return table of 3 for given limit 6',function(){
            var tableOfThree = "3*1 = 3\n3*2 = 6\n3*3 = 9\n3*4 = 12\n3*5 = 15\n3*6 = 18";
    		assert.equal(tableOfThree,multiplicationTableOf(3, 6));
    	});

    	it('should return table of 5 for given range 10',function(){
            var tableOfFive = "5*1 = 5\n5*2 = 10\n5*3 = 15\n5*4 = 20\n5*5 = 25\n5*6 = 30\n"+
                "5*7 = 35\n5*8 = 40\n5*9 = 45\n5*10 = 50";
    		assert.equal(tableOfFive,multiplicationTableOf(5, 10));
    	});

    	it('should return table of -1 for given range -9',function(){
            var tableOfMinus1 = '-1*1 = -1\n-1*2 = -2\n-1*3 = -3\n-1*4 = -4\n-1*5 = -5\n-1*6 = -6\n-1*7 = -7\n-1*8 = -8\n-1*9 = -9';
    		assert.equal(tableOfMinus1,multiplicationTableOf(-1, 9));
    	});

    	it('should return table of Infinity when the given range is 5',function(){
            var taleOfInfinity = "Infinity*1 = Infinity\nInfinity*2 = Infinity\nInfinity*3 = Infinity\nInfinity*4 = Infinity\nInfinity*5 = Infinity";
    		assert.equal(taleOfInfinity,multiplicationTableOf(Infinity, 5)); 
    	});

    	it('should throw an error for negative range when the given range is negative number',function(){
    		assert.throws(function(){multiplicationTableOf(2,-9)},/out of range/);
    	});

    	it('should throw an error when the given range is zero',function(){
    		assert.throws(function(){multiplicationTableOf(2,0)},/out of range/);
    	});
    });

    describe('Sum of first N numbers',function(){
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

        it('should throw an error of out of range when the given range is 1 to Infinity',function(){
            assert.throws(function(){sumOfNNumbers(1,Infinity)},/out of range/);
        });
    });

    describe('Product of first N numbers',function(){
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

    	it('should throw an error of out of range when the given range is 1 to Infinity',function(){
            assert.throws(function(){productOf(1,Infinity)},/out of range/);
        });

    	it('should throw an error of out of range when the given range is 0 to Infinity',function(){
            assert.throws(function(){productOf(0,Infinity)},/out of range/);
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

        it('should throw an error of out of range when the given range is 1 to Infinity',function(){
            assert.throws(function(){sumOfAnyNNumbers(1,Infinity)},/out of range/);
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

    	it('should throw an error when the given range is 1 to Infinity',function(){
              assert.throws(function(){productOfAnyNNumbers(1,Infinity)},/out of range/);
    	});

        it('should throw an error of out of range when the given range is 0 to Infinity',function(){
            assert.throws(function(){productOfAnyNNumbers(0,Infinity)},/out of range/);
        });    
    });

    describe('Odd numbers series between any two numbers',function(){
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

    describe('Even numbers series between any two numbers',function(){
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

    describe('every nth number between any two numbers',function(){
    	var nthNumberBetweenAnyRange = loops.nthNumberBetweenAnyRange;
    	
        it('should return 1 2 3 4 5 6 for every 1st number between 1 to 6',function(){
    		assert.equal('1 2 3 4 5 6', nthNumberBetweenAnyRange(1,6, 1));
    	});

        it('should return 1 3 5 for every 2nd number between 1 to 6',function(){
            assert.equal('1 3 5', nthNumberBetweenAnyRange(1,6,2));
        });

        it('should return 1 4 for every 3rd number between 1 to 6',function(){
            assert.equal('1 4', nthNumberBetweenAnyRange(1,6, 3));
        });

        it('should return 1 5 for every 4th number between 1 to 6',function(){
            assert.equal('1 5', nthNumberBetweenAnyRange(1,6, 4));
        });

        it('should return 1 6 for every 5th number between 1 to 6',function(){
            assert.equal('1 6', nthNumberBetweenAnyRange(1,6, 5));
        });

        it('should return 1 2 3 4 5 6 7 8 9 10 for every 1st number between 1 to 10',function(){
            assert.equal('1 2 3 4 5 6 7 8 9 10', nthNumberBetweenAnyRange(1,10, 1));
        });

        it('should return 1 3 5 7 9 for every 2nd number between 1 to 10',function(){
            assert.equal('1 3 5 7 9', nthNumberBetweenAnyRange(1,10, 2));
        });  

        it('should return 1 4 7 10 for every 3rd number between 1 to 10',function(){
            assert.equal('1 4 7 10', nthNumberBetweenAnyRange(1,10, 3));
        });  

        it('should return 1 5 9 for every 4th number between 1 to 10',function(){
            assert.equal('1 5 9', nthNumberBetweenAnyRange(1,10, 4));
        });   

        it('should return 1 6 for every 5th number between 1 to 10',function(){
            assert.equal('1 6', nthNumberBetweenAnyRange(1,10, 5));
        }); 

        it('should return 1 7 for every 6th number between 1 to 10',function(){
            assert.equal('1 7', nthNumberBetweenAnyRange(1,10, 6));
        });    

        it('should return 1 8 for every 7th number between 1 to 10',function(){
            assert.equal('1 8', nthNumberBetweenAnyRange(1,10, 7));
        });

        it('should return 1 9 for every 8th number between 1 to 10',function(){
            assert.equal('1 9', nthNumberBetweenAnyRange(1,10, 8));
        });

        it('should return 1 10 for every 9th number between 1 to 10',function(){
            assert.equal('1 10', nthNumberBetweenAnyRange(1,10, 9));
        });

        it('should return 1 for every 10th number between 1 to 10',function(){
            assert.equal('1', nthNumberBetweenAnyRange(1,10, 10));
        });

    	it('should return 15 22 29 36 for every 7th number between 15 to 36',function(){
    		assert.equal('15 22 29 36', nthNumberBetweenAnyRange(15, 37, 7));
    	});

    	it('should return 6 8 10 12 14 16 18 20 for every 2nd number with range 6 to 21',function(){
    		assert.equal('6 8 10 12 14 16 18 20',nthNumberBetweenAnyRange(6, 21, 2));
    	});

    	it('should return -1 0 1 for every 1th number between -1 to 1',function(){
    		assert.equal('-1 0 1', nthNumberBetweenAnyRange(-1, 1, 1));
    	});

    	it('should return 3 7 11 15 for every 4th number between 3 and 15',function(){
    		assert.equal('3 7 11 15', nthNumberBetweenAnyRange(3, 15, 4));
    	});

    	it('should return -18 -15 -12 -9 for every 3th number between -18 to -8',function(){
    		assert.equal('-18 -15 -12 -9',nthNumberBetweenAnyRange(-18,-8,3));
    	});
    });

    describe('Sum of all even numbers between any two numbers',function(){
        var sumOfEvenNumbers = loops.sumOfEvenNumbers;
        it('should return 2 for given range 1 to 3',function(){
            assert.equal(2, sumOfEvenNumbers(1,3));
        });

        it('should return 2 for the given range 2 to 3 or 2 to 4',function(){
            assert.equal(2, sumOfEvenNumbers(2,3));
            assert.equal(2, sumOfEvenNumbers(2,4));
        });

        it('should return 6 for the given range 2 to 5 or 2 to 6',function(){
            assert.equal(6, sumOfEvenNumbers(2,5));
            assert.equal(6, sumOfEvenNumbers(2,6));
        });

        it('should return 12 for the given range 2 to 7 or 2 to 8',function(){
            assert.equal(12, sumOfEvenNumbers(2,7));
            assert.equal(12, sumOfEvenNumbers(2,8));
        });

        it('should return 20 for the given range 2 to 9 or 2 to 10',function(){
            assert.equal(20, sumOfEvenNumbers(2,9));
            assert.equal(20, sumOfEvenNumbers(2,10));
        });

        it('should return 30 for the given range 2 to 11 or 2 to 12',function(){
            assert.equal(30, sumOfEvenNumbers(2,11));
            assert.equal(30, sumOfEvenNumbers(2,12));
        });

        it('should return 42 for the given range 2 to 13 or 2 to 14',function(){
            assert.equal(42, sumOfEvenNumbers(2,13));
            assert.equal(42, sumOfEvenNumbers(2,14));
        });

        it('should return 56 for given range 2 to 15',function(){
            assert.equal(56, sumOfEvenNumbers(2,15));
        });

        it('should return -2 when the given range is -3 to -1',function(){
            assert.equal(-2, sumOfEvenNumbers(-3,-1));
        });

        it('should return -6 when the given range is -5 to -1',function(){
            assert.equal(-6, sumOfEvenNumbers(-5,-1));
        });

        it('should return -50 for the given range -15 to -5 or -14 to -5',function(){
            assert.equal(-50, sumOfEvenNumbers(-15,-5));
            assert.equal(-50, sumOfEvenNumbers(-14,-5));
        });

        it('should return -36 for the given range -13 to -5 or -12 to -5',function(){
            assert.equal(-36, sumOfEvenNumbers(-13,-5));
            assert.equal(-36, sumOfEvenNumbers(-12,-5));
        });

        it('should return -24 for the given range -11 to -5 or -10 to -5',function(){
            assert.equal(-24, sumOfEvenNumbers(-11,-5));
            assert.equal(-24, sumOfEvenNumbers(-10,-5));
        });

        it('should return -14 for the given range -9 to -5 or -8 to -5',function(){
            assert.equal(-14, sumOfEvenNumbers(-9,-5));
            assert.equal(-14, sumOfEvenNumbers(-8,-5));
        });

        it('should return -6 for the given range -7 to -5 or -6 to -5',function(){
            assert.equal(-6, sumOfEvenNumbers(-7,-5));
            assert.equal(-6, sumOfEvenNumbers(-6,-5));
        });

        it('should return 0 for the given range -5 to -5',function(){
            assert.equal(0,sumOfEvenNumbers(-5,-5));
        });

        it('should throw an error for out of range when the given range is 4 to 1',function(){
            assert.throws(function(){sumOfEvenNumbers(4,1)},/out of range/)
        });

        it('should throw an error for out of range when the given range is 3 to 1',function(){
            assert.throws(function(){sumOfEvenNumbers(3,1)},/out of range/)
        });

        it('should throw an error for out of range when the given range is -1 to -4',function(){
            assert.throws(function(){sumOfEvenNumbers(-1,-4)},/out of range/)
        });

        it('should throw an error for out of range when the given range is -3 to -15',function(){
            assert.throws(function(){sumOfEvenNumbers(-3,-15)},/out of range/)
        });
    });

    describe('Sum of all odd numbers between any two numbers',function(){
        var sumOfOddNumbers = loops.sumOfOddNumbers;
        it('should return 2 for given range 1 to 3',function(){
            assert.equal(1, sumOfOddNumbers(1,3));
        });

        it('should return 0 when the given range is 2 to 3',function(){
            assert.equal(0, sumOfOddNumbers(2,3));
        });

        it('should return 3 for the given range 2 to 4 or 2 to 5',function(){
            assert.equal(3, sumOfOddNumbers(2,4));
            assert.equal(3, sumOfOddNumbers(2,5));
        });

        it('should return 8 for the given range 2 to 6 or 2 to 7',function(){
            assert.equal(8, sumOfOddNumbers(2,6));
            assert.equal(8, sumOfOddNumbers(2,7));
        });

        it('should return 15 for the given range 2 to 8 or 2 to 9',function(){
            assert.equal(15, sumOfOddNumbers(2,8));
            assert.equal(15, sumOfOddNumbers(2,9));
        });

        it('should return 24 for the given range 2 to 10 or 2 to 11',function(){
            assert.equal(24, sumOfOddNumbers(2,10));
            assert.equal(24, sumOfOddNumbers(2,11));
        });

        it('should return 35 for the given range 2 to 12 or 2 to 13',function(){
            assert.equal(35, sumOfOddNumbers(2,12));
            assert.equal(35, sumOfOddNumbers(2,13));
        });

        it('should return 48 for the given range 2 to 14 or 2 to 15',function(){ 
            assert.equal(48, sumOfOddNumbers(2,14));
            assert.equal(48, sumOfOddNumbers(2,15));
        });

        it('should return -3 when the given range is -3 to -1',function(){
            assert.equal(-3, sumOfOddNumbers(-3,-1));
        });

        it('should return -8 when the given range is -5 to -1',function(){
            assert.equal(-8, sumOfOddNumbers(-5,-1));
        });

        it('should return -55 for the given range -15 to -5',function(){
            assert.equal(-55, sumOfOddNumbers(-15,-5));
        });

        it('should return -40 for the given range -14 to -5 or -13 to -5',function(){
            assert.equal(-40, sumOfOddNumbers(-14,-5));
            assert.equal(-40, sumOfOddNumbers(-13,-5));
        });

        it('should return -27 for the given range -12 to -5 or -11 to -5',function(){
            assert.equal(-27, sumOfOddNumbers(-12,-5));
            assert.equal(-27, sumOfOddNumbers(-11,-5));
        });

        it('should return -16 for the given range -10 to -5 or -9 to -5',function(){
            assert.equal(-16, sumOfOddNumbers(-10,-5));
            assert.equal(-16, sumOfOddNumbers(-9,-5));
        });

        it('should return -7 for the given range -8 to -5 or -7 to -5',function(){
            assert.equal(-7, sumOfOddNumbers(-8,-5));
            assert.equal(-7, sumOfOddNumbers(-7,-5));
        });

        it('should return 0 for the given range -6 to -5 or -5 to -5',function(){
            assert.equal(0, sumOfOddNumbers(-6,-5));
            assert.equal(0,sumOfOddNumbers(-5,-5));
        });

        it('should throw an error for out of range when the given range is 4 to 1',function(){
            assert.throws(function(){sumOfOddNumbers(4,1)},/out of range/);
        });

        it('should throw an error for out of range when the given range is 3 to 1',function(){
            assert.throws(function(){sumOfOddNumbers(3,1)},/out of range/);
        });

        it('should throw an error for out of range when the given range is -1 to -4',function(){
            assert.throws(function(){sumOfOddNumbers(-1,-4)},/out of range/);
        });

        it('should throw an error for out of range when the given range is -3 to -15',function(){
            assert.throws(function(){sumOfOddNumbers(-3,-15)},/out of range/);
        });
    });

    describe('Odd number series between N and 1 backwards',function(){
        var oddNumberSeriesBackwards = loops.oddNumberSeriesBackwards;

        it('should return 1 when the given range is 1',function(){
            assert.equal('1',oddNumberSeriesBackwards(1));
        });

        it('should return 1 when the given number is 2',function(){
            assert.equal('1', oddNumberSeriesBackwards(2));
        });

        it('should return 3 1 when the given number is 3 or 4',function(){
            assert.equal('3 1', oddNumberSeriesBackwards(3));
            assert.equal('3 1', oddNumberSeriesBackwards(4));
        });

        it('should return 5 3 1 when the given number is 5 or 6',function(){
            assert.equal('5 3 1', oddNumberSeriesBackwards(5));
            assert.equal('5 3 1', oddNumberSeriesBackwards(6));
        });

        it('should return 7 5 3 1 when the given number is 7 or 8',function(){
            assert.equal('7 5 3 1', oddNumberSeriesBackwards(7));
            assert.equal('7 5 3 1', oddNumberSeriesBackwards(8));
        });

        it('should return empty when the given number is 0',function(){
            assert.equal(0,oddNumberSeriesBackwards(0).length);
        });

        it('should return empty when the given number is -1',function(){
            assert.equal(0, oddNumberSeriesBackwards(-1).length);
        });

        it('should throw an error of out of range when the given number is Infinity',function(){
            assert.throws(function(){oddNumberSeriesBackwards(Infinity)},/out of range/);
        });

        it('should return 0 when the given range is negative Infinity',function(){
            assert.equal(0, oddNumberSeriesBackwards(-Infinity));
        });
    });

    describe('Even number series between N and 1 backwards',function(){
        var evenNumberSeriesBackwards = loops.evenNumberSeriesBackwards;

        it('should return empty when the given range is 1',function(){
            assert.equal(0,evenNumberSeriesBackwards(1).length);
        });

        it('should return 2 when the given number is 2',function(){
            assert.equal('2', evenNumberSeriesBackwards(2));
        });

        it('should return 4 2 when the given number is 4 or 5',function(){
            assert.equal('4 2', evenNumberSeriesBackwards(4));
            assert.equal('4 2', evenNumberSeriesBackwards(5));
        });

        it('should return 6 4 2 when the given number is 7',function(){
            assert.equal('6 4 2', evenNumberSeriesBackwards(7));
        });

        it('should return 8 6 4 2 when the given number is 8',function(){
            assert.equal('8 6 4 2', evenNumberSeriesBackwards(8));
        });

        it('should return empty when the given number is 0',function(){
            assert.equal(0,evenNumberSeriesBackwards(0).length);
        });

        it('should return empty when the given number is -1',function(){
            assert.equal(0, evenNumberSeriesBackwards(-1).length);
        });

        it('should throw an error of out of range when the given number is Infinity',function(){
            assert.throws(function(){evenNumberSeriesBackwards(Infinity)},/out of range/);
        });

        it('should return 0 when the given range is negative Infinity',function(){
            assert.equal(0, evenNumberSeriesBackwards(-Infinity));
        });
    });
});