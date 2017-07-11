import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SideBar from './SideBar'
import CreateProductPage from './CreateProductPage'
import ListProductsPage from './ListProductsPage'
import CreateCategoryPage from '../categories/CreateCategoryPage'
import ListCategoriesPage from '../categories/ListCategoriesPage'
import ListAdminThreads from './ListAdminThreads'
import ListTestimonialsPage from '../testimonials/ListTestimonialsPage'

class AdminConsole extends Component {

  showProductsAdd() {
    ReactDOM.render(
        <CreateProductPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  showProductsEdit() {
    ReactDOM.render(
        <ListProductsPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  showCategoriesAdd() {
    ReactDOM.render(
        <CreateCategoryPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  showListCategories () {
    ReactDOM.render(
        <ListCategoriesPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  showAllThreads() {
    ReactDOM.render(
        <ListAdminThreads history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0])
  }
  
  showListTestimonials () {
    ReactDOM.render(
        <ListTestimonialsPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  render () {
    return (
      <div>
        <SideBar
          productsAdd={this.showProductsAdd.bind(this)}
          productsEdit={this.showProductsEdit.bind(this)}
          categoriesAdd={this.showCategoriesAdd.bind(this)}
          categoriesEdit={this.showListCategories.bind(this)}
          userThreads={this.showAllThreads.bind(this)}
          testimonialsEdit={this.showListTestimonials.bind(this)}
          userPermissions={this.showProductsAdd.bind(this)}
        />
        <div className="content-holder"></div>
      </div>
    )
  }
}

export default AdminConsole