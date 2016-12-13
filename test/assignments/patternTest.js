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

describe('Empty rectangle',function(){
	it('should return an empty rectangle for 3*3 dimension',function(){
		var expected = ["***",
						"* *",    
						"***"];

		assert.deepEqual(expected, pattern.createEmptyRectangle(3,3));
	});

	it('should return an empty rectangle for 5*10 dimension',function(){
		var expected = ["**********",
						"*        *",
						"*        *",
						"*        *",
						"**********"];
		assert.deepEqual(expected, pattern.createEmptyRectangle(5,10));
	});

	it('should return an empty rectangle for 2*2 dimension',function(){
		var expected  = ["**","**"];
    	assert.deepEqual(expected, pattern.createEmptyRectangle(2,2));
	});

	it('should return an empty rectangle for 1*1 dimension',function(){
		assert.deepEqual(["*"], pattern.createEmptyRectangle(1,1));
	});

	it('should return an empty rectangle for 0*0 dimension',function(){
		assert.deepEqual([], pattern.createEmptyRectangle(0,0));
	});
});

describe('cycle * and - patterns',function(){
	it('should return cycle of pattern for dimension 1*1',function(){
		assert.deepEqual(['-'], pattern.drawPattern(1,1,['-','*']));
	});

	it('should return cycle pattern for given dimension 3*4',function(){
		var expected = ['----',
						"****",
						"----"];
		var list = ['-','*'];
		assert.deepEqual(expected, pattern.drawPattern(3,4,list));
	});

	it('should return pattern for 0*0 dimension',function(){
		assert.deepEqual([], pattern.drawPattern(0,0,['-','*']));
	});

	it('should return pattern for 4*5 dimension',function(){
		var expected = ['*****',
						'-----',
						'*****',
						'-----'];
		var list = ['*','-'];
		assert.deepEqual(expected, pattern.drawPattern(4,5, list));
	});
});