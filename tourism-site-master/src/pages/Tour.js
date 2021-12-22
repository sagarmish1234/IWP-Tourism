import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container, Row, Col, Button, Alert } from 'reactstrap'
import '../App.css'
// import tours from '../components/Package'
// import TourCard from '../components/TourCard'
import '../css/book.css'
import { NavLink } from 'react-router-dom'


const Tour = () => {

  const location = useLocation()
  const { place } = location.state
  const [suggest, setSuggest] = useState(false)
  const [suggestion, setSuggestion] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setSuggestion({ ...suggestion, [name]: value })
  }

  const Submit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/reviews/store_review', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(suggestion),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.message)
      })
    setSuggest(true)
  }

  return (
    <div className="subComponent">
      <Container>
        <section className="tour-cover item-center">
          <img
            src={place.imgCard1}
            alt=""
            style={{ height: '500px', width: '90%' }}
          />
          <h1>{place.title}</h1>
          <h4>{place.address}</h4>
        </section>
        <section className="tour-info">
          <Row>
            <Col sm="8">
              <div className="tour-desc">
                <p style={{ textAlign: 'justify' }}>{place.about}</p>
                <p style={{ textAlign: 'justify' }}>
                  Morbi facilisis, odio vitae egestas pretium, mauris tortor
                  vulputate dolor, non interdum nunc tellus at dolor. Donec
                  condimentum et augue vitae volutpat. Fusce vitae laoreet sem.
                  Integer a justo sit amet nibh vehicula blandit. Suspendisse
                  faucibus venenatis egestas. In vulputate sapien sit amet
                  ligula vulputate, in consequat ex molestie. Curabitur
                  hendrerit pulvinar vehicula. Phasellus quis posuere tortor.
                  Cras pellentesque vehicula dui nec fermentum. Sed venenatis
                  nunc justo. Quisque metus est, volutpat quis scelerisque in,
                  fermentum sed lacus. Sed sed pretium massa. Aenean imperdiet
                  molestie turpis at egestas.
                </p>
              </div>
            </Col>
            <Col sm="4">
              <div className="tour-gallery">
                <a href={place.imgCard1}>
                  <img src={place.imgCard1} alt="" />
                </a>
                <a href={place.imgCard2}>
                  <img src={place.imgCard2} alt="" />
                </a>
                <a href={place.imgCard3}>
                  <img src={place.imgCard3} alt="" />
                </a>
                <a href={place.imgCard4}>
                  <img src={place.imgCard4} alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </section>
        <NavLink to="book" state={{places :place}}>
          <button className="book-btn" >Book Now</button>
        </NavLink>
      </Container>
      {!suggest ? (
        <section className="reviews">
          <Container>
            <section className="tour-msg text-center">
              <h1>Reviews and Suggestions</h1>
              <p>We're glad to hear something from you.</p>
              <form action="" onSubmit={Submit}>
                <Row>
                  <Col sm="6">
                    <input
                      type="text"
                      name="name"
                      id="reviewer-name"
                      placeholder="Your Name"
                      value={suggestion.name}
                      required="true"
                      onChange={handleChange}
                    />
                    <br />
                    <input
                      type="email"
                      name="email"
                      value={suggestion.email}
                      id="reviewer-email"
                      onChange={handleChange}
                      placeholder="Your email"
                      required="true"
                    />
                  </Col>
                  <Col>
                    <textarea
                      name="message"
                      id="reviewer-message"
                      rows="4"
                      onChange={handleChange}
                      value={suggestion.message}
                      placeholder="Your Message"
                      required="true"
                    />
                  </Col>
                </Row>
                <Button outline color="secondary" className="float-right">
                  Submit
                </Button>
              </form>
            </section>
          </Container>
        </section>
      ) : (
        <Container>
          <Alert color="success">
            <h2 style={{ textAlign: 'center' }}>
              Your Suggestion has been received and is Under review
            </h2>
          </Alert>
        </Container>
      )}
    </div>
  )
}

export default Tour
