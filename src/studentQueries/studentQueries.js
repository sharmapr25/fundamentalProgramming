var studentQueries = {};

var setValue = function(number){
	return +number;
};

var changedToSubject = function(ele){
	return {name:ele[0], roll_num:setValue(ele[1]),english:setValue(ele[2]),
		mathematics: setValue(ele[3]), computer_science: setValue(ele[4])};
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

var skipDNAMarksStudent = function(list, subject){
	return list.filter(function(student){
		return !isSubjectHasDNAMarks(student[subject])
	});
};

var selectStudentBasedOn = function(list, subject, condition){
	var newList = studentQueries.mappingList(list);
	var filteredList = skipDNAMarksStudent(newList, subject);
	return filteredList.reduce(function(initial, current){
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
	var newList = studentQueries.mappingList(list);
	var filteredList = skipDNAMarksStudent(newList, subject);
	return filteredList.filter(function(student){
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
}

studentQueries.createPhoneBook = function(alphabets){
	var list = Array.prototype.filter.call(alphabets, function(alphabet){	
		return isAlphabet(alphabet);
	});	

	return list.reduce(function(initial, current){
		initial[current] = [];
		return initial;
	},{})
};

studentQueries.phoneBook = function(list){
	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var alphabetsPhoneBook =  studentQueries.createPhoneBook(alphabets);
	var newList = studentQueries.mappingList(list);
	newList.forEach(function(student){
		var alphabet = student.name[0];
		alphabetsPhoneBook[alphabet].push(student);
	});
	return alphabetsPhoneBook;
};

studentQueries.averageOf = function(list,subject){
	var newList = studentQueries.mappingList(list);
	var filteredList = skipDNAMarksStudent(newList, subject);
	var sum = filteredList.reduce(function(initial, current){
		return initial+current[subject];
	},0);

	return (sum/list.length);
};

module.exports = studentQueries;
