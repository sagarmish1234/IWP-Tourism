const mongoose = require('mongoose')

const schema = mongoose.Schema

const bookingSchema = new schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  package: { type: String, required: true },
  noOfPersons: { type: Number, required: true },
  place: { type: String, required: true }
})

module.exports = Booking = mongoose.model("booking",bookingSchema)
