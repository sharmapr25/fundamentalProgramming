var arrayMethods = {};

arrayMethods.myMap = function (list, callback) {
	var newList = [];
	for (var i = 0; i < list.length; i++) {
		newList.push(callback(list[i], i, list));
	}
	return newList;
};

arrayMethods.myFilter = function(list, callback){
	var newList = [];
	for (var i = 0; i < list.length; i++) {
		if(callback(list[i], i, list))
			newList.push(list[i]);
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

	for (var i = current; i < list.length; i++) {
		initial = callback(initial, list[i], i, list);
	}
	return initial;
}

module.exports = arrayMethods;

