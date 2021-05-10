import { conn } from '../req.conf'

const saveUser = async user => {
    try {
      const body = JSON.stringify({ ...user })
      const response = await conn.post('api/usuarios/', body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const getUsers = async () => {
    try {
      const response = await conn.get('api/usuarios')
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const editUser = async user => {
    try {
      const body = JSON.stringify({ ...user })
      const response = await conn.put(`api/usuarios/${user.id}`, body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}


  

export default {
    saveUser,
    getUsers,
    editUser
}