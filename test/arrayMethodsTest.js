var assert = require('assert');
var arrayMethods = require('../src/arrayMethods');
var basic = require('../src/basicFunctions.js');

describe('myMap',function(){
	var myMap = arrayMethods.myMap;
	describe('Operation on single array',function(){
		it('should return same array',function(){
			assert.deepEqual([1,2,3], myMap([1,2,3], function(number){return number}));
		});

		it('should return index of elements of an given array',function(){
			assert.deepEqual([0,1,2], myMap([1,2,3], function(number, index){return index}));
		});

		it('should return given array for each elements',function(){
			assert.deepEqual([[1,2,3],[1,2,3],[1,2,3]], myMap([1,2,3],function(number, index, list){return list}));
		});

		it('should return array where each element increment by 1 for given array',function(){
			assert.deepEqual([2,3,4], myMap([1,2,3],function(number){return number+1}));
		});

		it('should return hola place of each element for given array',function(){
			assert.deepEqual(['hola','hola','hola'], myMap([1,2,3],function(number){return 'hola'}));
		});

		it('should return each element multiply with 3 for given array',function(){
			assert.deepEqual([3,6,9,12,15], myMap([1,2,3,4,5], function(number){return number*3;}));
		});

		it('should return 0 place of each element for given array',function(){
			assert.deepEqual([0,0,0,0], myMap([1,2,3,4], function(number){return 0}));
		});

		it('should return undefined at each element place for given array',function(){
			assert.deepEqual([undefined, undefined, undefined],myMap([1,2,3],function(){}));
		});	
	});

	describe('Operation on two arrays',function(){
		it('should return sum of two arrays',function(){
			var otherList = [2,3,4,5];
			assert.deepEqual([3,5,7,9], myMap([1,2,3,4], function(number,index){return number+otherList[index]}));
		});

		it('should return series of pow of each element for given arrays using other array',function(){
			var other = [1,2,3,4];
			assert.deepEqual([1,4,27,256], myMap([1,2,3,4], function(number, index){return Math.pow(number, other[index])}))
		});
	});	
});

describe('myFilter',function(){
	var myFilter = arrayMethods.myFilter;

	describe('filter single array', function() {
	    it('should return an array of same elements when callback return true for each element of given array', function() {
	        assert.deepEqual([1, 2, 3, 4], myFilter([1, 2, 3, 4], function() {return true; }));
	    });

	    it('should return an empty array when callback return false for each element of given array', function() {
	        assert.deepEqual([], myFilter([1, 2, 3, 4], function() {return false }));
	    });

	    it('should filter all of the even elemets from the given array', function() {
	        assert.deepEqual([2, 4, 6, 8, 10], myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], basic.isEven));
	    });

	    it('should filter all of the odd elements from the given array', function() {
	        assert.deepEqual([1, 3, 5, 7, 9], myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], basic.isOdd));
	    });

	    it('should return an empty array when the given array has only undefined elements', function() {
	        assert.deepEqual([], myFilter([undefined, undefined, undefined], function(number) {return number }));
	    });

	    it('should return an empty array when the given array has only falsy elements', function() {
	        assert.deepEqual([], myFilter([0, undefined, NaN], function(number) {return number }));
	    });

	    it('should filter all of the truthy elements from the given array', function() {
	        assert.deepEqual([1, 2], myFilter([0, 1, undefined, 2, NaN], function(number) {return number }));
	    });

	    it('should filter all of the elements divisible by three from the given array', function() {
	        assert.deepEqual([3, 6, 9], myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(number) {return number % 3 == 0; }));
	    });

	    it('should filter all of the truthy index of elements from the given array', function() {
	        assert.deepEqual([2, 3, 4], myFilter([1, 2, 3, 4], function(element, index) {return index }));
	    });

	    it('should return unique elements from the given array',function(){
	    	assert.deepEqual([1,2,3,4,5,6,7],myFilter([1,2,3,3,4,5,6,6,7], function(number, index, list){return list.indexOf(number)== index}));
	    })
	});

	describe('filter array of arrays',function(){
		it('should filter all of the arrays which length is greater than three from the given array',function(){
			assert.deepEqual([[1,2,3,4],[2,3,4,5]], myFilter([[1,2,3,4],[1,2,3],[2,3,4,5]], function(element){return element.length>3}));
		});

		it('should filter all of the arrays which sum of the elements is greater than 4 from the given array',function(){
			assert.deepEqual([[7,5],[2,3]], myFilter([[1,2],[7,5],[1,3],[2,3]], function(element){return (element[0]+element[1]) > 4;}));
		})
	});
});
