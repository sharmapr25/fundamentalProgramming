var myFind = function(collection, value){
	for (var i = 0; i < collection.length; i++) {
		if(JSON.stringify(collection[i]) == JSON.stringify(value))
			return collection[i];
	}
}

module.exports = myFind;
