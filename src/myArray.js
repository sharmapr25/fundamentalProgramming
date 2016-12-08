var myArray = {};
myArray.myMap = function (list, callback) {
	var newList = [];
	for (var i = 0; i < list.length; i++) {
		newList.push(callback(list[i], i, list));
	}
	return newList;
};

module.exports = myArray;