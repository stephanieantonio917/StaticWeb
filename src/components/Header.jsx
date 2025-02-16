import React from 'react'
import './Header.css' 

const Header = ({ myName }) => {
  return (
    <header
      className="header-container" // CSS class from Header.css
  
    >
      <h1 style={{ color: 'white' }}>
        Welcome {myName} to the <span style={{ color: 'red' }}>CodeCraft</span> Labs Intranet
      </h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ display: 'inline-block', margin: '0 1rem' }}>
            <a href="#home">Home</a>
          </li>
          <li style={{ display: 'inline-block', margin: '0 1rem' }}>
            <a href="#emp_mgmt">Employee Management</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
