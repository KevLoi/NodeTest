const express = require('express');

var app = express();

app.get('/', (request, response) => {
	response.status(404).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

// GET /users
// Give users a name property and age property
app.get('/users', (request, response ) => {
	response.send([{
		name: 'Kevin',
		age: 20
	}, {
		name: 'Justin',
		age: 26
	}, {
		name: 'Mireya',
		age: 20
	}]);
});

app.listen(3000);
module.exports.app = app;