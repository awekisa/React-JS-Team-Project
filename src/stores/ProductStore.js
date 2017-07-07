import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import ProductData from '../data/ProductData'
import productActions from '../actions/ProductActions'

class ProductStore extends EventEmitter {

  create(product) {
    ProductData
      .create(product)
      .then(data => this.emit(this.eventTypes.PRODUCT_CREATED, data))
  }

  all(page) {
    page = page || 1

    ProductData
      .all(page)
      .then(data => this.emit(this.eventTypes.PRODUCTS_FETCHED, data))
  }

  getById(id) {
    ProductData
      .getById(id)
      .then(data => this.emit(this.eventTypes.PRODUCT_DETAIL_FETCHED, data))
  }

  createComment(id, comment) {
    ProductData
      .createComment(id, comment)
      .then(data => this.emit(this.eventTypes.COMMENT_CREATED, data))
  }

  getAllComments(id) {
    ProductData
      .getAllComments(id)
      .then(data => this.emit(this.eventTypes.COMMENTS_FETCHED, data))
  }

  handleAction(action) {
    switch(action.type) {
      case productActions.types.CREATE_PRODUCT: {
        this.create(action.product)
        break
      }
      case productActions.types.ALL_PRODUCTS: {
        this.all(action.page)
        break
      }
      case productActions.types.DETAIL_PRODUCT: {
        this.getById(action.id)
        break
      }
      case productActions.types.CREATE_COMMENT: {
        this.createComment(action.id, action.comment)
        break
      }
      case productActions.types.GET_ALL_COMMENTS: {
        this.getAllComments(action.id)
        break
      }
      default: break
    }
  }
}

let productStore = new ProductStore()

productStore.eventTypes = {
  PRODUCT_CREATED: 'product_created',
  PRODUCTS_FETCHED: 'products_fetched',
  PRODUCT_DETAIL_FETCHED: 'product_detail_fetched',
  COMMENT_CREATED: 'comment_created',
  COMMENTS_FETCHED: 'comments_fetched'
}

dispatcher.register(productStore.handleAction.bind(productStore))

export default productStore
