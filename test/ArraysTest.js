var assert = require('assert');
var arrays = require('../src/arrays');


describe('array', function(){
	var list = [1,2,3,4];

	describe('select odd numbers',function(){
		it('should return odd numbers',function(){
			assert.deepEqual([1,3], arrays.oddNumbers(list));
		});
	});
	describe('select even numbers',function(){
		it('should return even numbers',function(){
			assert.deepEqual([2,4], arrays.evenNumbers(list));
		});
	});

	describe('sum of ',function(){
		it('should return sum of numbers',function(){
			assert.equal(10, arrays.sumOfNumbers(list));
		});
	});

	describe('printing reverse', function(){
		it('should return list in reverse order',function(){
			var expected = "4\n3\n2\n1";
			assert.equal(expected, arrays.printReverseOrder(list));
		});
	});

	describe('selecting every second number',function(){
		it('should return every second element',function(){
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
		it('should return length of each element',function(){
			var expected = [4,3,1,6,4];
			var list = ["mary","had","a","little","lamb"];
			assert.deepEqual(expected, arrays.mappingLengths(list));
		});
	});
});