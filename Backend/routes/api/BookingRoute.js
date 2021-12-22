const express = require('express')

const router = express.Router()

const Booking = require('../../models/booking')

router.post('/book', async (req, res) => {
  const newBooking = new Booking({
    name: req.body.name,
    email: req.body.email,
    package: req.body.package,
    noOfPersons: req.body.noOfPersons,
    place: req.body.place,
  })

  try{
    const response = await newBooking.save();
    console.log(response)
    return res.status(200).json({success: true,message :" Booking Done Successfully"})
  }
  catch(err){
    console.log(err)
    return res.status(400).json({success: false ,message :" Unsuccessfull Booking"})
  }

})

module.exports = router
