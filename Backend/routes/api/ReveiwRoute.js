const express = require('express')
const router = express.Router()

const Review = require('../../models/review')

router.post('/store_review', async (req, res) => {

    const newReview = new Review({
        name : req.body.name,
        email : req.body.email,
        message : req.body.message
    })

    try{
        const response = await newReview.save();
        console.log(response)
       return  res.status(200).json({success : true , message: "The review recorded"})
    }
    catch(err){
        console.log(err)
        return res.status(400).json({success : false,message : "There is an error"})
    }

})

module.exports = router

