import { conn } from '../req.conf'

const saveProduto = async (user, idCardapio) => {
    try {
      const body = JSON.stringify({ ...user })
      const response = await conn.post(`api/produtos/${idCardapio}`, body)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const getProdutos = async (id_cardapio) => {
    try {
      const response = await conn.get(`api/produtos/${id_cardapio}/cardapio`)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}

const excluirProduto = async (id) => {
    try {
      const response = await conn.delete(`api/produtos/${id}`)
      return response.data
    } catch (error) {
      return Promise.reject(error)
    }
}


  

export default {
    saveProduto,
    getProdutos,
    excluirProduto
}