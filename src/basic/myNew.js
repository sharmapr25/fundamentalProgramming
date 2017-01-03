var makeListOf = function(args){
	var list = [];
	for (var i = 0; i < args.length; i++) {
		list[i] = args[i];
	}
	return list;
}

var myNew = function(constructor) {
	var obj = {};
	var argsList = makeListOf(arguments);
	obj.__proto__ = constructor.prototype;
	constructor.apply(obj, argsList.slice(1));
	return obj;
}

var Calculator = function(a,b){
	this.a = a;
	this.b = b;
}

Calculator.prototype = {
	add: function(){
		return this.a+this.b;
	},
	sub: function(){
		return this.a - this.b;
	}
};

var Student = function(name, age, roll_num){
	this.name = name;
	this.age = age;
	this.roll_num = roll_num;
}

var calculator = myNew(Calculator, 3, 5);
console.log(calculator);
console.log(calculator.add());
var student = myNew(Student, 'Hari',4,2);
console.log(student);