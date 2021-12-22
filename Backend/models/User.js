const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    // required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password:{
    type : String,
    required:true 
  }
})

module.exports = User = mongoose.model("user",userSchema);
