import React, { useContext } from 'react'
import { UserContext} from '../App'
import { Link ,useLocation } from 'react-router-dom'
import { NavLink, Button } from 'reactstrap'
// import RenderMenu from './RenderMenu'
import { ReactComponent as Signin } from '../assets/svg/signin.svg'

function RenderMenu() {
  const { state, dispatch } = useContext(UserContext)
    const location = useLocation()
    if(document.cookie)
    dispatch({ type: 'USER', payload: true })
  if (state === false) {
    return (
      <>
        <Link to="/login">
          <NavLink>
            <Button color="primary">
              <Signin
                width="20"
                height="20"
                strokeWidth="1"
                style={{ marginRight: '5px' }}
              />
              Login
            </Button>
          </NavLink>
        </Link>
        <Link to="/register">
          <NavLink>
            <Button color="danger">Register</Button>
          </NavLink>
        </Link>
      </>
    )
  } else {
    return (
      <>
        <NavLink>
          <Button
            color="primary"
            onClick={() => {
              document.cookie = `token =; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
              dispatch({ type: 'USER', payload: false })
              location.pathname = "/"
            }}
          >
            <Signin
              width="20"
              height="20"
              strokeWidth="1"
              style={{ marginRight: '5px' }}
            />
            Logout
          </Button>
        </NavLink>
      </>
    )
  }
}

export default RenderMenu
