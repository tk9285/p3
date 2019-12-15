import api from './apiConfig'
import { getGameById } from './games'

export const postFavorite = async (gameId, userId) => {
    try {
      console.log(gameId, userId)
      const resp = await api.post(`/users/${userId}/favorites`, {gameId:gameId})
      const games = await getGameById(gameId)
      console.log('games',games)
      return resp.data.items
    } catch (error) {
      throw error
    }
  }

  export const getFavorites = async () => {
    try {
      const resp = await api.get('/users') ///add api
      return resp.data.items
    } catch (error) {
      throw error
    }
  }