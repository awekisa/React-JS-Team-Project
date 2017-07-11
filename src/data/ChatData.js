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
}

export default ChatData