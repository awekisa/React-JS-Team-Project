import dispatcher from '../dispatcher'

const categoryActions = {
  types: {
    CREATE_CATEGORY: 'CREATE_CATEGORY',
    ALL_CATEGORIES: 'ALL_CATEGORIES',
    EDIT_CATEGORY: 'EDIT_CATEGORY',
    DELETE_CATEGORY: 'DELETE_CATEGORY'
  },
  create (category) {
    dispatcher.dispatch({
      type: this.types.CREATE_CATEGORY,
      category
    })
  },
  all () {
    dispatcher.dispatch({
      type: this.types.ALL_CATEGORIES
    })
  },
  edit (categoryId, category) {
    dispatcher.dispatch({
      type: this.types.EDIT_CATEGORY,
      categoryId,
      category
    })
  },
  delete (categoryId) {
    dispatcher.dispatch({
      type: this.types.DELETE_CATEGORY,
      categoryId
    })
  }
}

export default categoryActions
