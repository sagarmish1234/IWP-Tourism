import React, { useState } from 'react'
import { Form, NavLink } from 'reactstrap'
import '../css/login.css'
import {useNavigate} from "react-router-dom"
import { UserContext } from '../App'
import { useContext } from 'react'

const Login = () => {

  const {state , dispatch} = useContext(UserContext);

  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false)
  const [message, setMessage] = useState('')
  const handleInput = (e) => {
    const name = e.target.name
    setUser({ ...user, [name]: e.target.value })
  }
  const Submit = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/api/users/login', {
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
        setLogged(data.success)
        setMessage(data.message)
        document.cookie = `token = ${data.token}; max-age=1800`
        window.localStorage.setItem("token",data.token)
        console.log(localStorage.getItem("token"))
        dispatch({type : "USER",payload : data.success})
        alert(data.message)
        if(data.success === true)
        navigate("/")
      })
  }

  return (
    <>
      {/* <h1>User Login</h1> */}
      <div className="form-background">
        <div className="form-container">
          <img
            src="pexels-guillaume-meurice-1591447.jpg"
            alt="img"
            className="form-image"
          />
          <div className="form-content">
            <Form onSubmit={Submit} method="POST">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter the email"
                onChange={handleInput}
                value={user.email}
                className="form-field"
                required={true}
              />

              <br />
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInput}
                value={user.password}
                placeholder="Enter the password"
                required={true}
                className="form-field"
              />
              <br />
              <button type="submit" className="form-btn">
                Login
              </button>
            </Form>
            <NavLink href="/register" style={{ padding: '0px' }}>
              <p className="form-link">New User? Register Here</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}
export default Login
