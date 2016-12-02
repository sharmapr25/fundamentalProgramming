var assert = require('assert');
var my_find = require('../src/myFind');

describe('find element in an array',function(){
	it('should find the only element in a single element array',function(){
		var set = [1];
		assert.equal(my_find(set, 1),1);
	});

	it('should find given number in an array of two elements',function(){
		var setofTwoNumbers = [1,2];
		assert.equal(my_find(setofTwoNumbers,2),2);
		assert.equal(my_find(setofTwoNumbers,1),1);	
	});

	it('should find given number in a more than two elements array',function(){
		var setofNumbers = [1,2,3];
		assert.equal(my_find(setofNumbers,2),2);
		assert.equal(my_find(setofNumbers,3),3);
		assert.equal(my_find(setofNumbers,1),1);
	});

	it('should find given number in an array of more than five elements',function(){
		var setofNumbers = [1,2,4,6,8,10,5];
		assert.equal(my_find(setofNumbers, 5),5);
		assert.equal(my_find(setofNumbers,4),4);
		assert.equal(my_find(setofNumbers,10),10);
	});

	it('should give undefined if given number is not in an array',function(){
		var setofNumbers = [1,2,3,4];
		assert.equal(my_find(setofNumbers,9),undefined);
	});

	it('should give undefined for given number in an empty array',function(){
		var emptySet = [];
		assert.equal(my_find(emptySet, 4),undefined);
	});

	it('should find undefined in an empty array',function(){
		var emptySet = [];
		assert.equal(my_find(emptySet, undefined),undefined);
	});

	it('should find first occurrence element for given number in an array of two elements',function(){
		var setofTwoNumbers = [1,1];
		assert.equal(my_find(setofTwoNumbers,1),1);
	});

	it('should find first occurrence element for given number in an array',function(){
		var setofRepetitiveNumbers =  [1,2,3,3];
		assert.equal(my_find(setofRepetitiveNumbers,3),3);
		assert.equal(my_find(setofRepetitiveNumbers,2),2);
		assert.equal(my_find(setofRepetitiveNumbers, 1),1);
	});

	it('should find given number in an array of hundred elements',function(){
		var listOfHundredNumbers = [ '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'];
		assert.equal(my_find(listOfHundredNumbers,67),67);
		assert.equal(my_find(listOfHundredNumbers,23),23);
	})

})