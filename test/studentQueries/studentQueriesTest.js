var assert=require("assert");
var students=require("../../src/studentQueries/data/students.js").students;
var queries=require("../../src/studentQueries/studentQueries.js");

var test={};
test["'highest' Can Retrieve Student With Highest Score In Mathematics"]=function() {
	var actualStudent=queries.highest(students,"mathematics");
	
	assert.equal("Dharmendra Singh",actualStudent.name);
	assert.equal(1001,actualStudent.roll_num);
	assert.equal(97,actualStudent.mathematics);
}

test["'highest' Can Retrieve Student With Highest Score In English"]=function() {
	var actualStudent=queries.highest(students,"english");
	
	assert.equal("Jai Om Pandey",actualStudent.name);
	assert.equal(1009,actualStudent.roll_num);
	assert.equal(98,actualStudent.english);
}

test["'highest' Can Retrieve Student With Highest Score In Computer Science"]=function() {
	var actualStudent=queries.highest(students,"computer_science");
	
	assert.equal("Jai Om Pandey",actualStudent.name);
	assert.equal(1009,actualStudent.roll_num);
	assert.equal(98,actualStudent.computer_science);
}

test["'lowest' Can Retrieve Student With Lowest Score In Mathematics"]=function() {
	var actualStudent=queries.lowest(students,"mathematics");
	
	assert.equal("Ganesh Patil",actualStudent.name);
	assert.equal(1045,actualStudent.roll_num);
	assert.equal(0,actualStudent.mathematics);
}

test["'lowest' Can Retrieve Student With Lowest Score In English"]=function() {
	var actualStudent=queries.lowest(students,"english");
	
	assert.equal("Suman Das",actualStudent.name);
	assert.equal(1030,actualStudent.roll_num);
	assert.equal(4,actualStudent.english);
}

test["'lowest' Can Retrieve Student With Lowest Score In Computer Science"]=function() {
	var actualStudent=queries.lowest(students,"computer_science");
	
	assert.equal("Supriya Gole",actualStudent.name);
	assert.equal(1014,actualStudent.roll_num);
	assert.equal(0,actualStudent.computer_science);
}

test["'above' can retreieve students above a certain score in Mathematics"]=function() {
	var actualStudents=queries.above(students,"mathematics",90);
	var expectedNames=["Adarsh Kumar Sandilya",
		"Anusree Prakash",
		"Dharmendra Singh",
		"Saranraj Sekar"];
	var actualNames=actualStudents.map(function(a){return a.name}).sort();
	
	assert.equal(4,actualNames.length);
	assert.deepEqual(expectedNames,actualNames);
}

test["'above' can retreieve students above a certain score in English"]=function() {
	var actualStudents=queries.above(students,"english",90);
	var expectedNames=["Jai Om Pandey","Sagar Maurya","Saranraj Sekar"];
	var actualNames=actualStudents.map(function(a){return a.name}).sort();
	
	assert.equal(3,actualNames.length);
	assert.deepEqual(expectedNames,actualNames);
}

test["'above' can retreieve students above a certain score in Computer Science"]=function() {
	var actualStudents=queries.above(students,"computer_science",90);
	var expectedNames=["Arindam Karmakar",
		"Ashwin Kumar KA",
		"Jai Om Pandey",
		"Mitesh Kumar Jha",
		"Sayan Bisui"];
	var actualNames=actualStudents.map(function(a){return a.name}).sort();
	
	assert.equal(5,actualNames.length);
	assert.deepEqual(expectedNames,actualNames);
}

test["'below' can retreieve students above a certain score in Mathematics"]=function() {
	var actualStudents=queries.below(students,"mathematics",5);
	var expectedNames=["Ashwin Kumar KA","Bindu S","Ganesh Patil","Nimesh P"];
	var actualNames=actualStudents.map(function(a){return a.name}).sort();
	
	assert.equal(4,actualNames.length);
	assert.deepEqual(expectedNames,actualNames);
}

test["'below' can retreieve students above a certain score in English"]=function() {
	var actualStudents=queries.below(students,"english",10);
	var expectedNames=["Gaurav K","Prasun Kumar Palchodhary","Suman Das"];
	var actualNames=actualStudents.map(function(a){return a.name}).sort();
	
	assert.equal(3,actualNames.length);
	assert.deepEqual(expectedNames,actualNames);
}

test["'below' can retreieve students above a certain score in Computer Science"]=function() {
	var actualStudents=queries.below(students,"computer_science",10);
	var expectedNames=["Abhishek Gupta",
		"Rahul Nandi",
		"Saranraj Sekar",
		"Suman Maity",
		"Supriya Gole",
		"Surajit Chongder"];
	var actualNames=actualStudents.map(function(a){return a.name}).sort();

	assert.equal(6,actualNames.length);
	assert.deepEqual(expectedNames,actualNames);
}

test["'phoneBook' provides an alphabetical breakdown of students"]=function(){
	var phoneBook=queries.phoneBook(students);
	console.log(phoneBook['B']);
	assert.equal(2,phoneBook["B"].length);
	assert.equal(16,phoneBook["S"].length);

	var namesThatBeginWithB=phoneBook["B"].map(function(s){return s.name}).sort();
	assert.deepEqual(["Bindu S","Brindaban Patra"],namesThatBeginWithB);
};

test["'phoneBook' can answer questions about alphabets that don't begin students' names"]=function(){
	var phoneBook=queries.phoneBook(students);
	assert.equal(0,phoneBook["Z"].length);
	assert.equal(undefined,phoneBook["7"]);
};

test["'averageOf' provides the average for Mathematics"]=function(){
	var actualMathematicsAverage=queries.averageOf(students,"mathematics");
	assert.equal(50,actualMathematicsAverage);
};

test["'averageOf' provides the average for Computer Science"]=function(){
	var actualCSAverage=queries.averageOf(students,"computer_science");
	assert.equal(52,actualCSAverage);
};

test["'averageOf' provides the average for English"]=function(){
	var actualEnglishAverage=queries.averageOf(students,"english");
	assert.equal(52,actualEnglishAverage);
};

test["'between' fetches students whose maths scores lie within a range"] = function(){
	var actualStudents=queries.between(students,"mathematics",10,20);
	var expectedNames=['Anjaly Joy',
		'Arindam Karmakar', 
		'Jai Om Pandey', 
		'Madhuri Patil', 
		'Rahul Nandi', 
		'Sagar Maurya', 
		'Sayan Bisui' ];
	var actualNames=actualStudents.map(function(a){return a.name}).sort();
	
	assert.equal(7,actualStudents.length);
	assert.deepEqual(expectedNames,actualNames)
};
exports.test=test;