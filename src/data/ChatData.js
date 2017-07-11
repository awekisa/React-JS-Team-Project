import Data from './Data'
const baseUrl = 'chatsupport'

class ChatData {
  static sendMessage(message, user) {
    let obj = {
      message: message,
      user: user
    }
    return Data.post(`${baseUrl}/send`, obj, true)
  }
  static getThread(username) {
    return Data.get(`${baseUrl}/thread/${username}`)
  }
}

export default ChatData