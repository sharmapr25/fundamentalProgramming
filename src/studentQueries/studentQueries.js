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

var greater = function(first, second, subject){
	if(first[subject] > second[subject])
		return first;
	return second;
};

var lesser = function(first, second, subject){
	if(first[subject]< second[subject])
		return first;
	return second;
};

studentQueries.highest = function(list, subject){
	var newList = studentQueries.mappingList(list);
	return newList.reduce(function(initial, current){
		return greater(initial, current, subject);
	});
};

studentQueries.lowest = function(list, subject){
	var newList = studentQueries.mappingList(list);
	return newList.reduce(function(initial, current){
		return lesser(initial, current, subject);
	});
};

module.exports = studentQueries;