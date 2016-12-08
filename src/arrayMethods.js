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

module.exports = arrayMethods;