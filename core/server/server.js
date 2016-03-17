var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	path = require('path'),
	chatCtrl = require('./chatCtrl');

var app = express();

app.use(bodyParser.json());
app.use(cors()); //resolves header

app.use(express.static(path.resolve('public/')));

app.get('/getChats', chatCtrl.readAllChats);
app.post('/getChats', chatCtrl.create);

var mongoUri = 'mongodb://localhost/reactchatpract';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
	console.log('connected to MongoDB');
});

app.get(/^(?!.*(images))/, function (req, res) {
	res.sendFile(path.resolve("public/index.html"));
});

app.listen(8000, function() {
	console.log('listening on port: 8000');
});