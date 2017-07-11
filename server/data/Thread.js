const mongoose = require('mongoose')

let threadSchema = new mongoose.Schema({
    createdByUsername: {type: String},
    messages: [{
      message: {type: String, required: true},
      createdByUsername: {type: String},
      createdOn: {type: Date, default: Date.now()}
    }]
})

let Thread = mongoose.model('Thread', threadSchema)

module.exports = Thread