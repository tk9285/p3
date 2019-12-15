import api from './apiConfig'

export const getGames = async () => {
  try {
    const resp = await api.get('/games')
    return resp.data.items
  } catch (error) {
    throw error
  }
}

export const createGame = async id => {
  try {
    const resp = await api.post(`/games/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const updateItem = async (id, item) => {
  try {
    const resp = await api.put(`/games/${id}`, item)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const deleteGame = async id => {
  try {
    const resp = await api.delete(`/games/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const getGameById = async id => {
  try {
    const resp = await api.get(`/games/${id}`)
    return resp.data
  } catch (error) {
    throw error
  }
}

export const getUserFavoritesById = async id => {
  try {
    const resp = await api.get(`/users/${id}/favorites`)
    return resp.data.favs
  } catch (error) {
    throw error 
  }
}

export const getAllCategories = async () => {
  try {
    const resp = await api.get(`/categories`)
    console.log(resp.data)
    return resp.data
  } catch (error) {
    throw error 
  }
}

export const getGamesByCategory = async (catId) => {
  try {
    const resp = await api.get(`/categories/${catId}`)
    console.log(resp.data)
    return resp.data
  } catch (error) {
    console.error(error)
  }
}
