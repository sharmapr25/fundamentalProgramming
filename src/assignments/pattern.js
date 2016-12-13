var pattern = {};

var drawStar = function(times){
	if(times == 1)
		return '*';
	return drawStar(times-1)+'*';
};

pattern.fillRectangle = function(row, column){
	var list = Array.apply(null, Array(row));
	return list.map(function(element){
		return drawStar(column);
	});
};

module.exports = pattern;