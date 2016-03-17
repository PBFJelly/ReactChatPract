var Chat = require('./chatModel');

module.exports = {

	create: function(req, res, next) {
		var newChat = new Chat();
		newChat.timeStamp = new Date();
		newChat.message = req.body.message;
		newChat.save(function(err, result) {
			if (err) res.sendStatus(500);
			else res.send(result);
		})
	},

	readAllChats: function(req, res, next) {
		Chat.find({}, function(err, chats) {
			if (err) res.sendStatus(500);
			else res.send(chats);
		})
	}

}