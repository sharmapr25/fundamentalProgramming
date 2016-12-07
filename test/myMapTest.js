var assert = require('assert');
var myMap = require('../src/myMap');

var identity = function(number){
	return number;
}

describe('myMap',function(){
	it('should return same array',function(){
		assert.deepEqual([1,2,3], myMap([1,2,3], identity));
	});
});