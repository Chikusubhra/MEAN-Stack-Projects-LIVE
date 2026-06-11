import React from 'react'
import "./NavBar.css"
const NavBar = () => {
  return (
    <div>
        <nav className='navbar'>
        <ul className="navbar-links">
          <li>
            <a href="/">Store</a>
          </li>
          <li>
            <a href="/mac">Mac</a>
          </li>
          <li>
            <a href="/ipad">Ipad</a>
          </li>
          <li>
            <a href="/iphone">Iphone</a>
          </li>
          <li>
            <a href="/airpods">AirPods</a>
          </li>
          <li>
            <a href="/tvhome">TvHome</a>
          </li>
          <li>
            <a href="/entertaintement">Entertaintement</a>
          </li>
          <li>
            <a href="/accessories">Accessories</a>
          </li>
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
        </nav>
    </div>
  )
}

export default NavBar
