import React from 'react'
import { Link, IndexLink } from 'react-router'

let Nav = () => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React timer app</li>
          <li>
            <IndexLink to="/" activeClassName="active-link" className="nav-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link" className="nav-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://github.com/MaximMishchenko" target="_blank">Maxim Mischenko</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
