import React, { Component } from 'react'
import EditProductForm from './EditProductForm'
import FormHelpers from '../common/FormHelpers'
import productActions from '../../actions/ProductActions'
import categoryActions from '../../actions/CategoryActions.js'
import productStore from '../../stores/ProductStore'
import categoryStore from '../../stores/CategoryStore'
import Auth from '../users/Auth'
import toastr from 'toastr'
import ReactDOM from 'react-dom'
import ListProductsPage from './ListProductsPage'

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
    this.handleProductDetail = this.handleProductDetail.bind(this)
    this.handleProductEdited = this.handleProductEdited.bind(this)

    productStore.on(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
    productStore.on(productStore.eventTypes.PRODUCT_EDITED, this.handleProductEdited)
    categoryStore.on(categoryStore.eventTypes.CATEGORIES_FETCHED, this.handleCategoriesFetching)
  }

  componentWillUnmount() {
    productStore.removeListener(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
    productStore.removeListener(productStore.eventTypes.PRODUCT_EDITED, this.handleProductEdited)
    categoryStore.removeListener(categoryStore.eventTypes.CATEGORIES_FETCHED, this.handleCategoriesFetching)
  }

  handleProductDetail(data) {
    this.setState({
      product: data.product
    })
  }

  handleProductEdited(data) {
    toastr.success("Product edited successfully")
    ReactDOM.render(
        <ListProductsPage history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
      )    
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

  handleProductEdit(event) {
    event.preventDefault()
    productActions.editProduct(this.state.product)
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