import dispatcher from '../dispatcher'

const chatActions = {
  types: {
    SEND_MESSAGE: 'SEND_MESSAGE'
  },
  sendMessage(message, user) {
    dispatcher.dispatch({
      type: this.types.SEND_MESSAGE,
      message,
      user
    })
  }
}

export default chatActions