import React, { useEffect, useState } from 'react'
// import { Component } from 'react'
import { Container, Row, CardColumns, Badge } from 'reactstrap'
import TourCard from './TourCard'
import '../App.css'

const itemCategories = [
  'all',
  'beach',
  'mountain',
  'resort',
  'climbing',
  'camping',
]

function Package1() {
  const [cards, setCards] = useState([])
  const [category, setCategory] = useState('all')

  useEffect(() => {
    fetch('http://localhost:5000/api/places/get_places', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data.places)
        setCards(data.places)
      })
  }, [])

  return (
    <div className="subComponent-lg" id="packageBody">
      <Container>
        <header className="headerTitle text-center">
          <h1>Tour Packages</h1>
          <p>A Great Collection of Our Tour Packages</p>
        </header>
        <section className="packageBody text-center">
          {itemCategories.map((badge, index) => (
            <Badge
              key={index}
              href=""
              color={badge === category ? 'dark' : 'light'}
              onClick={() => setCategory(badge)}
            >
              {badge}
            </Badge>
          ))}

          <Row className="text-left">
            <CardColumns>
              {category !== 'all'
                ? cards.map((tourcard) => {
                    return tourcard.category.map((catItem) => {
                      return catItem === category ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null
                    })
                  })
                : cards.map((tourcard) => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
            </CardColumns>
          </Row>
        </section>
      </Container>
    </div>
  )
}

export default Package1
