import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SideBar from './SideBar'
import CreateProductPage from './CreateProductPage'
import EditProductPage from './EditProductPage'

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

  render() {
    return (
      <div>
        <SideBar
          productsAdd={this.showProductsAdd.bind(this)}
          productsEdit={this.showProductsEdit.bind(this)}
          userPermissions={this.showProductsAdd.bind(this)}
        />
        <div className="content-holder"></div>
      </div>
    )
  }
}

export default AdminConsole