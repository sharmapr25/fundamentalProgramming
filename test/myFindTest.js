var assert = require('assert');
var my_find = require('../src/myFind');

describe('find element in an array',function(){
	it('should find the only element in a single element array',function(){
		var set = [1];
		assert.equal(my_find(set, 1),1);
	});

	it('should find the given element in an array of two elements',function(){
		var setofTwoNumbers = [1,2];
		assert.equal(my_find(setofTwoNumbers,2),2);
		assert.equal(my_find(setofTwoNumbers,1),1);	
	});

	it('should find the given element in an array with more than two elements',function(){
		var setofNumbers = [1,2,3];
		assert.equal(my_find(setofNumbers,2),2);
		assert.equal(my_find(setofNumbers,3),3);
		assert.equal(my_find(setofNumbers,1),1);
	});

	it('should find the given element in an array with more than five elements',function(){
		var setofNumbers = [1,2,4,6,8,10,5];
		assert.equal(my_find(setofNumbers, 5),5);
		assert.equal(my_find(setofNumbers,4),4);
		assert.equal(my_find(setofNumbers,10),10);
	});

	it('should return undefined if the given element is not in an array',function(){
		var setofNumbers = [1,2,3,4];
		assert.equal(my_find(setofNumbers,9),undefined);
	});

	it('should return undefined for the given element in an empty array',function(){
		var emptySet = [];
		assert.equal(my_find(emptySet, 4),undefined);
	});

	it('should return undefined in an empty array',function(){
		var emptySet = [];
		assert.equal(my_find(emptySet, undefined),undefined);
	});

	it('should find the given element in two elements array of consisted repetitive elements',function(){
		var setofTwoNumbers = [1,1];
		assert.equal(my_find(setofTwoNumbers,1),1);
	});

	it('should find the given element in an array of consisted repetitive elements',function(){
		var setofRepetitiveNumbers =  [1,2,3,3];
		assert.equal(my_find(setofRepetitiveNumbers,3),3);
		assert.equal(my_find(setofRepetitiveNumbers,2),2);
		assert.equal(my_find(setofRepetitiveNumbers, 1),1);
	});

	it('should return undefined when the type of the given element is different from the given array elements',function(){
		var setofNumbers = [1,2,3];
		assert.equal(my_find(setofNumbers,'a'),undefined);
		assert.equal(my_find(setofNumbers,'1'),undefined);
	});

	it('should return undefined for the given negative number in an array',function(){
		var setofNumbers = [1,2,3];
		assert.equal(my_find(setofNumbers,-1),undefined);
	});

	it('should find the given element in a single string element array',function(){
		var singleElementArray = ['s'];
		assert.equal(my_find(singleElementArray,'s'),'s');
	});

	it('should find the given element in an array of two string elements',function(){
		var setOfTwoStringElements = ['s','r'];
		assert.equal(my_find(setOfTwoStringElements,'r'),'r');
		assert.equal(my_find(setOfTwoStringElements,'s'),'s');
	});

	it('should find the given element in an array of more than two string elements', function(){
		var setOfStringValues = ['s','r','i'];
		assert.equal(my_find(setOfStringValues,'r'),'r');
	});

	it('should find the given element in an array of negative elements',function(){
		var setOfNegativeNumbers = [-1,-2,-3];
		assert.equal(my_find(setOfNegativeNumbers,-2),-2);
	});

	it('should find infinity if given element is infinity in a single element array',function(){
		var singleElementArray = [Infinity];
		assert.equal(my_find(singleElementArray, Infinity),Infinity);
	});

	it('should find the element in an array of consisted Infinity element',function(){
		var setOfElements = [1,0,Infinity,2];
		assert.equal(my_find(setOfElements, Infinity),Infinity);
		assert.equal(my_find(setOfElements, 0),0);
	});

	it('should return undefined when the type of the given infinity number is different from the given array of elements',function(){
		var setOfElements = [Infinity];
		assert.equal(my_find(setOfElements, 'Infinity'),undefined);
	});
});

describe('find array in an collection of arrays',function(){

	it('should find the given array in an array of a collection of single array',function(){
		var arrayOfSingleElementArray = [[1]];
		assert.deepEqual(my_find(arrayOfSingleElementArray, [1]),[1]);
	});

	it('should find the given array in an array of collection of two elements array',function(){
		var arrayOfTwoElementArray = [[1,2]];
		assert.deepEqual(my_find(arrayOfTwoElementArray,[1,2]),[1,2]);
	});

	it('should find the given array in an array of a collection of arrays',function(){
		var arrayOfArrays = [[1,2],[2,3],[1,2,3]];
		assert.deepEqual(my_find(arrayOfArrays,[1,2]),[1,2]);
		assert.deepEqual(my_find(arrayOfArrays,[2,3]),[2,3]);
		assert.deepEqual(my_find(arrayOfArrays,[1,2,3]),[1,2,3]);
	});

});