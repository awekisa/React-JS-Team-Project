import dispatcher from '../dispatcher'

const productActions = {
  types: {
    CREATE_PRODUCT: 'CREATE_PRODUCT',
    ALL_PRODUCTS: 'ALL_PRODUCTS',
    DETAIL_PRODUCT: 'DETAIL_PRODUCT',
    CREATE_COMMENT: 'CREATE_COMMENT',
    GET_ALL_COMMENTS: 'GET_ALL_COMMENTS',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    EDIT_PRODUCT: 'EDIT_PRODUCT'
  },
  create(product) {
    dispatcher.dispatch({
      type: this.types.CREATE_PRODUCT,
      product
    })
  },
  all (page) {
    page = page || 1
    dispatcher.dispatch({
      type: this.types.ALL_PRODUCTS,
      page
    })
  },
  getById(id) {
    dispatcher.dispatch({
      type: this.types.DETAIL_PRODUCT,
      id
    })
  },
  createComment(id, comment) {
    dispatcher.dispatch({
      type: this.types.CREATE_COMMENT,
      id,
      comment
    })
  },
  getAllComments(id) {
    dispatcher.dispatch({
      type: this.types.GET_ALL_COMMENTS,
      id
    })
  },
  deleteProduct(id) {
    dispatcher.dispatch({
      type: this.types.DELETE_PRODUCT,
      id
    })
  },
  editProduct(product) {
    dispatcher.dispatch({
      type: this.types.EDIT_PRODUCT,
      product
    })
  }
}

export default productActions