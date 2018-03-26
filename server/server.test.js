const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {

	describe('GET /', () => {
		it('should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				.expect((response) => {
					expect(response.body).toInclude({
						error: 'Page not found.'
					});
				})
				.end(done);
		});
	});

	describe('GET /user', () => {
		// Make a new test
		// Assert 200 
		// Assert that you exist in users array toInclude
		it('should return user', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((response) => {
					expect(response.body).toInclude({
						name: 'Kevin',
						age: 20
					});
				})
				.end(done)
		});
	});

});



