import Data from './Data'
const baseUrl = 'products'

class ProductData {
  static create(product) {
    return Data.post(`${baseUrl}/add`, product, true)
  }
  static all(page) {
    page = page || 1
    return Data.get(`${baseUrl}/all?page=${page}`)
  }
  static getById(id) {
    return Data.get(`${baseUrl}/details/${id}`, true)
  }
  static createComment(id, comment) {
    let message = {
      id: id,
      message: comment
    }
    return Data.post(`${baseUrl}/details/${id}/comments/create`, message, true)
  }
  static getAllComments(id){
    return Data.get(`${baseUrl}/details/${id}/comments/`, id, true)
  }
  static deleteProduct(id) {
    return Data.post(`${baseUrl}/delete/${id}`)
  }
}

export default ProductData