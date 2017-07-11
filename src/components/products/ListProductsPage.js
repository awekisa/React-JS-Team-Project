import React, { Component } from 'react'
import queryString from 'query-string'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import { Link } from 'react-router-dom'
import UserChat from '../chat/UserChat'
import Auth from '../users/Auth'

class ListProductsPage extends Component {
  constructor(props){
    super(props)

    let query = queryString.parse(this.props.location.search)
    const page = parseInt(query.page, 10) || 1

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

  goToPrevPage() {
    let page = this.state.page
    page--
    if(page < 1) {
      page = 1
    }
    this.setState({
      page
    })
    this.props.history.push(`/?page=${page}`)

    productActions.all(page)
  }

  goToNextPage() {

    if(this.state.products.length === 0) {
      return
    }

    let page = this.state.page
    page += 1

    this.setState({
      page
    })
    this.props.history.push(`/?page=${page}`)

    productActions.all(page)
  }
  
  render() {
    let products = 'No products available'
    if(this.state.products.length > 0) {
      products = this.state.products.map((product, index) => {
        return (
          <div className='product col-md-4' key={product._id}>
            <div>Title:{product.title}</div>
            <img src={product.image} alt='product'/>
            <div>Description: {product.description}</div>
            <div><Link to={`/products/details/${product._id}`}>Details</Link></div>
          </div>
        ) 
      })
    }
    return (
      <div className='main-content'>
        <h1>All Products</h1>
         { Auth.isUserAuthenticated() ? (
          <UserChat />
        ) : (
          <div></div>
        )}
        {products}
        <div>
          <button onClick={this.goToPrevPage.bind(this)}>Prev</button>
          <button onClick={this.goToNextPage.bind(this)}>Next</button>
        </div>
      </div>
    )
  }
}

export default ListProductsPage