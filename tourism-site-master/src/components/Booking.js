import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import '../css/book.css'
import { UserContext } from '../App'
import { useContext } from 'react'

function Booking() {
  const { state, dispatch } = useContext(UserContext)
  const navigate = useNavigate()
  // if(state === false)
  // Navigate("/login")
  useEffect(() => {
    if(state !== true){
      navigate("/login")
    }
    return () => {
      
    }
  }, [])

  const location = useLocation()
  const { places } = location.state
  const [book, setBook] = useState({
    name: '',
    email: '',
    package: 'Platinum',
    noOfPersons: 2,
    place: places.title,
  })

  const [booked, setBooked] = useState(false)
  console.log(location.state)
  const handleChange = (e) => {
    const { name, value } = e.target
    setBook({ ...book, [name]: value })
  }

  const Submit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/bookings/book', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setBooked(true)
      })
  }

  if (booked === true) {
    return (
      <>
        <div
          style={{
            display: 'block',
            margin: 'auto',
            backgroundImage: 'linear-gradient(45deg,cyan,green)',
            color: 'white',
            fontFamily: 'georgia',
            textAlign: 'center',
            paddingTop: '10%',
            height: '100vh',
            fontSize: '60px',
          }}
        >
          Your Booking Has Been Successfully Done !!!
          <br />
          Welcome to INFINITY PLACES
          <br/>
          Happy Journey !!!
          <br />
          Let the adventure begin....
          <br />
          Notification has been sent to your registered email... 
        </div>
      </>
    )
  } else
    return (
      <div className="booking-background">
        <img
          src={places.imgCard1}
          alt="img"
          style={{
            position: 'absolute',
            width: '100%',
            height: '850px',
            top: '0px',
            opacity: '0.4',
          }}
        />
        <div className="booking-container">
          <img src={places.imgCard1} alt="img" className="booking-image" />
          <form action="" onSubmit={Submit}>
            <div className="booking-form">
              <span className="booking-label">Journey Location</span>
              <input
                name="place"
                onChange={handleChange}
                className="booking-field"
                value={book.place}
                readOnly="true"
              />

              <span className="booking-label">Name</span>
              <input
                type="text"
                name="name"
                required="true"
                onChange={handleChange}
                className="booking-field"
                value={book.name}
                placeholder="Enter the Name"
              />
              <span className="booking-label">Email</span>
              <input
                type="email"
                name="email"
                id="email"
                required="true"
                onChange={handleChange}
                className="booking-field"
                value={book.email}
                placeholder="Enter the Email"
              />
              <span className="booking-label">Package Details</span>
              <select
                name="package"
                onChange={handleChange}
                className="booking-field"
                value={book.package}
              >
                <option value="Platinum">Platinum - 9 Days 8 Nights</option>
                <option value="Gold">Gold - 7 Days 6 Nights</option>
                <option value="Silver">Silver - 5 Days 4 Nights</option>
                <option value="Bronze">Bronze - 2 Days 1 Night</option>
              </select>
              <span className="booking-label">No of Passengers</span>
              <select
                name="noOfPersons"
                onChange={handleChange}
                value={book.noOfPersons}
                className="booking-field bookingPeople"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>

            <button type="submit" className="form-button">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    )
}

export default Booking
