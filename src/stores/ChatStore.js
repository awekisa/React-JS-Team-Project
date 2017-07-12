import { EventEmitter } from 'events'
import dispatcher from '../dispatcher'
import chatActions from '../actions/ChatActions'
import ChatData from '../data/ChatData'

class ChatStore extends EventEmitter {

  sendMessage(message, user, customer){
    ChatData
      .sendMessage(message, user, customer)
      .then(data => this.emit(this.eventTypes.MESSAGE_SENT, data))
  }

  getThread(username) {
    ChatData
      .getThread(username)
      .then(data => this.emit(this.eventTypes.THREAD_FETCHED, data))
  }

  getAllThreads(){
    ChatData
      .getAllThreads()
      .then(data => this.emit(this.eventTypes.ALL_THREADS_FETHCED, data))
  }

  handleAction(action) {
    switch(action.type) {
      case chatActions.types.SEND_MESSAGE: {
        this.sendMessage(action.message, action.user, action.customer)
        break
      }
      case chatActions.types.GET_THREAD: {
        this.getThread(action.username)
        break
      }
      case chatActions.types.GET_ALL_THREADS: {
        this.getAllThreads()
        break
      }
      default: break
    }
  }
}

let chatStore = new ChatStore()

chatStore.eventTypes = {
  MESSAGE_SENT: 'message_sent',
  THREAD_FETCHED: 'thread_fetched',
  ALL_THREADS_FETHCED: 'all_threads_fetched'
}

dispatcher.register(chatStore.handleAction.bind(chatStore))

export default chatStore
