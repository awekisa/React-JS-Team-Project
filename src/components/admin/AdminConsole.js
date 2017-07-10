import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SideBar from './SideBar'
import CreateProductPage from './CreateProductPage'
import EditProductPage from './EditProductPage'
import CreateCategoryPage from '../categories/CreateCategoryPage'
import ListCategoriesPage from '../categories/ListCategoriesPage'

class AdminConsole extends Component {

  showProductsAdd() {
    ReactDOM.render(
        <CreateProductPage />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  showProductsEdit() {
    ReactDOM.render(
        <EditProductPage />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  showCategoriesAdd() {
    ReactDOM.render(
        <CreateCategoryPage />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  showCategoriesEdit() {
    ReactDOM.render(
        <ListCategoriesPage />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  render() {
    return (
      <div>
        <SideBar
          productsAdd={this.showProductsAdd.bind(this)}
          productsEdit={this.showProductsEdit.bind(this)}
          categoriesAdd={this.showCategoriesAdd.bind(this)}
          categoriesEdit={this.showCategoriesEdit.bind(this)}
          userPermissions={this.showProductsAdd.bind(this)}
        />
        <div className="content-holder"></div>
      </div>
    )
  }
}

export default AdminConsole