import React, { Component } from 'react'
import EditCategoriesTable from './EditCategoriesTable'
import categoryActions from '../../actions/CategoryActions'
import categoryStore from '../../stores/CategoryStore'

class ListCategoriesPage extends Component {
  constructor (props) {
    super(props)

    const page = 1

    this.state = {
      categories: [],
      page: page
    }

    this.handleCategoriesFetching = this.handleCategoriesFetching.bind(this)

    categoryStore.on(categoryStore.eventTypes.CATEGORIES_FETCHED, this.handleCategoriesFetching)
  }

  handleCategoriesFetching (data) {
    this.setState({
      categories: data
    })
  }

  componentWillUnmount () {
    categoryStore.removeListener(categoryStore.eventTypes.CATEGORIES_FETCHED, this.handleCategoriesFetching)
  }

  componentDidMount () {
    categoryActions.all(this.state.page)
  }

  deleteCategory (event) {
    event.preventDefault()
    let categoryId = event.target.name
    categoryActions.deleteCategory(categoryId)
  }

  render () {
    return (
      <EditCategoriesTable
        categories={this.state.categories} />
    )
  }
}

export default ListCategoriesPage
