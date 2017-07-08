const mongoose = require('mongoose')
// const ObjectId = mongoose.Schema.Types.ObjectId

let categorySchema = new mongoose.Schema({
  name: {type: String, maxlength: 30, required: 'category name is required.'},
  date: {type: Date, default: Date.now}
})

let Category = mongoose.model('Category', categorySchema)

module.exports = Category
