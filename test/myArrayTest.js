var assert = require('assert');
var myMap = require('../src/myMap');

describe('myMap',function(){
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