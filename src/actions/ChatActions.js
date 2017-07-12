import dispatcher from '../dispatcher'

const chatActions = {
  types: {
    SEND_MESSAGE: 'SEND_MESSAGE',
    GET_THREAD: 'GET_THREAD',
    GET_ALL_THREADS: 'GET_ALL_THREADS'
  },
  sendMessage(message, user, customer) {
    dispatcher.dispatch({
      type: this.types.SEND_MESSAGE,
      message,
      user,
      customer
    })
  },
  getThread(username) {
    dispatcher.dispatch({
      type: this.types.GET_THREAD,
      username
    })
  },
  getAllThreads() {
    dispatcher.dispatch({
      type: this.types.GET_ALL_THREADS
    })
  }
}

export default chatActions