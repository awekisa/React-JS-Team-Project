import React, { Component } from 'react'
import CategoryForm from './CategoryForm'
import FormHelpers from '../common/FormHelpers'
import categoryActions from '../../actions/CategoryActions'
import categoryStore from '../../stores/CategoryStore'
import Auth from '../users/Auth'
import toastr from 'toastr'
import ReactDOM from 'react-dom'
import ListCategoriesPage from './ListCategoriesPage'

class CreateCategoryPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      category: {
        name: ''
      },
      error: ''
    }

    this.handleCategoryCreation = this.handleCategoryCreation.bind(this)

    categoryStore.on(
      categoryStore.eventTypes.CATEGORY_CREATED,
      this.handleCategoryCreation
    )
  }

  componentWillMount () {
    if (!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

  componentWillUnmount () {
    categoryStore.removeListener(
      categoryStore.eventTypes.CATEGORY_CREATED,
      this.handleCategoryCreation
    )
  }

  handleCategoryCreation (data) {
    if (!data.success) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.setState({
        category: {
          name: ''
        },
        error: ''
      })
      ReactDOM.render(
        <ListCategoriesPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
      )
    }
  }

  handleCategoryChange (event) {
    const category = event.target.value
    console.log(category)
    this.setState({
      category: {
        name: category
      },
      error: ''
    }
    )
  }

  handleCategoryForm (event) {
    event.preventDefault()
    categoryActions.create(this.state.category)
  }

  render () {
    return (
      <div>
        <h1>Add Category</h1>
        <CategoryForm
          category={this.state.category.name}
          error={this.state.error}
          onChange={this.handleCategoryChange.bind(this)}
          onSave={this.handleCategoryForm.bind(this)}
        />
      </div>
    )
  }
}

export default CreateCategoryPage
