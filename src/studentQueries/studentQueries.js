var studentQueries = {};

var setValue = function(number){
	// if(number == undefined || number == 'undefined'){
	// 	return 0;
	// }
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

studentQueries.above = function(list, subject, score){
	var newList = studentQueries.mappingList(list);
	var filteredList = skipDNAMarksStudent(newList, subject);
	return filteredList.filter(function(student){
		return isAboveOf(student[subject], score);
	});
};

module.exports = studentQueries;