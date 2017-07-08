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
      pet: {
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
    let id = (parseInt(pageParams.id,10));
    
    productActions.getById(id)
  }

  handleProductDetail(data) {
    this.setState({
      pet: data
    })
  }

  render() {
    let pet = this.state.pet
    return(
      <div>
        <div className='pet' key={pet.id}>
          <div>Id: {pet.id} Name: {pet.name} Age: {pet.age}</div>
            <img src={pet.image} alt='pet'/>
            <div>Breed: {pet.breed}</div>
            <div>Type: {pet.type}</div>
        </div>
        <ListComments params={this.props.match.params}/>
        <Comments params={this.props.match.params}/>
      </div>
    )
  }
}

export default ProductDetails