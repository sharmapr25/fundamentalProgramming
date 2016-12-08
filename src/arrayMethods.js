var arrayMethods = {};

arrayMethods.myMap = function (list, callback) {
	var newList = [];
	for (var index = 0; index < list.length; index++) {
		newList.push(callback(list[index], index, list));
	}
	return newList;
};

arrayMethods.myFilter = function(list, callback){
	var newList = [];
	for (var index = 0; index < list.length; index++) {
		if(callback(list[index], index, list))
			newList.push(list[index]);
	}
	return newList;
};

arrayMethods.myReduce = function(list, callback,initial){
	var current;
	if(initial == undefined){
		initial = list[0];
		current = 1;
	}
	else{
		current = 0;
	}

	for (var index = current; index < list.length; index++) {
		initial = callback(initial, list[index], index, list);
	}
	return initial;
}

module.exports = arrayMethods;

