const express = require('express')
const router = express.Router()

const Place = require('../../models/place')

router.get('/get_places', async (req, res) => {
  const places = await Place.find({})
  const newPlaces = places.map((place, index) => {
    return place.toJSON()
  })

  return res.json({ places: newPlaces })
})
router.post('/get_places', async (req, res) => {
  const newPlace = new Place({
    title: req.body.title,
    address: req.body.address,
    about: req.body.about,
    imgCard1: req.body.imgCard1,
    imgCard2: req.body.imgCard2,
    imgCard3: req.body.imgCard3,
    imgCard4: req.body.imgCard4,
    category: req.body.category,
  })
  try {
    const response = await newPlace.save();
    return res.json(response)
  } catch (err) {
    console.log(err)
    return res.json({ message: 'Error' })
  }
})
module.exports = router
