import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SideBar from './SideBar'
import CreateProductPage from './CreateProductPage'

class AdminConsole extends Component {

  showProductsAdd() {
    ReactDOM.render(
        <CreateProductPage />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  render() {
    return (
      <div>
        <SideBar
          productsAdd={this.showProductsAdd.bind(this)}
          productsEdit={this.showProductsAdd.bind(this)}
          productsDelete={this.showProductsAdd.bind(this)}
          userPermissions={this.showProductsAdd.bind(this)}
        />
        <div className="content-holder"></div>
      </div>
    )
  }
}

export default AdminConsole