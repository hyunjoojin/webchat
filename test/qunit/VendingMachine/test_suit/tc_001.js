
$(function() {
	// body...

var oVendingMachine = null;

QUnit.module('VendingMachine',{
	setup : function() {
		oVendingMachine = new VendingMachine();
		oVendingMachine.supply({
	        "Coke": 1,
	        "Sprite" : 1,
	        "Orange Juice" : 1,
	        "Apple Juice" : 1,
	        "Milk":0
	    });
	},
	teardown : function(){
		oVendingMachine = null;	
	}
});

QUnit.test('여러 음료중에서 원하는 음료를 뽑을 수 있다.', function() {
	//given
	
	//when
	var sDrink1= oVendingMachine.buy("Coke");
	var sDrink2= oVendingMachine.buy("Sprite");
	var sDrink3= oVendingMachine.buy("Orange Juice");
	var sDrink4= oVendingMachine.buy("Apple Juice");

	//then
	equal(sDrink1, "Coke","sDrink === Coke");
	equal(sDrink2, "Sprite","sDrink === Sprite");
	equal(sDrink3, "Orange Juice","sDrink === Orange Juice");
	equal(sDrink4, "Apple Juice","sDrink === Apple Juice");

	
});

QUnit.test('재고가 있는 음료만  뽑을 수 있다.', function() {
	//given
	
	//when
	var sDrink1= oVendingMachine.buy("NotExsitingDrink");
	var sDrink2= oVendingMachine.buy("Milk");

	//then
	notEqual(sDrink1, "NotExsitingDrink","NotExsitingDrink is not service");
	notEqual(sDrink2, "Milk","Milk is not service");

	
});

test("재고만큼 음료를 구매할 수 있다.", function(assert){
	    // given
	
	    // when
	    var sDrink1 = oVendingMachine.buy("Coke");
	    var sDrink2 = oVendingMachine.buy("Coke");
	    var sDrink3 = oVendingMachine.buy("Milk");
	    
	    // then
	    assert.equal(sDrink1, "Coke", '콜라 뽑기, 결과 === Coke');
	    assert.equal(sDrink2, null, '콜라 또 뽑기, 결과 === null');
	    assert.equal(sDrink3, null, '재고 없는  Milk 뽑기, 결과 === null');
});
 

 test('동전을 여러번 넣을 수 있다.', function(assert) {
 	//given

 	//when
 	oVendingMachine.insertCoin(500);
 	oVendingMachine.insertCoin(100);

 	//then
 	assert.equal(oVendingMachine.balance(), 600, " insertCoin 500 and 100  === balance(600)");
 });

 test('동전을 넣은 만큼만 음료를 구매할 수 있다.(모든 음료는 500원 가정)', function(assert) {
 	//음료의 가격 요구사항이 아직 없으므로  500원으로 가정

 	//given 	
 	oVendingMachine.insertCoin(500);
 	oVendingMachine.insertCoin(100);

 	oVendingMachine.supply({"Coke":999});

 	//when
 	var sDrink1 = oVendingMachine.buy("Coke");
	var sDrink2 = oVendingMachine.buy("Coke");

 	//then
 	assert.equal(sDrink1, "Coke", " insertCoin 500 and 100 / 첫번째 콜라를 두번 뽑음 (모든 음료는 500원 고정) === 콜라가 나옴 ");
 	assert.equal(sDrink2, null, " 두번째 콜라를 뽑음 (모든 음료는 500원 고정) === 콜라가 나오지 않음(잔액부족)");
 	assert.equal(oVendingMachine.balance(), 100, " 잔액 === 100");
 });


});