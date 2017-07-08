import React, { Component } from 'react'
import EditProductForm from './EditProductForm'
import FormHelpers from '../common/FormHelpers'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import Auth from '../users/Auth'

class EditProductItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {
        title: '',
        image: '',
        description: '',
        price: 0,
        category: ''
      },
      error: ''
    }

    productStore.on(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
  }

  componentWillUnmount() {
    productStore.removeListener(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
  }

  handleProductDetail(data) {
    this.setState({
      product: data
    })
  }

  componentWillMount() {
    if(!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

  componentDidMount() {
    productActions.getById(this.props.productId)
  }

  handleProductChange(event) {
    FormHelpers.handleFormChange.bind(this)(event, 'product')
  }

  handleProductEdit() {

  }

  render() {
    return (
      <div>
        <EditProductForm 
          product={this.state.product}
          error={this.state.error}
          onChange={this.handleProductChange.bind(this)}
          onSave={this.handleProductEdit.bind(this)}
        />
      </div>
    )
  }
}

export default EditProductItem