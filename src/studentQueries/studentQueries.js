var studentQueries = {};

var setValue = function(number){
	if(number == undefined || number == 'undefined'){
		return 0;
	}
	return number;
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

var isDNA = function(number1, number2){
	return number1 == 'DNA'|| number2 == 'DNA';
};

var escapeDNA = function(number1, number2, subject){
	if(number1[subject] == 'DNA')
		return number2;
	return number1;
};


var greater = function(first, second, subject){ 
	if(!isDNA(first[subject], second[subject])){
		if(first[subject] > second[subject])
			return first;
		return second;
	};

	return escapeDNA(first,second, subject);
		
};

var lesser = function(first, second, subject){
	if(!isDNA(first[subject], second[subject])){
		if(first[subject]< second[subject])
			return first;
		return second;
	};
	return escapeDNA(first[subject], second[subject]);
};

var selectStudentBaseOn = function(list, subject, condition){
	var newList = studentQueries.mappingList(list);
	return newList.reduce(function(initial, current){
		return condition(initial, current, subject);
	});	
};

studentQueries.highest = function(list, subject){
	return selectStudentBaseOn(list, subject, greater);
};

studentQueries.lowest = function(list, subject){
	return selectStudentBaseOn(list, subject, lesser);
};

module.exports = studentQueries;