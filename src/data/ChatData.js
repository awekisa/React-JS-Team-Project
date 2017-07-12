import Data from './Data'
const baseUrl = 'chatsupport'

class ChatData {
  static sendMessage(message, user, customer) {
    let obj = {
      message: message,
      user: user,
      customer: customer
    }
    return Data.post(`${baseUrl}/send`, obj, true)
  }
  static getThread(username) {
    return Data.get(`${baseUrl}/thread/${username}`)
  }
  static getAllThreads() {
    return Data.get(`${baseUrl}/all`)
  }
}

export default ChatData