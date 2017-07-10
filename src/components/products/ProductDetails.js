import React, { Component } from 'react'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import Auth from '../users/Auth'
import Comments from './Comments'
import ListComments from './ListComments'

class ProductDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {
        name: '',
        age: 0,
        image: '',
        breed: '',
        type: '',
      },
      error: ''
    }

    this.handleProductDetail = this.handleProductDetail.bind(this)
   
    productStore.on(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
  }

  componentWillUnmount() {
    productStore.removeListener(productStore.eventTypes.PRODUCT_DETAIL_FETCHED, this.handleProductDetail)
  }

  componentWillMount() {
    if(!Auth.isUserAuthenticated()) {
      this.props.history.push('/users/login')
    }
  }

  componentDidMount() {
    let pageParams = this.props.match.params;
    let id = pageParams.id

    productActions.getById(id)
  }

  handleProductDetail(data) {
    this.setState({
      product: data.product
    })
  }

  render() {
    let product = this.state.product
    return(
      <div>
        <div className='product' key={product.id}>
          <h3> {product.title}</h3>
            <img src={product.image} alt='product'/>
            <div>Price: <h3>{product.price} BGN</h3></div>
            <div>{product.description}</div>
            <div>Category: {product.category}</div>
        </div>
        <ListComments params={this.props.match.params}/>
        <Comments params={this.props.match.params}/>
      </div>
    )
  }
}

export default ProductDetails