const expect = require('expect');

const utils = require('./utils');

describe ('Utils', () => {

	describe('#add', () => {
		// 'it' is function defined by mocha 
		it('should add two numbers', () => {
			var result = utils.add(33, 11);

			expect(result).toBe(44).toBeA('number');

			// if(result!== 44) {
			// 	throw new Error(`Expected 44, but got ${result}`);
			// }
		});
	});
	

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		})
	})

	it('should square the number', () => {
		var result = utils.square(10);

		expect(result).toBe(100).toBeA('number');

		// if(result !== 100) {
		// 	throw new Error(`Expected 100, but got ${result}`);
		// }
	});

	it('shold asynce square a number', (done) => {
		utils.asyncSquare(5, (square) => {
			expect(square).toBe(25).toBeA('number');
			done();
		})
	})
});



// should verify first and last names are set
// assert it includes first name and last name with proper values
it('should set firstName and lastName', () => {
	var user = {location: 'San Francisco', age: 20};
	var result = utils.setName(user, 'Kevin Loi');

	// expect(user).toEqual(result);
	expect(result).toInclude({
		firstName: 'Kevin', 
		lastName: 'Loi'
	})
})

// it('should expect some values', () => {
// 	// expect(12).toNotBe(12);
// 	// expect({name: 'Kevin'}).toEqual({name: 'Kevin'});
// 	expect({
// 		name: 'Kevin',
// 		age: 20,
// 		location: 'Millbrae'
// 	}).toInclude({
// 		age: 20
// 	})
// });