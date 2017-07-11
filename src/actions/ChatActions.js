import dispatcher from '../dispatcher'

const chatActions = {
  types: {
    SEND_MESSAGE: 'SEND_MESSAGE',
    GET_THREAD: 'GET_THREAD'
  },
  sendMessage(message, user) {
    dispatcher.dispatch({
      type: this.types.SEND_MESSAGE,
      message,
      user
    })
  },
  getThread(username) {
    dispatcher.dispatch({
      type: this.types.GET_THREAD,
      username
    })
  }
}

export default chatActions