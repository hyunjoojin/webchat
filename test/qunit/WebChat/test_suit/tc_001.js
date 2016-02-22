
$(function() {
	// body...
	const sMe = "hyunjoo";

	var oWebChat  = null;


QUnit.module('WebChat',{
	setup : function() {
		oWebChat = new WebChat();
	},
	teardown : function(){
		oWebChat = null;
	}
});

QUnit.test('대화를 보내고 받을  수 있다.', function(assert) {
	
	//given
	

	//when
	oWebChat.send("Hi");
	oWebChat.send("Hi2");

	//then
	var isEquals = angular.equals(oWebChat.receive(),  ["Hi","Hi2"]);
	assert.ok(isEquals, ' "Hi" 라고 대화 전송 , 또  "Hi2" 라고 대화전송 ==  "Hi" 와 "Hi2"를 받을 수 있다');

});


QUnit.test('로그인 할 수 있다.', function(assert) {
	
	//given
	

	//when
	oWebChat.login(sMe);

	//then
	var sCurrentUser = oWebChat.getMyInfo();

	assert.equal(sCurrentUser, sMe, ' "hyunjoo" 로 로그인 하고 현재 사용자를 조회하면 "hyunjoo"가  조회된다');
});


QUnit.test('상대방을 지정해서 대화를  할 수 있다.', function(assert) {
	
	//given
	const sother ="hongsu";

	oWebChat.login(sMe);

	var oWebChatOther = new WebChat();
	oWebChatOther.login(sother);

	//when
	oWebChat.to(oWebChatOther).send("hi");

	//then
	var smsg = oWebChatOther.receive();

	assert..equal(smsg, "hi", ' "hyunjoo" 로 로그인, hongsu로 로그인 .  hyunjoo가 hongsu에게 "hi" 를 보내면 "hongsu"는 "hi" 메세지를 수신할 수 있다');
	
});


});