function WebChat() {
	this._chatQueue = [];
	this._loginedUser = null;
};


WebChat.prototype = {


	send : function (sMsg) {
		this._chatQueue.push(sMsg);
	},

	receive: function(){
		return this._chatQueue;
	},

	login: function(sUser){
		this._loginedUser = sUser;
	},
	getMyInfo:function(){
		return this._loginedUser;
	}


};