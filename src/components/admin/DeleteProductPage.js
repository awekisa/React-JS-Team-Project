import React, { Component } from 'react'
import DeleteProductForm from './DeleteProductForm'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import toastr from 'toastr'
import ReactDOM from 'react-dom'
import ListProductsPage from './ListProductsPage'

class DeleteProductPage extends Component {
  constructor (props) {
    super(props)

    this.handleProductDeletion = this.handleProductDeletion.bind(this)

    productStore.on(productStore.eventTypes.PRODUCT_DELETED, this.handleProductDeletion)
  }

  componentWillUnmount () {
    productStore.removeListener(productStore.eventTypes.PRODUCT_DELETED, this.handleProductDeletion)
  }

  handleProductDeletion (data) {
    toastr.success('Product deleted successfully')
    ReactDOM.render(
      <ListProductsPage history={this.props.history} />,
      document.getElementsByClassName('content-holder')[0]
    )
  }

  handleCategoryForm (event) {
    event.preventDefault()
    productActions.deleteProduct(this.props.productId)
  }

  render () {
    return (
      <div>
        <h1>Delete product</h1>
        <DeleteProductForm
          title={this.props.title}
          image={this.props.image}
          description={this.props.description}
          price={this.props.price}
          category={this.props.category}
          onSave={this.handleCategoryForm.bind(this)}
          disabled={'disabled'} />
      </div>
    )
  }
}

export default DeleteProductPage
