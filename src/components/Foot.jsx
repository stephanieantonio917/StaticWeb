import React from 'react'

const Foot = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p>&copy; {currentYear} CodeCraft Labs. All rights reserved.</p>
    </footer>
  )
}

export default Foot
