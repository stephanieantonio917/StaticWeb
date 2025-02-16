import React from 'react'

const Section = ({ title, children }) => {
  return (
    <section
      style={{
        border: '1px solid #ccc',
        padding: '1rem',
        margin: '1rem auto',
        maxWidth: '800px',
        backgroundColor: '#fff',
        borderRadius: '5px'
      }}
    >
      <h2>{title}</h2>
      {children}
    </section>
  )
}

export default Section
