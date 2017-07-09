import Data from './Data'
const baseUrl = 'categories'

class CategoryData {
  static create (category) {
    return Data.post(`${baseUrl}/add`, category, true)
  }
  static all () {
    return Data.get(`${baseUrl}/all`)
  }
  static edit (categoryId, category) {
    return Data.post(`${baseUrl}/edit/${categoryId}`, category, true)
  }
  static delete (categoryId) {
    return Data.post(`${baseUrl}/delete/${categoryId}`)
  }
}

export default CategoryData
