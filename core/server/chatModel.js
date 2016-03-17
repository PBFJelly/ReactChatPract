var mongoose = require('mongoose');

var chatSchema = mongoose.Schema({

    chat: {type: string},
    timeStamp: {type: Date}


});

module.exports = mongoose.model('Chats', chatSchema);