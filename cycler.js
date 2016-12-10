var cycler=function(listOfItems) {
	var itemsToCycle=listOfItems.map(function(d){
		return d;
	});
	var i=-1;
	return function() {
		i=(i+1)%(itemsToCycle.length);
		return itemsToCycle[i];
	};
}

var colorCycler=cycler(["red","green","blue"]);
for (var i = 0; i < 5; i++) {
	console.log(colorCycler());
}