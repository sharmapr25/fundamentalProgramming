var myFind = function(collection, number){
	for (var i = 0; i < collection.length; i++) {
		if(collection[i] == number)
			return collection[i];
	}
}

module.exports = myFind;
