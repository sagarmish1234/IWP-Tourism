import React, { createContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavbarMain from './components/NavbarMain'
import Home from './pages/Home'
import Tour from './pages/Tour'
import Login from './components/Login'
import Registration from './components/Registration'
import { useReducer } from 'react'
import { initialState, reducer } from './reducer/UseReducer'
import Booking from './components/Booking'
export const UserContext = createContext()




const App = ()=> {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <UserContext.Provider value = {{state , dispatch }}>

      <Router>
        <NavbarMain />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="tour" element={<Tour />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Registration />}></Route>
          <Route path="tour/book" element={<Booking/>}></Route>
        </Routes>
      </Router>
      </UserContext.Provider>
    </div>
  )
}
export default App
