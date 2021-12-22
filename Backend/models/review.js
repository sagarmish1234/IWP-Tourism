const mongoose = require('mongoose')

const schema = mongoose.Schema

const reviewSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

module.exports = Review = mongoose.model("review",reviewSchema)
