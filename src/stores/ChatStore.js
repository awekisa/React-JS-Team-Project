import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import chatActions from '../actions/ChatActions'
import ChatData from '../data/ChatData'

class ChatStore extends EventEmitter {

  sendMessage(message, user){
    ChatData
      .sendMessage(message, user)
      .then(data => this.emit(this.eventTypes.MESSAGE_SENT, data))
  }

  handleAction(action) {
    switch(action.type) {
      case chatActions.types.SEND_MESSAGE: {
        this.sendMessage(action.message, action.user)
        break
      }
      default: break
    }
  }

}

let chatStore = new ChatStore()

chatStore.eventTypes = {
  MESSAGE_SENT: 'message_sent'
}

dispatcher.register(chatStore.handleAction.bind(chatStore))

export default chatStore
