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

  edit (categoryId) {
    CategoryData
      .edit(categoryId)
      .then(data => this.emit(this.eventTypes.CATEGORY_EDITED, data))
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
        this.edit(action.categoryId)
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
  CATEGORY_EDITED: 'category_edited'
}

dispatcher.register(categoryStore.handleAction.bind(categoryStore))

export default categoryStore
