import React from 'react'
import "../../css/LandingPagePersonalWeb/Navbar.css"

function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <h3>Muhammad Faozan</h3>
        </div>
        <div className="menu">
          <ul>
            <li><a href="#" style={{color: "#a5d7e8"}}>Home</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
