import React, { Component } from 'react'
import chatActions from '../../actions/ChatActions'
import chatStore from '../../stores/ChatStore'

class SpecificThread extends Component {
  constructor(props) {
    super(props)

    this.state = {
      thread: ''
    }
    this.handleThreadFetched = this.handleThreadFetched.bind(this)

    chatStore.on(chatStore.eventTypes.THREAD_FETCHED, this.handleThreadFetched)
  }

  componentDidMount () {
    chatActions.getThread(this.props.username)
  }

  handleThreadFetched(data) {
    console.log(data)
    this.setState({
      thread: data
    })
  }

  render() {
    return (
      <div>SpecificThread</div>
    )
  }
}

export default SpecificThread