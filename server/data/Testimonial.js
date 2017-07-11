const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

let testimonialSchema = new mongoose.Schema({
    creator: {type: ObjectId, ref: 'User'},
    fullName: {type: String},
    company: {type: String},
    approved: {type: Boolean, default: false},
    text: {type: String},
    date: {type: Date, default: Date.now}
})

let Testimonial = mongoose.model('Testimonial', testimonialSchema)

module.exports = Testimonial