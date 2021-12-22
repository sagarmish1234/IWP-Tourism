const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PlaceSchema =  new schema({
    title :{
        type : String,
        required :true  
    },
    address : {
        type : String,
        required: true
    },
    about : {
        type : String,
        required: true
    },
    imgCard1: {
        type : String,
        required : true
    },
    imgCard2: {
        type : String,
        required : true
    },
    imgCard3: {
        type : String,
        required : true
    },
    imgCard4: {
        type : String,
        required : true
    },
    category:{
        type :[String],
        required :true 
    }
})

module.exports = Place = mongoose.model("place",PlaceSchema)