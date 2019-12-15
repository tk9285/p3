module.exports = (req, res, next) => {
	const jwt = require('jsonwebtoken')
	const TOKEN_KEY = 'areallylonggoodkey'
	try {
		const token = req.headers.authorization.split(' ')[1]
		const data = jwt.verify(token, TOKEN_KEY)
		// res.locals.user = data Used for assigning an item to a user, we won't be using this for this excercise
		next()
	} catch (error) {
		console.log(error)
		res.status(403).send('Unauthorized')
	}
}