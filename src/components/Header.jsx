import React from 'react'
import './Header.css' // if you want to use your CSS file

const Header = ({ myName }) => {
  return (
    <header
      className="header-container" // using the CSS class from Header.css
      style={{
        // Alternatively, if you want to use inline styles:
        border: '2px solid blue',
        backgroundColor: '#e0f0ff',
        padding: '20px',
        margin: '20px auto',
        borderRadius: '8px',
        maxWidth: '800px',
        textAlign: 'center'
      }}
    >
      <h1>
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
