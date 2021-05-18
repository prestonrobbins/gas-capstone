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
    <button className="navButton">My Lists</button>
    <button className="navButton">New List</button>
    <button className="navButton">Logout</button>
  </div>
</>
    // <nav className="navbar bg-dark text-white flex-md-nowrap p-0 shadow">

    //   <ul className="nav nav-pills nav-fill">
        
        
    //     {/* <li className="nav-item">
    //       <Link className="nav-link" to="/">Articles</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/friends">Friends</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/messages">Messages</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/tasks">Tasks</Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/events">Events</Link>
    //     </li> */}
    //   </ul>
    //   <div className="nav-logout">
    //     <span className="nav__logout" onClick={handleLogout}> Logout </span>
    //     </div>
    // </nav>
  )
}