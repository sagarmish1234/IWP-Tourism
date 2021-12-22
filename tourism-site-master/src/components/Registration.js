import React, { useState } from 'react'
import Image from '../images/pexels-eberhard-grossgasteiger-1366919.jpg'
import { NavLink, Alert } from 'reactstrap'
import '../css/registration.css'
import { useNavigate,useLocation } from 'react-router-dom'

const Registration = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    address: '',
    DOB: '',
    mobile: '',
  })
  const location = useLocation();
  const [registered, setRegistered] = useState(false)
  const [message, setMessage] = useState('test message')
  function Reset() {
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      address: '',
      DOB: '',
      mobile: '',
    })
  }

  const Submit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setRegistered(data.success)
        setMessage(data.message)
      })
    Reset()
    location.pathname = "/";
    
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const hide = () => {
    const password = document.getElementById('password')
    if (password.type === 'text') {
      password.type = 'password'
      document.getElementById('password2').type = 'password'
    } else {
      password.type = 'text'
      document.getElementById('password2').type = 'text'
    }
  }

  return (
    <>
      <div className="registration-back">
        <div className="alert-message">
          {registered && <Alert variant="success">{message}</Alert>}
          {/* {!registered && <Alert variant="?">{message}</Alert>} */}
        </div>
        {/* {!(user.registered) && <Alert variant="Danger">{user.message}</Alert>} */}
        <div className="registration-container">
          <img src={Image} alt="" className="registration-image" />
          <form
            method="POST"
            onSubmit={Submit}
            className="registration-content"
          >
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter the First name"
              onChange={handleInput}
              value={user.firstName}
              className="registration-field"
              required={true}
              autoComplete="off"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter the Last Name"
              onChange={handleInput}
              value={user.lastName}
              className="registration-field"
              required={true}
              autoComplete="off"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter the email"
              onChange={handleInput}
              value={user.email}
              className="registration-field"
              required={true}
              autoComplete="off"
            />
            <input
              type="date"
              name="DOB"
              id="DOB"
              placeholder="Enter the Date of Birth"
              onChange={handleInput}
              value={user.DOB}
              className="registration-field"
              required={true}
              autoComplete="off"
            />
            <textarea
              id="address"
              name="address"
              rows="4"
              cols="50"
              className="registration-field address"
              value={user.address}
              onChange={handleInput}
              placeholder="Enter The Address"
            ></textarea>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Enter the Mobile Number"
              onChange={handleInput}
              value={user.mobile}
              className="registration-field"
              required={true}
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleInput}
              value={user.password}
              pattern="[^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$]"
              placeholder="Enter the password"
              className="registration-field"
              required={true}
            />
            <input
              type="password"
              name="password2"
              id="password2"
              onChange={handleInput}
              value={user.password2}
              placeholder="Confirm the password"
              className="registration-field"
              required={true}
            />

            <div style={{ marginLeft: '23px' }}>
              <input
                type="checkbox"
                name="show_password"
                id="show_password"
                onClick={hide}
              />
              <span style={{ color: 'white' }}>Show Password</span>
            </div>
            <button type="submit" className="registration-btn">
              Register
            </button>
            <NavLink href="login">
              <p
                style={{
                  textAlign: 'right',
                  marginTop: '10px',
                  textDecoration: 'underline',
                  fontWeight: 'bold',
                }}
                className="registration-link"
              >
                Already a user? Login then
              </p>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  )
}
export default Registration
