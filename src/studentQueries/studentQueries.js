var studentQueries = {};

var changedToSubject = function(ele){
	return { name:ele[0],
	 	roll_num:+(ele[1]),
	 	english:+(ele[2]),
		mathematics: +(ele[3]),
		computer_science: +(ele[4])};
};

studentQueries.mappingList = function(list){
	return list.map(function(ele){
		return changedToSubject(ele.split(","));
	});
};

var greater = function(first, second, subject){ 
	if(first[subject] > second[subject])
		return first;
	return second;	
};

var lesser = function(first, second, subject){
	if(second[subject] <= first[subject])
		return second;
	return first;
};

var isSubjectHasDNAMarks = function(marks){
	return isNaN(marks);
};

var skipDNAMarksStudents = function(list, subject){
	return list.filter(function(student){
		return !isSubjectHasDNAMarks(student[subject])
	});
};

var filteredList = function(list, subject){
	var newList = studentQueries.mappingList(list);
	return skipDNAMarksStudents(newList, subject);
};

var selectStudentBasedOn = function(list, subject, condition){
	var list = filteredList(list, subject);
	return list.reduce(function(initial, current){
		return condition(initial, current, subject);
	});	
};

studentQueries.highest = function(list, subject){
	return selectStudentBasedOn(list, subject, greater);
};

studentQueries.lowest = function(list, subject){
	return selectStudentBasedOn(list, subject, lesser);
};

var isAboveOf = function(actualScore, score){
	return actualScore> score;
};

var isBelowOf = function(actualScore, score){
	return actualScore < score;
};

var studentRangeOf = function(list, subject, score, condition){
	var list = filteredList(list, subject);
	return list.filter(function(student){
		return condition(student[subject], score);
	});
};

studentQueries.above = function(list, subject, score){
	return studentRangeOf(list, subject, score, isAboveOf);
};

studentQueries.below = function(list, subject, score){
	return studentRangeOf(list, subject, score, isBelowOf);
};

var isAlphabet = function(alphabet){
	var asciiCode = alphabet.charCodeAt(0);
	return (asciiCode > 64 && asciiCode <= 90);
};

studentQueries.createPhoneBook = function(alphabets){
	var list = Array.prototype.filter.call(alphabets, function(alphabet){	
		return isAlphabet(alphabet);
	});	

	return list.reduce(function(initial, current){
		initial[current] = [];
		return initial;
	},{});
};

var addStudentInPhoneBook = function(list, phoneBook){
	list.forEach(function(student){
		var alphabet = student.name[0];
		phoneBook[alphabet].push(student);
	});
};

studentQueries.phoneBook = function(list){
	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var phonebook = studentQueries.createPhoneBook(alphabets);
	var newList = studentQueries.mappingList(list);
	addStudentInPhoneBook(newList, phonebook);
	return phonebook;
};

studentQueries.averageOf = function(list,subject){
	var list = filteredList(list, subject);
	var sum = list.reduce(function(init, curr){return init+curr[subject];},0);
	return Math.ceil(sum/list.length);
};

isBetweenOf = function(score, rangeFrom, rangeTo){
	return (score > rangeFrom-1 && score <= rangeTo);
};

studentQueries.between = function(list, subject, rangeFrom, rangeTo){
	var list = filteredList(list, subject);
	return list.filter(function(student){
		return isBetweenOf(student[subject], rangeFrom, rangeTo);
	});
};

module.exports = studentQueries;
