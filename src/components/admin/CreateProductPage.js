import React, { Component } from 'react'
import CreateProductForm from './CreateProductForm'
import FormHelpers from '../common/FormHelpers'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import Auth from '../users/Auth'
import toastr from 'toastr'

class CreateProductPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {
        title: 'Another brick in the wall',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brick_wall_close-up_view.jpg/220px-Brick_wall_close-up_view.jpg',
        description: 'a cool song',
        price: 15,
        category: 'Bricks'
      },
      error: ''
    }

    this.handleProductCreation = this.handleProductCreation.bind(this)

    productStore.on(
      productStore.eventTypes.PRODUCT_CREATED,
      this.handleProductCreation
    )
  }

  componentWillMount() {
    if(!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

  componentWillUnmount() {
    productStore.removeListener(
      productStore.eventTypes.PRODUCT_CREATED,
      this.handleProductCreation
    )
  }

  handleProductCreation(data) {
    if(!data.success) {
      let firstError = FormHelpers.getFirstError(data)
       
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
    }
  }

  handleProductChange(event) {
    FormHelpers.handleFormChange.bind(this)(event, 'product')
  }

  handleProductForm(event) {
    event.preventDefault()
    productActions.create(this.state.product)
  }

  render() {
    return(
      <div>
        <h1>Add a product</h1>
        <CreateProductForm
          product={this.state.product}
          error={this.state.error}
          onChange={this.handleProductChange.bind(this)}
          onSave={this.handleProductForm.bind(this)}
        />
      </div>
    )
  }
}

export default CreateProductPage