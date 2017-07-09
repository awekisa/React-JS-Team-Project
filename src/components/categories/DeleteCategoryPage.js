import React, { Component } from 'react'
import CategoryForm from './CategoryForm'
import categoryActions from '../../actions/CategoryActions'
import categoryStore from '../../stores/CategoryStore'
import toastr from 'toastr'

class DeleteCategoryPage extends Component {
  constructor (props) {
    super(props)

    this.handleCategoryDeletion = this.handleCategoryDeletion.bind(this)

    categoryStore.on(categoryStore.eventTypes.CATEGORY_DELETED, this.handleCategoryDeletion)
  }

  componentWillUnmount () {
    categoryStore.removeListener(
      categoryStore.eventTypes.CATEGORY_DELETED,
      this.handleCategoryDeletion
    )
  }

  handleCategoryDeletion () {
    toastr.success('Category deleted!')
  }

  handleCategoryForm (event) {
    event.preventDefault()
    categoryActions.delete(this.props.categoryId)
  }

  render () {
    return (
      <div>
        <h1>Delete category</h1>
        <CategoryForm
          category={this.props.name}
          onSave={this.handleCategoryForm.bind(this)}
          disabled={'disabled'}
        />
      </div>
    )
  }
}

export default DeleteCategoryPage
