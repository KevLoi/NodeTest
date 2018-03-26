var db = require ('./db.js');

module.exports.handleSignup = (email, password) => {
	// Check if email already exists
	// Save user
	db.saveUser({email, password})
	// Send welcome email
}