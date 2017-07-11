import React, { Component } from 'react'
import $ from 'jquery'
import chatActions from '../../actions/ChatActions'
import chatStore from '../../stores/ChatStore'
import Auth from '../users/Auth'

class UserChat extends Component {

  constructor(props){
    super(props)

    let me = {}
    me.avatar = 'images/damian.jpg'

    this.state = {
      message: '',
      me: me
    }

    this.handleMessageSent = this.handleMessageSent.bind(this)

    chatStore.on(chatStore.eventTypes.MESSAGE_SENT, this.handleMessageSent)
  }

  componentWillUnmount() {
    chatStore.removeListener(chatStore.eventTypes.MESSAGE_SENT, this.handleMessageSent)
  }

  handleMessageSent(data){
    console.log(data)
  }

  handleMessageSubmit(event) {
    event.preventDefault()
    let text = this.state.message
    this.insertChat(text)
    $('.mytext').val('')
    let user = Auth.getUser().username
    chatActions.sendMessage(text, user, this.formatAMPM(new Date()))
  }

  formatAMPM(date) {
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var ampm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0'+minutes : minutes
    var strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }     

  insertChat(text, time = 0){
    var control = ""
    var date = this.formatAMPM(new Date())
    
    control = '<li style="width:100%;">' +
                    '<div class="msj-rta macro">' +
                        '<div class="text text-r">' +
                            '<p>'+text+'</p>' +
                            '<p><small>'+date+'</small></p>' +
                        '</div>' +
                    '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+ this.state.me.avatar+'" /></div>' +                                
              '</li>'
                         
    $("ul").append(control)
    
  }

  handleOnChange(event) {
    const value = event.target.value
    this.setState({
      message: value
    })
  }

  render() {
    return(
      <div className="col-sm-3 col-sm-offset-4 frame">
            <ul></ul>
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

export default UserChat