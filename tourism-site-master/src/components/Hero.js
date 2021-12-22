import React from 'react'
import { Button } from 'reactstrap'
import Typed from 'typed.js'
import { useRef, useEffect } from 'react'
import '../App.css'

const Hero = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Place for Tourism', 'Website for Globetrotting', 'Home for Exploration', 'Hub for Resorting'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 40,
      backDelay: 500,
      loop:true
    })

    // Destropying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div>
      <main className="cover-page" id="hero">
        <section className="wrapped-page">
          <div className="item-center">
            <h1>Infinity Places</h1>
            <h3>Tours | Travel | Guide</h3>
            <h2 style={{fontWeight : "bold"}}>
              The All in One <span ref={el}></span>
            </h2 >
            <Button outline color="warning" href="#about">
              Explore Now
            </Button>
          </div>
        </section>
        {/* <Login/> */}
      </main>
    </div>
  )
}
export default Hero
