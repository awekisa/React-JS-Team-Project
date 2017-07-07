const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let productSchema = new mongoose.Schema({
  title: {type: String, maxlength: 50, required: 'title is required.'},
  image: {type: String},
  description: {type: String, maxlength: 300},
  price: {type: Number},
  creator: {type: ObjectId, ref: 'Product'},
  category: {type: String}
})

let Product = mongoose.model('Product', productSchema)

module.exports = Product
