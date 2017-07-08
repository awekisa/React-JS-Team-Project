import React, { Component } from 'react'
import CreateProductForm from './CreateProductForm'
import FormHelpers from '../common/FormHelpers'
import productActions from '../../actions/ProductActions'
import categoryActions from '../../actions/CategoryActions.js'
import productStore from '../../stores/ProductStore'
import categoryStore from '../../stores/CategoryStore'
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
      categories: [],
      error: ''
    }

    this.handleProductCreation = this.handleProductCreation.bind(this)
    this.handleCategoriesFetching = this.handleCategoriesFetching.bind(this)

    productStore.on(
      productStore.eventTypes.PRODUCT_CREATED,
      this.handleProductCreation
    )

    categoryStore.on(categoryStore.eventTypes.CATEGORIES_FETCHED, this.handleCategoriesFetching)
  }

  componentWillMount() {
    if(!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

  componentDidMount () {
    categoryActions.all()
  }

  componentWillUnmount() {
    productStore.removeListener(
      productStore.eventTypes.PRODUCT_CREATED,
      this.handleProductCreation
    )
    categoryStore.removeListener(
      categoryStore.eventTypes.CATEGORIES_FETCHED,
      this.handleCategoriesFetching
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

  handleCategoriesFetching (data) {
    if (!data) {
      let firstError = FormHelpers.getFirstError(data)

      this.setState({
        error: firstError
      })
    } else {
      this.setState({
        categories: data
      })
    }
  }

  handleProductChange(event) {
    FormHelpers.handleFormChange.bind(this)(event, 'product')
  }

  handleSelectChange (event) {
    let product = this.state.product
    product.category = event.target.value
    this.setState({
      product: product
    })
  }

  handleProductForm(event) {
    event.preventDefault()
    productActions.create(this.state.product)
  }

  render() {
    let categories = this.state.categories.map((c, i) => {
      return <option key={i} value={c}>{c}</option>
    })
    return(
      <div>
        <h1>Add a product</h1>
        <CreateProductForm
          product={this.state.product}
          categories={categories}
          error={this.state.error}
          onChange={this.handleProductChange.bind(this)}
          onSelectChange={this.handleSelectChange.bind(this)}
          onSave={this.handleProductForm.bind(this)}
        />
      </div>
    )
  }
}

export default CreateProductPage