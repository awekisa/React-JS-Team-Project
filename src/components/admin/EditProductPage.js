import React, { Component } from 'react'
import EditProductTable from './EditProductTable'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import EditProductItem from './EditProductItem'
import ReactDOM from 'react-dom'
import toastr from 'toastr'

class EditProductPage extends Component {
  constructor(props) {
    super(props)

    const page = 1

    this.state = {
      products: [],
      page: page
    }

    this.handleProductsFetching = this.handleProductsFetching.bind(this)
    this.handleProductDeletion = this.handleProductDeletion.bind(this)

    productStore.on(productStore.eventTypes.PRODUCTS_FETCHED, this.handleProductsFetching)
    productStore.on(productStore.eventTypes.PRODUCT_DELETED, this.handleProductDeletion)
  }

  handleProductDeletion(data) {
    toastr.success('Product deleted successfully')
  }

  handleProductsFetching(data) {
    this.setState({
      products: data
    })
  }

  componentWillUnmount() {
    productStore.removeListener(productStore.eventTypes.PRODUCTS_FETCHED, this.handleProductsFetching)
    productStore.removeListener(productStore.eventTypes.PRODUCT_DELETED, this.handleProductDeletion)
  }

  componentDidMount() {
    productActions.all(this.state.page)
  }

  editProduct(event) {
    event.preventDefault()
    let productId = event.target.name
    ReactDOM.render(
        <EditProductItem productId={productId}/>,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  deleteProduct(event) {
    event.preventDefault()
    let productId = event.target.name
    productActions.deleteProduct(productId)
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