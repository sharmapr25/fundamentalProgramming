var pattern = {};
var isEven = require('./basicFunctions.js').isEven;

var drawList = function(length){
	return Array.apply(null, Array(length));
}

var draw = function(times,character){
	if(times == 1)
		return character;
	return draw(times-1,character)+character;
};

var drawStar = function(times){
	return draw(times,'*');
};


pattern.fillRectangle = function(row, column){
	var list =  drawList(row);
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
	var list = drawList(row-2);
	var newList =  list.map(function(element){
		return drawGaps(column);
	});
	return withFirstAndLast(newList, column);
};

var cycleOf = function(patternList){	
	var i = -1;
	var len = patternList.length;
	return function(columns){
		i = (i+1)%len;
		return draw(columns, patternList[i]);
	};
}

pattern.drawPattern = function(rows, columns,patternList){
	var list = [];
	var cycle = cycleOf(patternList);
	for (var i = 0; i < rows; i++) {
		list.push(cycle(columns));
	};
	return list;
};
module.exports = pattern;