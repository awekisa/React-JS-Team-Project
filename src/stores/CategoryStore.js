import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import CategoryData from '../data/CategoryData'
import categoryActions from '../actions/CategoryActions'

class CategoryStore extends EventEmitter {
  create (category) {
    CategoryData
      .create(category)
      .then(data => this.emit(this.eventTypes.CATEGORY_CREATED, data))
  }

  all () {
    CategoryData
      .all()
      .then(data => this.emit(this.eventTypes.CATEGORIES_FETCHED, data))
  }

  edit (categoryId, category) {
    CategoryData
      .edit(categoryId, category)
      .then(data => this.emit(this.eventTypes.CATEGORY_EDITED, data))
  }

  delete (categoryId) {
    CategoryData
      .delete(categoryId)
      .then(() => this.emit(this.eventTypes.CATEGORY_DELETED))
  }

  handleAction (action) {
    switch (action.type) {
      case categoryActions.types.CREATE_CATEGORY: {
        this.create(action.category)
        break
      }
      case categoryActions.types.ALL_CATEGORIES: {
        this.all()
        break
      }
      case categoryActions.types.EDIT_CATEGORY: {
        this.edit(action.categoryId, action.category)
        break
      }
      case categoryActions.types.DELETE_CATEGORY: {
        this.delete(action.categoryId)
        break
      }
      default: break
    }
  }
}

let categoryStore = new CategoryStore()

categoryStore.eventTypes = {
  CATEGORY_CREATED: 'category_created',
  CATEGORIES_FETCHED: 'categories_fetched',
  CATEGORY_EDITED: 'category_edited',
  CATEGORY_DELETED: 'category_deleted'
}

dispatcher.register(categoryStore.handleAction.bind(categoryStore))

export default categoryStore
