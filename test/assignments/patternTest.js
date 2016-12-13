var assert = require('assert');
var pattern = require('../../src/assignments/pattern');

describe('Filled rectangle', function(){
	describe('increase only dimension column',function(){
		it('should return a rectangle of 1*1 dimension',function(){
			assert.deepEqual(["*"], pattern.fillRectangle(1,1));
		});

		it('should return a rectangle of 1*3 dimension',function(){
			assert.deepEqual(["***"], pattern.fillRectangle(1,3));
		});

	});

	describe('increase only dimension row',function(){
		it('should return a rectangle of 2*1 dimension', function(){
			var expected = ["*","*"];
			assert.deepEqual(expected, pattern.fillRectangle(2,1));
		});

		it('should return a rectangle of 4*5 dimension',function(){
			var expected = ["*****",
							"*****",
							"*****",
							"*****"];
			assert.deepEqual(expected, pattern.fillRectangle(4,5));
		});
	});
	
});