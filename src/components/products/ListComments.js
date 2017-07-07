import React, { Component } from 'react'
import productActions from '../../actions/ProductActions'
import productStore from '../../stores/ProductStore'

class ListComments extends Component {
  constructor(props){
    super(props)

    this.state = {
      comments: []
    }

    this.handleCommentsFetched = this.handleCommentsFetched.bind(this)
    
    productStore.on(productStore.eventTypes.COMMENTS_FETCHED, this.handleCommentsFetched)
  }

  handleCommentsFetched(data) {
    this.setState({
      comments: data
    })
  }

  componentDidMount() {
    let pageParams = this.props.params
    let id = (parseInt(pageParams.id,10))

    productActions.getAllComments(id)
  }
  
  render() {
    let message = 'No comments yet, be the first!'

    if(this.state.comments.length > 0){
      message = ''
    }
    
    let comments = this.state.comments.map((obj, index) => {
      return (
        <div key={index}>
          <div>From: {obj.user}</div>
          <div>{obj.message}</div>
          <div>On: {obj.createdOn}</div>
        </div>
      )
    })
    
    return (
      <div className='comments'>
        <h3>Comments</h3>
        {message}
        {comments}
        <br/>
        <br/>
      </div>
    )
  }
}

export default ListComments