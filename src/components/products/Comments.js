import React, { Component } from 'react'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'
import ProductCommentForm from './ProductCommentForm'
import FormHelpers from '../common/FormHelpers'
import toastr from 'toastr'

class Comments extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comment: ''
    }

    this.handleCommentCreated = this.handleCommentCreated.bind(this)
    productStore.on(productStore.eventTypes.COMMENT_CREATED, this.handleCommentCreated)
  }

  handleComment(event) {
    const target = event.target
    const comment = target.value
    this.setState({comment})
  }

  handleCommentForm(event) {
    event.preventDefault()
    let pageParams = this.props.params
    let id = (parseInt(pageParams.id,10))
    let comment = this.state.comment

    productActions.createComment(id, comment)  
    productActions.getAllComments(id)
  }

  handleCommentCreated(data) {
    if(!data.success) {
      let firstError = FormHelpers.getFirstError(data)
       
      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.error}</div>
        <ProductCommentForm 
        onChange={this.handleComment.bind(this)}
        onSave={this.handleCommentForm.bind(this)}/>
      </div>
    )
  }
}

export default Comments