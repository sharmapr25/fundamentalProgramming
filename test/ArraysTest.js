var assert = require('assert');
var arrays = require('../src/arrays');


describe('array', function(){
	describe('for single array',function(){
		var list = [1,2,3,4];
		
		it('should return odd numbers',function(){
			assert.deepEqual([1,3], arrays.oddNumbers(list));
		});

		it('should return even numbers',function(){
			assert.deepEqual([2,4], arrays.evenNumbers(list));
		});

		it('should return sum of numbers',function(){
			assert.deepEqual(10, arrays.sumOfNumbers(list));
		});

		it('should return list in reverse order',function(){
			var expected = "4\n3\n2\n1";
			assert.equal(expected, arrays.printReverseOrder(list));
		});

		it('should return every second element',function(){
			assert.deepEqual([1,3],arrays.eachSecondElement(list));
		});

		it('should return reverse fibonacci for given number',function(){
			var expected = [13,8,5,3,2,1,1,0];
			assert.deepEqual(expected, arrays.fiboReverse(8));
		});

		it('should return greatest number in the list',function(){
			var otherList = [1,26,3,5];
			assert.deepEqual(4, arrays.greatestElement(list));
			assert.deepEqual(26, arrays.greatestElement(otherList));
		});

		it('should return the lowest number in the list',function(){
			assert.deepEqual(1, arrays.lowestElement(list));
		});


	});
});