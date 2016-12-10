var assert = require('assert');
var arrays = require('../src/arrays');


describe('array', function(){
	var list = [1,2,3,4];
	var negativeList = [-1,-2,-3,-4];

	describe('select odd numbers',function(){
		it('should return odd numbers from given list',function(){
			assert.deepEqual([1,3], arrays.oddNumbers(list));
		});

		it("should return odd numbers from negative numbers's list",function(){
			var list = [-1,-2,-3,-4];
			assert.deepEqual([-1,-3], arrays.oddNumbers(list));
		});

		it('should return empty list from non odd numbers list',function(){
			var list = [2,4,6,8];
			assert.deepEqual([], arrays.oddNumbers(list));
		});

		it('should return empty list for Infinity numbers list',function(){
			var list = [Infinity, Infinity, Infinity];
			assert.deepEqual([], arrays.oddNumbers(list));
		});

		it('should return empty list for given empty list',function(){
			assert.deepEqual([], arrays.oddNumbers([]));
		});

	});
	describe('select even numbers',function(){
		it('should return even numbers from given list',function(){
			assert.deepEqual([2,4], arrays.evenNumbers(list));
		});

		it('should return even numbers from negative number list',function(){
			
			assert.deepEqual([-2,-4], arrays.evenNumbers(negativeList));
		});

		it('should return empty list from non even numbers list',function(){
			var list = [1,3,5,7];
			assert.deepEqual([], arrays.evenNumbers(list));
		});

		it('should return empty list for Infinity numbers list',function(){
			var list = [Infinity, Infinity, Infinity];
			assert.deepEqual([], arrays.evenNumbers(list));
		});

		it('should return empty list for given empty list',function(){
			assert.deepEqual([], arrays.oddNumbers([]));
		});
	});

	describe('sum of ',function(){
		it('should return sum of numbers of given list',function(){
			assert.equal(10, arrays.sumOfNumbers(list));
		});

		it('should return sum of numbers of given negative list',function(){
			assert.equal(-10, arrays.sumOfNumbers(negativeList));
		});

		it('should return Infinity when list has Infinity element',function(){
			var list = [1,2,3,4,Infinity];
			assert.equal(Infinity, arrays.sumOfNumbers(list));
		});

		it('should throw an error for an empty list',function(){
			var msg = /Reduce of empty array with no initial value/;
			assert.throws(function(){arrays.sumOfNumbers([])},msg)
		});

		it('should return sum of a single element list',function(){
			var list = [1];
			assert.equal(1, arrays.sumOfNumbers(list));
		});
	});

	describe('printing reverse', function(){
		it('should return given list in reverse order',function(){
			var expected = "4\n3\n2\n1";
			assert.equal(expected, arrays.printReverseOrder(list));
		});

		it('should return LIVE TO EVIL in reverse order',function(){
			var list = ['L','I','V','E'];
			var expected = "E\nV\nI\nL";
			assert.equal(expected,arrays.printReverseOrder(list));
		});

		it('should return an empty string for empty list',function(){
			assert.equal('',arrays.printReverseOrder([]));
		});
	});

	describe('selecting every second number',function(){
		it('should return every second element from the given list',function(){
			assert.deepEqual([1,3],arrays.eachSecondElement(list));
		});
	});

	describe('Reverse fibonacci',function(){
		it('should return reverse fibonacci for given number',function(){
			var expected = [13,8,5,3,2,1,1,0];
			assert.deepEqual(expected, arrays.fiboReverse(8));
		});
	});

	describe('Greatest number',function(){
		it('should return greatest number in the list',function(){
			var otherList = [1,26,3,5];
			assert.equal(4, arrays.greatestElement(list));
			assert.equal(26, arrays.greatestElement(otherList));
		});
	});

	describe('Lowest number',function(){
		it('should return the lowest number in the list',function(){
			assert.equal(1, arrays.lowestElement(list));
		});
	});

	describe('Average of', function(){
		it('should return the average of the elements',function(){
			assert.equal(2.5, arrays.averageOf(list));
		});
	});

	describe('Mapping lengths',function(){
		it('should return length of each element of the given list',function(){
			var expected = [4,3,1,6,4];
			var list = ["mary","had","a","little","lamb"];
			assert.deepEqual(expected, arrays.mappingLengths(list));
		});
	});
});