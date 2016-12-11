var object=function(sentence){
	var value=[];
	for(var i=0;i<sentence.length;i++){
		var a=sentence[i].split(',');
		value.push({
			name:a[0],roll_num:a[1],english:a[2],mathematics:+a[3],computer_science:+a[4]
		})
		}
	return value;
}
 
exports.highest = function(students,subject){
	var marksOfSubject = object(students);
	var subject=marksOfSubject.reduce(function(current,next){
		if(+current[subject]<+next[subject])
			return next;
		return  current;
	});
	return subject;
}
exports.lowest = function(students,subject){
	var marksOfSubject=object(students);
	var subject=marksOfSubject.reduce(function(current,next){
		if(+current[subject]>=+next[subject])
			 return next;
			return current;
	});
	return subject;
};

exports.above = function(students,subject,limit){
	var marksOfSubject=object(students);
	var subject=marksOfSubject.filter(function(current){
		return current[subject]>limit;
	})
	return subject;
};
exports.below = function(students,subject,limit){
	var marksOfSubject=object(students);
	var subject=marksOfSubject.filter(function(current){
		return current[subject]<limit;
	})
	return subject;
};
exports.phoneBook = function(students){
	return {'B':function(){	
	}}
};
exports.averageOf = function(students,subject){
	var marksOfSubject=object(students);
	var subject=marksOfSubject.reduce(function(current,next){
		if(next[subject]=='DNA'){
		return current;
		}
		return (+current)+(+next[subject]);
	},0);
	console.log(students.length,subject);
	return Math.floor(subject/students.length);
	console.log(subject);
};
