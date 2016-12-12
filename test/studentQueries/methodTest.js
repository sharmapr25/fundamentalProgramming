var assert = require('assert');
var queries = require('../../src/studentQueries/studentQueries');

describe('Mapping list into student',function(){
	var defaultList = ["joy,1,2,3,4"];

	it('should return student object for given list',function(){
		var expected = [{name:"joy", roll_num:1,english:2,
			mathematics:3,computer_science:4}];

		assert.deepEqual(expected, queries.mappingList(defaultList));
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
			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(1, actualStudent.english);
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
			assert.equal("joy",actualStudent.name);
			assert.equal(1, actualStudent.roll_num);
			assert.equal(3, actualStudent.mathematics);
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
			assert.equal("joel",actualStudent.name);
			assert.equal(2, actualStudent.roll_num);
			assert.equal(3, actualStudent.computer_science);	
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

describe('above a certain score',function(){
	var defaultList = ["joy,1,2,3,4"];
	var studentNames = function(list){
		return list.map(function(student){return student.name;});
	};

	describe('in mathematics',function(){
		it("should return student for a single element's list",function(){
			var expectedName = ["joy"];
			var actualStudent = queries.above(defaultList, "mathematics",2);

			assert.deepEqual(expectedName, studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it('should return empty list for given score 3',function(){
			var actualStudent = queries.above(defaultList, "mathematics",3);
			assert.deepEqual(0,studentNames(actualStudent).length);
			assert.equal(0, actualStudent.length);
		});

		it("should return a list for given score 2",function(){
			var list = ["joy,1,2,3,4", "joel,2,1,4,3"];
			var expectedNames = ["joy","joel"];
			var actualStudent = queries.above(list, "mathematics",2);
			assert.deepEqual(expectedNames, studentNames(actualStudent));
			assert.equal(2, actualStudent.length);
		});

		it("should return a list for DNA marks' student",function(){
			var list = ["joy,1,2,DNA,3", "joel,2,1,3,3"];
			var actualStudent = queries.above(list, "mathematics",1);
			assert.deepEqual(["joel"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it("should return a list for undefined marks' student",function(){
			var list = ["joy,1,2,4,3", "joel,2,1,undefined,3"];
			var actualStudent = queries.above(list, "mathematics",3);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});
	});

	describe('in english',function(){
		it("should return student for a single element's list",function(){
			var expectedName = ["joy"];
			var actualStudent = queries.above(defaultList, "english",1);

			assert.deepEqual(expectedName, studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it('should return empty list for given score 2',function(){
			var actualStudent = queries.above(defaultList, "english",2);
			assert.deepEqual(0,studentNames(actualStudent).length);
			assert.equal(0, actualStudent.length);
		});

		it("should return a list for given score 6",function(){
			var list = ["joy,1,8,3,4", "joel,2,9,4,3"];
			var expectedNames = ["joy","joel"];
			var actualStudent = queries.above(list, "english",6);
			assert.deepEqual(expectedNames, studentNames(actualStudent));
			assert.equal(2, actualStudent.length);
		});

		it("should return a list for DNA marks' student",function(){
			var list = ["joy,1,DNA,2,3", "joel,2,2,3,3"];
			var actualStudent = queries.above(list, "english",1);
			assert.deepEqual(["joel"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it("should return a list for undefined marks' student",function(){
			var list = ["joy,1,2,4,3", "joel,2,undefined,1,3"];
			var actualStudent = queries.above(list, "english",1);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});
	});

	describe('in computer_science',function(){
		it("should return student for a single element's list",function(){
			var expectedName = ["joy"];
			var actualStudent = queries.above(defaultList, "computer_science",3)

			assert.deepEqual(expectedName, studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it('should return empty list for given score 4',function(){
			var actualStudent = queries.above(defaultList, "computer_science",4)
			assert.deepEqual(0,studentNames(actualStudent).length);
			assert.equal(0, actualStudent.length);
		});

		it("should return a list for given score 3",function(){
			var list = ["joy,1,8,3,4", "joel,2,9,4,6"];
			var expectedNames = ["joy","joel"];
			var actualStudent = queries.above(list, "computer_science",3);
			assert.deepEqual(expectedNames, studentNames(actualStudent));
			assert.equal(2, actualStudent.length);
		});

		it("should return a list for DNA marks' student",function(){
			var list = ["joy,1,2,3,DNA", "joel,2,2,3,3"];
			var actualStudent = queries.above(list, "computer_science",1);
			assert.deepEqual(["joel"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it("should return a list for undefined marks' student",function(){
			var list = ["joy,1,2,4,3", "joel,2,1,3,undefined"];
			var actualStudent = queries.above(list, "computer_science",2);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});
	});
});



