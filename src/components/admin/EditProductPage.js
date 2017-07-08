import React, { Component } from 'react'
import EditProductTable from './EditProductTable'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'

class EditProductPage extends Component {
  constructor(props) {
    super(props)

    const page = 1

    this.state = {
      products: [],
      page: page
    }

    this.handleProductsFetching = this.handleProductsFetching.bind(this)

    productStore.on(productStore.eventTypes.PRODUCTS_FETCHED, this.handleProductsFetching)
  }

  handleProductsFetching(data) {
    this.setState({
      products: data
    })
  }

  componentWillUnmount() {
    productStore.removeListener(productStore.eventTypes.PRODUCTS_FETCHED, this.handleProductsFetching)
  }

  componentDidMount() {
    productActions.all(this.state.page)
  }

  editProduct() {
    
  }

  deleteProduct(event) {
    event.preventDefault()
    let productId = event.target.name
    console.log(productId)
  }

  render(){

    return (
      <EditProductTable
      products={this.state.products}
      editProduct={this.editProduct.bind(this)}
      deleteProduct={this.deleteProduct.bind(this)}/>
    )
  }
}

export default EditProductPage