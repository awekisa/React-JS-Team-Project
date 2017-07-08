import React, { Component } from 'react'

class SideBar extends Component {
  render() {
    return (
  <div className="nav-side-menu"><i className="fa fa-bars fa-2x toggle-btn"></i>
        <div className="menu-list">
          <ul id="menu-content" className="menu-content">
              <li>
                <a onClick={this.props.productsAdd}>
                <i className="fa fa-dashboard fa-lg"></i> Add product
                </a>
              </li>
              <li>
                <a onClick={this.props.productsEdit}>
                <i className="fa fa-gift fa-lg"></i> Edit product
                </a>
              </li>
              <li>
                <a onClick={this.props.productsDelete}>
                <i className="fa fa-gift fa-lg"></i> Delete product
                </a>
              </li> 
              <li>
                <a onClick={this.props.userPermissions}>
                <i className="fa fa-gift fa-lg"></i> Grand admin priviliges
                </a>
              </li> 
          </ul>
      </div>
  </div>
    )
  }
}

export default SideBar