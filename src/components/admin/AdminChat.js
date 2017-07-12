import React, { Component } from 'react'
import chatActions from '../../actions/ChatActions'
import chatStore from '../../stores/ChatStore'
import $ from 'jquery'
import Auth from '../users/Auth'

class AdminChat extends Component {
  constructor(props) {
    super(props)

    let me = {}
    me.avatar = 'images/damian.jpg'

    let admin = {}
    admin.avatar = 'images/mitko.jpg'


    this.state = {
      thread: '',
      me: me,
      admin: admin,
      adminMessage: ''
    }

    this.handleThreadFetched = this.handleThreadFetched.bind(this)

    chatStore.on(chatStore.eventTypes.THREAD_FETCHED, this.handleThreadFetched)
  }

  componentDidMount () {
    chatActions.getThread(this.props.username)
  }

  handleThreadFetched(data) {
    this.setState({
      thread: data
    })
  }

  handleOnChange(event) {
    const value = event.target.value
    this.setState({
      adminMessage: value
    })
  }

  handleMessageSubmit(event) {
    event.preventDefault()
    let text = this.state.adminMessage
    this.insertChat(text)
    $('.mytext').val('')
    let user = Auth.getUser().username
    chatActions.sendMessage(text, user, this.props.username)
  }

  formatAMPM(date) {
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0' + minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }  

  insertChat(text, time = 0){
    var control = ""
    var date = this.formatAMPM(new Date())
    
    control = '<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ this.state.me.avatar +'" /></div>' +
                            '<div class="text text-l">' +
                                '<p>'+ text +'</p>' +
                                '<p><small>'+date+'</small></p>' +
                            '</div>' +
                        '</div>' +
                    '</li>';     
                         
    $(".messages").append(control)
  }

  render() {

    let messages = 'No messages yet'

    if(!this.state.thread.messages) {
      return null
    }
    if(this.state.thread.messages.length > 0) {
      messages = this.state.thread.messages.map((message, index) => {
        let date = new Date(message.createdOn)
        let hours = date.getHours().toString()
        let minutes = date.getMinutes().toString()
        if (minutes.length === 1) {
          minutes = '0' + minutes
        }
        let time = `${hours}:${minutes}`
        if (message.createdByUsername === Auth.getUser().username) {
          return (
            <li key={message._id} style={{width: '100%'}}>
                <div className ="msj macro">
                <div className="avatar" >
                  <img className="img-circle" style={{width: '100%'}} src={this.state.admin.avatar} alt='avatar' />
                </div> 
                    <div className ="text text-l">
                        <p> {message.message} </p>
                        <p><small>{time}</small></p>
                    </div>
                </div>          
              </li>
          )
        } else {
          return (
            <li key={message._id} style={{width: '100%'}}>
                <div className ="msj-rta macro">
                    <div className ="text text-r">
                        <p> {message.message} </p>
                        <p><small>{time}</small></p>
                    </div>
                <div className="avatar" >
                  <img className="img-circle" style={{width: '100%'}} src={this.state.me.avatar} alt='avatar' />
                </div> 
                </div>          
              </li>
          )
        }
      })
    }

    return (
      <div className="frame">
            <ul className='messages' >{messages}</ul>
            <div>
                <div className="msj-rta macro" style={{margin: "auto"}}>                        
                    <div className="text text-r" style={{background: "whitesmoke" }}>
                      <form name="messageBox">
                          <input type='text' className="mytext" placeholder="Type a message" onChange={this.handleOnChange.bind(this)}/>
                          <input type="submit" onClick={this.handleMessageSubmit.bind(this)} style={{position: 'absolute', left: '-9999px'}} />
                      </form>
                    </div> 
                </div>
            </div>
        </div> 
    )
  }
}

export default AdminChat