import React, { Component } from 'react'
import CategoryForm from './CategoryForm'
import categoryActions from '../../actions/CategoryActions'
import categoryStore from '../../stores/CategoryStore'
import toastr from 'toastr'
import ReactDOM from 'react-dom'
import ListCategoriesPage from './ListCategoriesPage'

class EditCategoryPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      category: this.props.name,
      error: ''
    }

    this.handleCategoryEdited = this.handleCategoryEdited.bind(this)

    categoryStore.on(
      categoryStore.eventTypes.CATEGORY_EDITED,
      this.handleCategoryEdited
    )
  }

  componentDidMount () {
    this.setState({category: this.props.name})
  }

  componentWillUnmount () {
    categoryStore.removeListener(
      categoryStore.eventTypes.CATEGORY_EDITED,
      this.handleCategoryEdited
    )
  }

  handleCategoryEdited (data) {
    toastr.success('Category edited.')
    ReactDOM.render(
        <ListCategoriesPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
      )
  }

  handleCategoryChange (event) {
    let categoryName = event.target.value
    this.setState({ category: categoryName })
  }

  handleCategoryForm (event) {
    const category = {
      name: this.state.category
    }
    event.preventDefault()
    categoryActions.edit(this.props.categoryId, category)
  }

  render () {
    return (
      <div>
        <h1>Edit Category</h1>
        <CategoryForm
          category={this.state.category}
          error={this.state.error}
          onChange={this.handleCategoryChange.bind(this)}
          onSave={this.handleCategoryForm.bind(this)}
        />
      </div>
    )
  }
}

export default EditCategoryPage
