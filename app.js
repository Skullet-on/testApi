const express = require('express');

const users = require('./routes/users');
const airlines = require('./routes/airlines');
const flights = require('./routes/flights');

const app = express();

app.use('/users', users);
app.use('/airlines', airlines);
app.use('/flights', flights);

app.get('/', function(req, res) {
	res.send('Hello World! 111');
});

app.listen(3000, function(){
	console.log('App listening on port 3000')
});
