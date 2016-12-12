var assert = require('assert');
var queries = require('../../src/studentQueries/studentQueries');

describe('Mapping list into student',function(){
	var defaultList = ["joy,1,2,3,4"];
	var studentNames = function(list){
		return list.map(function(student){return student.name});
	};

	it('should return student object for a single element list',function(){
		var students = queries.mappingList(defaultList);
		var actualNames = studentNames(students);  
		assert.deepEqual(["joy"], actualNames);
		assert.equal(1,students.length);
	});

	it('should return student object for given undefined subject',function(){
		var list = ["joel, 2"];
		var students = queries.mappingList(list);
		var actualNames = studentNames(students);  
		assert.deepEqual(["joel"], actualNames);
		assert.equal(1,students.length);

	});

	it('should return students object for given list',function(){
		var list = ["joy,1,2,3,4", "joel,2,1,4,3"];
		var expectedNames = ["joy","joel"]

		var students = queries.mappingList(list);
		var actualNames = studentNames(students);  
		assert.deepEqual(expectedNames, actualNames);
		assert.equal(2,students.length);
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

describe('Above a certain score',function(){
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

describe('Below a certain score',function(){
	var defaultList = ["joy,1,2,3,4"];

	var studentNames = function(list){
		return list.map(function(student){return student.name;});
	};

	describe('in mathematics',function(){

		it("should return a list for a single element's list",function(){
			var actualStudent = queries.below(defaultList, "mathematics", 4);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it('should return an empty list for given score 2',function(){
			var actualStudent = queries.below(defaultList, "mathematics", 2);
			assert.deepEqual(0,studentNames(actualStudent).length);
			assert.equal(0, actualStudent.length);
		});

		it("should return a list for DNA marks' student",function(){
			var list = ["joy,1,2,DNA,3", "joel,2,1,3,3"];
			var actualStudent = queries.below(list, "mathematics",4);
			assert.deepEqual(["joel"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it("should return a list for undefined marks' student",function(){
			var list = ["joy,1,2,4,3", "joel,2,1,undefined,3"];
			var actualStudent = queries.below(list, "mathematics",5);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});
	});

	describe('in english',function(){
		it("should return a list for a single element's list",function(){
			var actualStudent = queries.below(defaultList, "english", 3);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it('should return an empty list for given score 2',function(){
			var actualStudent = queries.below(defaultList, "english", 2);
			assert.deepEqual(0,studentNames(actualStudent).length);
			assert.equal(0, actualStudent.length);
		});

		it("should return a list for DNA marks' student",function(){
			var list = ["joy,1,DNA,2,3", "joel,2,1,3,3"];
			var actualStudent = queries.below(list, "english",3);
			assert.deepEqual(["joel"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it("should return a list for undefined marks' student",function(){
			var list = ["joy,1,2,4,3", "joel,2,undefined,1,3"];
			var actualStudent = queries.below(list, "english",5);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});
	});


	describe('in computer_science',function(){
		it("should return a list for a single element's list",function(){
			var actualStudent = queries.below(defaultList, "computer_science",5)
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it('should return an empty list for given score 2',function(){
			var actualStudent = queries.below(defaultList, "computer_science",2)
			assert.deepEqual(0,studentNames(actualStudent).length);
			assert.equal(0, actualStudent.length);
		});

		it("should return a list for DNA marks' student",function(){
			var list = ["joy,1,2,3,DNA", "joel,2,1,3,2"];
			var actualStudent = queries.below(list, "computer_science",3);
			assert.deepEqual(["joel"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});

		it("should return a list for undefined marks' student",function(){
			var list = ["joy,1,2,4,3", "joel,2,1,3,undefined"];
			var actualStudent = queries.below(list, "computer_science",4);
			assert.deepEqual(["joy"], studentNames(actualStudent));
			assert.equal(1, actualStudent.length);
		});
	});
});

describe('Create Phonebook',function(){
	it('should return phonebook for given alphabet A',function(){
		var expected = {"A":[]};
		assert.deepEqual(expected,queries.createPhoneBook("A"));
	});

	it('should return phonebook for given alphabets ABC',function(){
		var expected = {A:[],B:[],C:[]};
		assert.deepEqual(expected, queries.createPhoneBook("ABC"));
	});

	it('should return an empty list for given non-alphabet 1',function(){
		assert.deepEqual([], queries.createPhoneBook("1"));
	});

	it('should return only alphabets list for given alphabets 12ABC',function(){
		var expected = {"A":[],"B":[],"C":[]};
		assert.deepEqual(expected, queries.createPhoneBook("12ABC"));
	});
});

describe('Phonebook',function(){
	var namesBeginWith = function(phoneBook,alphabet){
		return phoneBook[alphabet].map(function(student){return student.name});
	};

	it("should return student list for a single element list",function(){
		var list = ["Joy,1,2,3,4"];
		var phoneBook = queries.phoneBook(list);

		assert.equal(1, phoneBook['J'].length);
		assert.deepEqual(['Joy'], namesBeginWith(phoneBook,'J'));
	});

	it("should return students' list according to given alphabet",function(){
		var list = ["Joy,1,8,3,4", "Joel,2,9,4,6"];
		var phoneBook = queries.phoneBook(list);
		var expectedNames = ["Joy","Joel"];
		assert.equal(2, phoneBook['J'].length);
		assert.deepEqual(expectedNames, namesBeginWith(phoneBook, 'J'));
	});

	it('should return undefined for non-alphabet',function(){
		var list = ["Joy,1,2,3,4"];
		var phoneBook = queries.phoneBook(list);
		assert.equal(undefined, phoneBook['7']);
		assert.equal(undefined, phoneBook['Error']);
		assert.equal(undefined, phoneBook[undefined]);
	});

	it('should return 0 for non contain alphabets',function(){
		var list = ["Joy,1,2,3,4"];
		var phoneBook = queries.phoneBook(list);
		assert.equal(0, phoneBook['E'].length);
		assert.equal(0, phoneBook['A'].length);
	});
});

describe('AverageOf',function(){
	describe('single element array',function(){
		var list = ["Joy,1,2,3,4"];

		it('should return 2 for english subject',function(){
			assert.equal(2, queries.averageOf(list, "english"));
		});

		it('should return 3 for maths',function(){
			assert.equal(3, queries.averageOf(list, "mathematics"));
		});	

		it('should return 4 for computer science',function(){
			assert.equal(4, queries.averageOf(list, "computer_science"));
		});
	});

	describe('more than one element array',function(){
		var list = ["Joy,1,2,3,4","Joel,2,3,4,5"];

		it('should return 2.5 average of given subject english',function(){
			assert.equal(2.5, queries.averageOf(list, "english"));
		});

		it('should return 3.5 average of given subject maths',function(){
			assert.equal(3.5, queries.averageOf(list, "mathematics"));
		});

		it('should reutrn 4.5 average for computer science', function(){
			assert.equal(4.5, queries.averageOf(list, "computer_science"));
		});
	});
});



