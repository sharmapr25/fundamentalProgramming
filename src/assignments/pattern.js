var pattern = {};


var draw = function(times,character){
	if(times == 1)
		return character;
	return draw(times-1,character)+character;
};

var drawStar = function(times){
	return draw(times,'*');
};


pattern.fillRectangle = function(row, column){
	var list = Array.apply(null, Array(row));
	return list.map(function(element){
		return drawStar(column);
	});
};

var drawGaps = function(times){
 	return drawStar(1) + draw(times-2,' ') + drawStar(1);
}

var withFirstAndLast = function(list, column){
	list.unshift(drawStar(column));
	list.push(drawStar(column));
	return list;
}

pattern.createEmptyRectangle = function(row, column){
	if(row<2){
		return pattern.fillRectangle(row, column);
	}
	var list = Array.apply(null, Array(row-2));
	var newList =  list.map(function(element){
		return drawGaps(column);
	});
	return withFirstAndLast(newList, column);
};

module.exports = pattern;