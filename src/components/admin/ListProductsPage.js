import React, { Component } from 'react'
import EditProductTable from './EditProductTable'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import EditProductItem from './EditProductItem'
import ReactDOM from 'react-dom'

class ListProductsPage extends Component {
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

  handleProductsFetching (data) {
    this.setState({
      products: data
    })
  }

  componentWillUnmount () {
    productStore.removeListener(productStore.eventTypes.PRODUCTS_FETCHED, this.handleProductsFetching)
  }

  componentDidMount () {
    productActions.all(this.state.page)
  }

  editProduct (event) {
    event.preventDefault()
    let productId = event.target.name
    ReactDOM.render(
      <EditProductItem productId={productId} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  render () {
    return (
      <EditProductTable
        products={this.state.products}
        editProduct={this.editProduct.bind(this)} />
    )
  }
}

export default ListProductsPage
