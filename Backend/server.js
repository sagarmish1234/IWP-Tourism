const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const cookieParser = require("cookie-parser")


app.use(cookieParser())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)


// app.use(cors())
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

app.use("/api/users",require("./routes/api/UserRoute"))
app.use("/api/places",require("./routes/api/PlaceRoute"))
app.use("/api/reviews",require("./routes/api/ReveiwRoute"))
app.use("/api/bookings",require("./routes/api/BookingRoute"))

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch((err) => console.log(err))
const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server up and running on port ${port} !`))
