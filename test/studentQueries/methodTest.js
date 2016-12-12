var assert = require('assert');
var queries = require('../../src/studentQueries/studentQueries');

describe('Mapping list into student',function(){
	var defaultList = ["joy,1,2,3,4"];

	it('should return student object for given list',function(){
		var expected = [{name:"joy", roll_num:1,english:2,
			mathematics:3,computer_science:4}];

		assert.deepEqual(expected, queries.mappingList(defaultList));
	});

	it('should return student object for given undefined subject',function(){
		var list = ["joel, 2"];
		var expected = [{name:"joel", roll_num:2, english:0,
			mathematics:0, computer_science:0}];
		assert.deepEqual(expected, queries.mappingList(list));
	});
});

describe('Highest score based on subject',function(){
	describe('highest score in mathematics',function(){
		it('should return highest score for a single element list',function(){
			var list = ["joy,1,2,3,4"];
			var actualStudent = queries.highest(list, "mathematics");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(3, actualStudent.mathematics);
		});

		it('should return joel student as a highest scorer in maths',function(){
			var list = ["joy,1,2,3,4", "joel,2,1,4,3"];

			var actualStudent = queries.highest(list, "mathematics");
			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(4, actualStudent.mathematics);
		});


		it('should return highest for undefined score',function(){
			var list = ["joy,1,2,3,4", "joel,2,1,undefined,3"];

			var actualStudent = queries.highest(list, "mathematics");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(3, actualStudent.mathematics);
		});

		it("should return highest score for DNA marks' student",function(){
			var list = ["joy,1,2,3,4", "joel,2,1,DNA,3"];

			var actualStudent = queries.highest(list, "mathematics");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(3, actualStudent.mathematics);
		});
	});

	describe('highest score in english',function(){
		it('should return highest score for a single element list',function(){
			var list = ["joy,1,2,3,4"];
			var actualStudent = queries.highest(list, "english");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(2, actualStudent.english);
		});

		it('should return joy student as a high score in english',function(){
			var list = ["joy,1,2,3,4", "joel,2,1,4,3"];

			var actualStudent = queries.highest(list, "english");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(2, actualStudent.english);
		});

		it('should return highest score in english for given list',function(){
			var list = ["joy,1,undefined,3,4", "joel,2,1,undefined,3"];

			var actualStudent = queries.highest(list, "english");
			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(1, actualStudent.english);
		});

		it("should return highest score for DNA marks' student",function(){
			var list = ["joy,1,2,3,4", "joel,2,DNA,1,3"];

			var actualStudent = queries.highest(list, "english");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(2, actualStudent.english);
		});
	});

	describe('highest score in computer_science',function(){

		it('should return highest score for a single element list',function(){
			var list = ["joy,1,2,3,4"];
			var actualStudent = queries.highest(list, "computer_science");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(4, actualStudent.computer_science);
		});

		it("should return highest score's student",function(){
			var list = ["joy,1,2,3,4", "joel,2,1,4,3"];

			var actualStudent = queries.highest(list, "computer_science");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(4, actualStudent.computer_science);
		});

		it('should return high score if student has undefined marks',function(){ 
			var list = ["joy,1,1,3,undefined", "joel,2,1,2,3"];

			var actualStudent = queries.highest(list, "computer_science");
			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(3, actualStudent.computer_science);
		});

		it("should return highest score for DNA marks' student",function(){
			var list = ["joy,1,2,3,4", "joel,2,8,1,DNA"];

			var actualStudent = queries.highest(list, "computer_science");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(4, actualStudent.computer_science);
		});
	});
});

describe('Lowest score based on subject',function(){
	describe('lowest score in english',function(){

		it('should return lowest score for a single element list',function(){
			var list = ["joy,1,2,3,4"];
			var actualStudent = queries.lowest(list, "english");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(2, actualStudent.english);
		});

		it("should return lowest score's student",function(){
			var list = ["joy,1,2,3,4", "joel,2,1,4,3"];
			var actualStudent = queries.lowest(list, "english");

			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(1, actualStudent.english);
		});

		it('should return lowest score for undefined marks student',function(){
			var list = ["joy,1,undefined,3,4", "joel,2,1,2,3"];

			var actualStudent = queries.lowest(list, "english");
			assert.equal("joy",actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(0, actualStudent.english);
		});

		it("should return lowest score for DNA marks' student",function(){
			var list = ["joy,1,2,3,4", "joel,2,DNA,1,1"];

			var actualStudent = queries.lowest(list, "english");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(2, actualStudent.english);
		});

	});
		
	describe('lowest score in mathematics',function(){

		it('should return lowest score for a single element list',function(){
			var list = ["joy,1,2,3,4"];
			var actualStudent = queries.lowest(list, "mathematics");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(3, actualStudent.mathematics);
		});

		it("should return lowest score's student",function(){
			var list = ["joy,1,2,3,4", "joel,2,1,4,3"];
			var actualStudent = queries.lowest(list, "mathematics");

			assert.equal("joy",actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(3, actualStudent.mathematics);
		});

		it('should return lowest score for undefined marks student',function(){
			var list = ["joy,1,2,3,4", "joel,2,1,undefined,3"];

			var actualStudent = queries.lowest(list, "mathematics");
			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(0, actualStudent.mathematics);
		});

		it("should return lowest score for DNA marks' student",function(){
			var list = ["joy,1,2,3,4", "joel,2,8,DNA,1"];

			var actualStudent = queries.lowest(list, "mathematics");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(2, actualStudent.english);
		});
	});

	describe('lowest score in computer_science',function(){

		it('should return lowest score for a single element list',function(){
			var list = ["joy,1,2,3,4"];
			var actualStudent = queries.lowest(list, "computer_science");
			assert.equal("joy", actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(4, actualStudent.computer_science);
		});

		it("should return lowest score's student",function(){
			var list = ["joy,1,2,3,4", "joel,2,1,4,3"];
				var actualStudent = queries.lowest(list, "computer_science");

				assert.equal("joel",actualStudent.name);
				assert.equal(2, actualStudent.roll_num);
				assert.equal(3, actualStudent.computer_science);
		});

		it('should return lowest score for undefined marks student',function(){
			var list = ["joy,1,2,3,undefined", "joel,2,1,1,3"];

			var actualStudent = queries.lowest(list, "computer_science");
			assert.equal("joy",actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(0, actualStudent.computer_science);	
		});

		it("should return lowest score for DNA marks' student",function(){
			var list = ["joy,1,2,3,DNA", "joel,2,1,1,3"];

			var actualStudent = queries.lowest(list, "computer_science");
			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(3, actualStudent.computer_science);	
		});
	});
});



