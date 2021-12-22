const express = require('express')
const mongoose = require('mongoose')
const bycrpt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../../models/User')

router.post('/register', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  try {
    if (user) {
      return res.status(409).json({
        success: false,
        message: 'The user with the  same email already exits',
      })
    } else {
      if (req.body.password !== req.body.password2) {
        return res
          .status(401)
          .json({ success: false, message: 'The PassWords do not match' })
      }
      bycrpt.hash(req.body.password, 10, async (err, hash) => {
        if (err) throw err
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
          address: req.body.address,
          DOB: req.body.DOB,
          mobile: req.body.mobile,
        })
        try {
          const response = await newUser.save()
          if (response) {
            return res
              .status(200)
              .json({ success: true, message: 'User successfully Registered' })
          }
        } catch (err) {
          throw err
        }
        const newUserRegis = await newUser.save()
      })
    }
  } catch (error) {
    console.log(error)
    res
      .status(409)
      .json({ success: false, message: 'The User registration failed' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({ success: false, message: 'No User found' })
    }
    // console.log(user)
    const isMatch = await bycrpt.compare(req.body.password, user.password)
    if (!isMatch) {
      return res
        .status(405)
        .json({ success: false, message: 'Incorrect Credentials' })
    }
    const accessToken = jwt.sign(user.toJSON(), 'secret')
    console.log(accessToken)
    // console.log(req.cookies)
    // if(!(req.cookies.jwt))
    // console.log("The cookie is missing")
    // console.log(req.body.email)
    // console.log(req.body.password)
    return res
      .status(200)
      // .cookie('jwt', accessToken)
      .json({
        success: true,
        message: 'User signed in successfully',
        token : accessToken
      })
  } catch (err) {
    console.log(err)
    return res
      .status(404)
      .json({ success: false, message: 'There is an error' })
  }
})

module.exports = router
