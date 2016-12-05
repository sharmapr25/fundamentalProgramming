var assert = require('assert');
var isEven = require('../src/basicFunctions.js').isEven;

describe('isEven',function(){
	it('should return true for an even number',function(){
		assert.ok(isEven(2));
	});
});