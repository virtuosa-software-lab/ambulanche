import { conn } from '../req.conf'

const saveCardapio = async user => {
    try {
      const body = JSON.stringify({ ...user })
      const response = await conn.post('api/cardapios/', body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const getCardapio = async (id_restaurante) => {
    try {
      const response = await conn.get(`api/cardapios/${id_restaurante}/restaurante`)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const editCardapio = async user => {
    try {
      const body = JSON.stringify({ ...user })
      const response = await conn.put(`api/usuarios/${user.id}`, body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}


  

export default {
    saveCardapio,
    getCardapio,
    editCardapio
}