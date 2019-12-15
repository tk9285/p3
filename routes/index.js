const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
const authenticate = require("./../helpers")

router.get('/', (req, res) => res.send('This is root!'))

router.post('/users', controllers.createUser)
router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)
router.get('/users/:id/favorites', controllers.getFavoritesByUser)
router.post('/users/:id/favorites', controllers.postFavoritesByUser)
router.delete('/users/:id/favorites/:gameId', controllers.deleteFavoritesByUser)

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)


router.post('/games', controllers.createGame)
router.get('/games', controllers.getAllGames)
router.get('/games/:id', controllers.getGameById)
router.put('/games/:id', controllers.updateGame)
router.delete('/games/:id', controllers.deleteGame)

router.post('/categories', controllers.createCategory)
router.get('/categories', controllers.getAllCategories)
router.get('/categories/:id', controllers.getCategoryById)
router.put('/categories/:id', controllers.updateCategory)
router.delete('/categories/:id', controllers.deleteCategory)



module.exports = router;