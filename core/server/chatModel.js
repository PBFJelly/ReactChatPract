var mongoose = require('mongoose');

var chatSchema = mongoose.Schema({

    message: {type: 'String'},
    timeStamp: {type: 'Date'}


});

module.exports = mongoose.model('Chats', chatSchema);