var mongoose = require('mongoose');

var chatSchema = mongoose.Schema({

    chat: {type: 'String'},
    timeStamp: {type: 'Date'}


});

module.exports = mongoose.model('Chats', chatSchema);