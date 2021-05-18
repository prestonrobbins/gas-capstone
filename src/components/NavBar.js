import React, { useRef }from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import logo from '../images/gasLogo_.png'

const clearUser = () => {
  sessionStorage.clear();
}
export const NavBar = () => {
  const history = useHistory()


  const handleLogout = () => {
      clearUser();
      history.push('/');
  }

  return (

<>
    <div class="sidenav">
    <img src={logo} />
    <Link className="nav-link" to="/"><button className="navButton">My Lists</button></Link>
    <Link className="nav-link" to="/storeList"><button className="navButton">New List</button></Link>
    <Link className="nav-link" onClick={() => {handleLogout()}}><button className="navButton">Logout</button></Link>
  </div>
</>
    
  )
}