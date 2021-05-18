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
    <Link className="nav-link" to="/home"><button className="navButton">My Lists</button></Link>
    <Link className="nav-link" to="/home"><button className="navButton">New List</button></Link>
    <Link className="nav-link" onClick={() => {handleLogout()}}><button className="navButton">Logout</button></Link>
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