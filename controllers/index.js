const { User, Favorite, Game, Category } = require('../models');
const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
	try {
		console.log(req.body)
		const { username, email, password } = req.body
		const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
		const user = await User.create({
			username,
			email,
			password_digest
		})
		const payload = {
			id: user.id,
			username: user.username,
			email: user.email
		}

		const token = jwt.sign(payload, TOKEN_KEY)
		return res.status(201).json({ user, token })
	} catch (error) {
		console.log(
			'You made it to the signUp controller, but there was an error :('
        )
        throw error
		// return res.status(400).json({ error: error.message })
	}
}

const signIn = async (req, res) => {
	try {
		console.log(req.body)
		const { username, password } = req.body
		const user = await User.findOne({
			where: {
				username
			}
		})
		if (await bcrypt.compare(password, user.dataValues.password_digest)) {
			const payload = {
				id: user.id,
				username: user.username,
				email: user.email
			}

			const token = jwt.sign(payload, TOKEN_KEY)
			return res.status(201).json({ user, token })
		} else {
			res.status(401).send('Invalid Credentials')
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [
                {
                    model: Favorite
                }
            ]
        });
        return res.status(200).json({ users });
    } catch (error) {
        console.log('getallusers controllers')
        return res.status(500).send(error.message);
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: { id: id },
            include: [
                {
                    model: Favorite
                }
            ]
        });
        if (user) {
            return res.status(200).json({ user });
        }
        return res.status(404).send('User with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            return res.status(200).json({ user: updatedUser });
        }
        throw new Error('User not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("User deleted");
        }
        throw new Error("User not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const createGame = async (req, res) => {
    try {
        const game = await Game.create(req.body);
        return res.status(201).json({
            game,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllGames = async (req, res) => {
    try {
        const games = await Game.findAll({
            // include: [
            //     {
            //         model: Favorite
            //     }
            // ]
        });
        return res.status(200).json({ games });
    } catch (error) {
        console.log('getallgames controllers')
        return res.status(500).send(error.message);
    }
}

const getGameById = async (req, res) => {
    try {
        const { id } = req.params;
        const game = await Game.findOne({
            where: { id: id },
            // include: [
            //     {
            //         model: Favorite
            //     }
            // ]
        });
        if (game) {
            return res.status(200).json({ game });
        }
        return res.status(404).send('Game with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Game.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedGame = await Game.findOne({ where: { id: id } });
            return res.status(200).json({ game: updatedGame });
        }
        throw new Error('Game not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Game.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Game deleted");
        }
        throw new Error("Game not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll({
            include: [
                {
                    model: Game
                }
            ]
        });
        return res.status(200).json({ categories });
    } catch (error) {
        console.log('getallcategories controllers')
        return res.status(500).send(error.message);
  
    }
};

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findOne({
            where: { id: id },
            include: [
                {
                    model: Game
                }
            ]
        });
        if (category) {
            return res.status(200).json({ category });
        }
        return res.status(404).send('Category with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(201).json({
            category,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Category.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedCategory = await Category.findOne({ where: { id: id } });
            return res.status(200).json({ category: updatedCategory });
        }
        throw new Error('Category not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Category.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(204).send("Category deleted");
        }
        throw new Error("Category not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const getFavoritesByUser = async (req, res) => {
    console.log(req.body)
    try {
        
        const { id } = req.params
        const favs = await Favorite.findAll({
            where: { userId: id }
        });
        
        return res.status(201).json({ favs });
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// const postFavoritesByUser = async (req, res) => {
//     try {
        
//         // const { id } = req.params
//         console.log(req.body)
//         const favs = await Favorite.create(req.body);
    
//         return res.status(201).json({ favs });
        
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

// const postFavoritesByUser = async (req, res) => {
//     try {
//         console.log("BODY: ", req.body)
//         const userId = parseInt(req.params.id)
//         const gameId = parseInt(req.body.gameId)
//         console.log("userId:", userId, "gameId", gameId)
//         const favs = await Favorite.create({
//             userId ,
//             gameId
//         });
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

const postFavoritesByUser = async (req, res) => {
    try {
        
        // const { id } = req.params
        console.log(req.body, req.params.id)
        const favs = await Favorite.create({userId:req.params.id, gameId:req.body.gameId});
    
        return res.status(201).json({ favs });
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteFavoritesByUser = async (req, res) => {
    try {
        console.log(req)
        const { gameId } = req.params;
        const deleted = await Favorite.destroy({
            where: { gameId: gameId }
        });
        if (deleted) {
            return res.status(204).send("Favorite deleted");
        }
        throw new Error("Favorite not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

// const getGamesByCategory = async (req, res) => {
//     try {
        
//         const { id } = req.params
//         const gameCategory = await Game.findAll({
//             where: { gameId: id }
//         });
        
//         return res.status(201).json({ gameCategory });
        
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const getFavoritesByUser = async (req, res) => {
//     try {
        
//         const { id } = req.params
//         const favs = await Favorite.findAll({
//             where: { userId: id }
//         });
        
//         return res.status(201).json({ favs });
        
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// };

// const getAllGames = async (req, res) => {
//     try {
//         const games = await Game.findAll({
//             // include: [
//             //     {
//             //         model: Favorite
//             //     }
//             // ]
//         });
//         return res.status(200).json({ games });
//     } catch (error) {
//         console.log('getallgames controllers')
//         return res.status(500).send(error.message);
//     }
// }


// const createItem = async (req, res) => {
//     try {
//       const user = await User.findOne({ where: { id: req.params.user_id } })
//       const item = await Item.create(req.body)
//       await item.setUser(user)
//       return res.status(201).json({
//         item
//       })
//     } catch (error) {
//       return res.status(500).json({ error: error.message })
//     }
//   }




module.exports = {
    signUp,
    signIn,
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    createGame,
    getAllGames,
    getGameById,
    updateGame,
    deleteGame,
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getFavoritesByUser,
    postFavoritesByUser,
    deleteFavoritesByUser
}

