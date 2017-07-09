import React, { Component } from 'react'
import EditProductForm from './EditProductForm'
import FormHelpers from '../common/FormHelpers'
import productActions from '../../actions/ProductActions'
import categoryActions from '../../actions/CategoryActions.js'
import productStore from '../../stores/ProductStore'
import categoryStore from '../../stores/CategoryStore'
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
      categories: [],
      error: ''
    }

    this.handleCategoriesFetching = this.handleCategoriesFetching.bind(this)

    productStore.on(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
    categoryStore.on(categoryStore.eventTypes.CATEGORIES_FETCHED, this.handleCategoriesFetching)
    
  }

  componentWillUnmount() {
    productStore.removeListener(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
        categoryStore.removeListener(
      categoryStore.eventTypes.CATEGORIES_FETCHED,
      this.handleCategoriesFetching
    )
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
    categoryActions.all()
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

    handleSelectChange (event) {
    let product = this.state.product
    product.category = event.target.value
    this.setState({
      product: product
    })
  }

  handleProductChange(event) {
    FormHelpers.handleFormChange.bind(this)(event, 'product')
  }

  handleProductEdit() {

  }

  render() {
    let categories = this.state.categories.map((c, i) => {
      return <option key={i} value={c.name}>{c.name}</option>
    })
    return (
      <div>
        <EditProductForm 
          product={this.state.product}
          categories={categories}
          error={this.state.error}
          onChange={this.handleProductChange.bind(this)}
          onSelectChange={this.handleSelectChange.bind(this)}
          onSave={this.handleProductEdit.bind(this)}
        />
      </div>
    )
  }
}

export default EditProductItem