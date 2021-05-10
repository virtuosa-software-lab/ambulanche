import { conn } from '../req.conf'

const saveRest = async user => {
    try {
      const body = JSON.stringify({ ...user })
      const response = await conn.post('/api/restaurantes/', body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const getRests = async () => {
    try {
      const response = await conn.get('/api/restaurantes')
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const editRest = async user => {
    try {
      const body = JSON.stringify({ ...user })
      const response = await conn.put(`/api/restaurantes/${user.id}`, body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

export default {
    saveRest,
    getRests,
    editRest
}