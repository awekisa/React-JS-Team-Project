import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import chatActions from '../../actions/ChatActions'
import chatStore from '../../stores/ChatStore'
import AdminChat from './AdminChat'

class ListAdminThreads extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      users: [],
      threads: []
    }

    this.handleAllThreadsFetched = this.handleAllThreadsFetched.bind(this)

    chatStore.on(chatStore.eventTypes.ALL_THREADS_FETHCED, this.handleAllThreadsFetched)
  }

  handleAllThreadsFetched(data) {
    let users = []
    
    for(let obj of data) {
      if(obj.createdByUsername !== 'admin') {
        users.push(obj.createdByUsername)
      }
    }
    this.setState({
      users: users,
      threads: data
    })
  }

  componentDidMount () {
    chatActions.getAllThreads()
  }

  handleSpecificThread(event) {
    let username = event.target.name

    ReactDOM.render(
        <AdminChat username={username} history={this.props.history} />,
        document.getElementsByClassName('content-holder')[0]
    )
  }

  render() {

    let allUserThreads = this.state.users.map((user, i) => {
      return (
        <div key={i}>
          <a name={user} onClick={this.handleSpecificThread.bind(this)}>{user}</a>
        </div>
      )
    })

    return(
      <div>
        <h1>All threads</h1>
        <div>
          {allUserThreads}
        </div>
      </div>
    )
  }
}

export default ListAdminThreads