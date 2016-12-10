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

		it('should return every second number of the negative list',function(){
			assert.deepEqual([-1,-3], arrays.eachSecondElement(negativeList));
		});

		it('should return each second number of str elements list',function(){
			var list = ['s','q','u','a','r','e'];
			var expected = ['s','u','r'];
			assert.deepEqual(expected, arrays.eachSecondElement(list));
		});
	});

	describe('Reverse fibonacci',function(){
		it('should return reverse fibonacci for given number',function(){
			var expected = [13,8,5,3,2,1,1,0];
			assert.deepEqual(expected, arrays.fiboReverse(8));
		});

		it('should return reverse fibo for 1',function(){
			assert.deepEqual([0], arrays.fiboReverse(1));
		});

		it('should throw an erorr of Invalid length',function(){
			var msg = /Invalid array length/;
			assert.throws(function(){arrays.fiboReverse(Infinity)},msg);
			assert.throws(function(){arrays.fiboReverse(-1)},msg);
			assert.throws(function(){arrays.fiboReverse(0)},msg);

		});
	});

	describe('Greatest number',function(){
		it('should return greatest number in the list',function(){
			var otherList = [1,26,3,5];
			assert.equal(4, arrays.greatestElement(list));
			assert.equal(26, arrays.greatestElement(otherList));
		});

		it('should return greatest number in negative list',function(){
			assert.equal(-1, arrays.greatestElement(negativeList));
		});

		it('should return Infinity as greatest number',function(){
			var list = [0,1 ,Infinity];
			assert.equal(Infinity, arrays.greatestElement(list));
		});

		it('should return greatest number for floating list',function(){
			var list = [1.2,2.1,3.3,4.2];
			assert.equal(4.2, arrays.greatestElement(list));
		});

		it('should return greatest number from the given list',function(){
			var list = [1,2.2,3,4,4.01];
			assert.equal(4.01, arrays.greatestElement(list));
		});
	});

	describe('Lowest number',function(){
		it('should return the lowest number in the list',function(){
			assert.equal(1, arrays.lowestElement(list));
		});

		it('should return lowest number in negative list',function(){
			assert.equal(-4, arrays.lowestElement(negativeList));
		});

		it('should return -Infinity as lowest number',function(){
			var list = [0,1 ,-Infinity];
			assert.equal(-Infinity, arrays.lowestElement(list));
		});

		it('should return lowest number for floating list',function(){
			var list = [1.2,2.1,3.3,4.2];
			assert.equal(1.2, arrays.lowestElement(list));
		});

		it('should return lowest number from the given list',function(){
			var list = [1,2.2,3,4,4.01];
			assert.equal(1, arrays.lowestElement(list));
		});
	});

	describe('Average of', function(){
		it('should return the average of the elements',function(){
			assert.equal(2.5, arrays.averageOf(list));
		});

		it('should return the average of the negative elements',function(){
			assert.equal(-2.5, arrays.averageOf(negativeList));
		});

		it('should return Infinity when the list contain Infinity',function(){
			var list = [1,2,Infinity];
			assert.equal(Infinity,arrays.averageOf(list));
		});

		it("should return NaN for the non integer element's list",function(){
			var list = ['s','q','u','r'];
			assert.ok(isNaN(arrays.averageOf(list)));
		});

		it("should return averageOf floating elements's list",function(){
			var list = [1.2,2.2,3.2,4.2];
			assert.equal(2.7, arrays.averageOf(list));
		});

		it('should return average of positive and negative elements',function(){
			var list = [1,2,-1,-2];
			assert.equal(0,arrays.averageOf(list));
		});
	});

	describe('Mapping lengths',function(){
		it('should return length of each element of the given list',function(){
			var expected = [4,3,1,6,4];
			var list = ["mary","had","a","little","lamb"];
			assert.deepEqual(expected, arrays.mappingLengths(list));
		});

		it('should return undefined for integer element',function(){
			var expected = [undefined, undefined, undefined];
			var list = [1,2,3];
			assert.deepEqual(expected, arrays.mappingLengths(list));
		});

		it('should return length of each array element',function(){
			var list = [[1],[1,2,3],[1,2]];
			var expected = [1,3,2];
			assert.deepEqual(expected, arrays.mappingLengths(list));
		});

		it('should return undefined for each object element',function(){
			var obj1 = {a:1,b:2};
			var obj2 = {a:3,b:2};
			var list = [obj1, obj2];
			var expected = [undefined, undefined];
			assert.deepEqual(expected, arrays.mappingLengths(list));
		});
	});

	describe('Counting odd numbers',function(){
		it('should return count of oddNumbers in a list',function(){
			assert.equal(2, arrays.countOddNumbers(list));
		});

		it('should return 0 for an empty list',function(){
			assert.equal(0,arrays.countOddNumbers([]));
		});

		it("should return 5 for given negative element's list",function(){
			var list = [-1,-3,-5,-7,-9];
			assert.equal(5, arrays.countOddNumbers(list));
		});

		it("should return 0 for Infinity element's list",function(){
			var list = [Infinity, undefined];
			assert.equal(0, arrays.countOddNumbers(list));
		});

		it("should return 1 for NaN 's list",function(){
			var list = [NaN,1,2];
			assert.equal(1, arrays.countOddNumbers(list));
		});
	});

	describe('Counting even numbers',function(){
		it('should return count of EvenNumbers in a list',function(){
			assert.equal(2, arrays.countEvenNumbers(list));
		});

		it('should return 0 for an empty list',function(){
			assert.equal(0,arrays.countEvenNumbers([]));
		});

		it("should return 5 for given negative element's list",function(){
			var list = [-2,-4,-6,-8,-10];
			assert.equal(5, arrays.countEvenNumbers(list));
		});

		it("should return 0 for Infinity element's list",function(){
			var list = [Infinity, undefined];
			assert.equal(0, arrays.countEvenNumbers(list));
		});

		it("should return 1 for NaN 's list",function(){
			var list = [NaN,1,2];
			assert.equal(1, arrays.countEvenNumbers(list));
		});
	});

	describe('Count numbers above a certain thresold',function(){
		it('should return 1 for given thresold 0',function(){
			assert.equal(1, arrays.numbersAboveThresold([1],0));
		});

		it('should return 2 for given thresold 0',function(){
			var list = [1,2];
			assert.equal(2,arrays.numbersAboveThresold(list, 0));
		});

		it('should return 3 for given thresold 1',function(){
			assert.equal(3, arrays.numbersAboveThresold(list, 1));
		});

		it('should return 2 for given thresold 2',function(){
			assert.equal(2, arrays.numbersAboveThresold(list, 2));
		});

		it('should return 1 for given thresold 3',function(){
			assert.equal(1, arrays.numbersAboveThresold(list, 3));
		});

		it('should return 0 for given thresold 4',function(){
			assert.equal(0, arrays.numbersAboveThresold(list, 4));
		});

		it("should return 0 for non number's list",function(){
			var list = [NaN, undefined];
			assert.equal(0, arrays.numbersAboveThresold(list, 1));
		});

		it('should return 0 for non number thresold',function(){
			assert.equal(0, arrays.numbersAboveThresold(list, 's'));
		});
	});

	describe('Count numbers below a certain thresold',function(){
		it('should return 0 for given thresold 0',function(){
			assert.equal(0, arrays.numbersBelowThresold([1],0));
		});

		it('should return 0 for given thresold 1',function(){
			assert.equal(0, arrays.numbersBelowThresold(list, 1));
		});

		it('should return 1 for given thresold 2',function(){
			assert.equal(1, arrays.numbersBelowThresold(list, 2));
		});

		it('should return 2 for given thresold 3',function(){
			assert.equal(2, arrays.numbersBelowThresold(list, 3));
		});

		it('should return 3 for given thresold 4',function(){
			assert.equal(3, arrays.numbersBelowThresold(list, 4));
		});

		it("should return 0 for non number's list",function(){
			var list = [NaN, undefined];
			assert.equal(0, arrays.numbersBelowThresold(list, 1));
		});

		it('should return 0 for non number thresold',function(){
			assert.equal(0, arrays.numbersBelowThresold(list, 's'));
		});
	});

	describe('Reversing an array',function(){
		it('should return same list for single element list',function(){
			assert.deepEqual([1], arrays.reversing([1]));
		});

		it('should return reverse list for two elements list',function(){
			var list= [1,2];
			assert.deepEqual([2,1], arrays.reversing(list));
		});

		it('should return reverse order for given list',function(){
			var expected = [4,3,2,1];
			assert.deepEqual(expected, arrays.reversing(list));
		});

		it('should return reverse order for string list',function(){
			var list =['c','u','b','e'];
			var expected = ['e','b','u','c'];
			assert.deepEqual(expected, arrays.reversing(list));
		});
	});

	describe('Index of a number',function(){
		it('should return index of the given number',function(){
			assert.equal(0, arrays.indexOfNumber([1],1));
		});

		it('should return 1 index in the list for given number 2',function(){
			assert.equal(1, arrays.indexOfNumber(list, 2));
		});

		it('should return 2 index in the list for given number 3',function(){
			assert.equal(2, arrays.indexOfNumber(list, 3));
		});

		it('should return 3 index in the list for given number 4',function(){
			assert.equal(3, arrays.indexOfNumber(list,4));
		});

		it('should return first occur index for given number 1',function(){
			var list = [1,2,2,3,4];
			assert.equal(1, arrays.indexOfNumber(list, 2));
		});

		it('should return first occur index for given number -1',function(){
			var list = [-4,-3,-1,-2,-1];
			assert.equal(2, arrays.indexOfNumber(list, -1));
		});

		it('should return -1 when given number is not in the list',function(){
			assert.equal(-1, arrays.indexOfNumber(list, 5));
		});
	});
});