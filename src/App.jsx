import React, { useEffect } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import Foot from './components/Foot'

function App() {
  const myName = 'Stephanie'

  console.log('App is rendering!')

  useEffect(() => {
    console.log('Updating title with myName:', myName)
    document.title = `Welcome ${myName} to Codecraft intranet`
  }, [myName])

  return (
    <div className="App">
      {/* Pass the myName prop */}
      <Header myName={myName} />

      <main>
        <Section title="Highlights">
          <h3>Remember to live out our values</h3>
          <ol>
            <li>Relentless Learning and Growth</li>
            <li>Creative Problem Solving</li>
            <li>Curiosity-Driven Exploration</li>
          </ol>
          <h3>Upcoming Events</h3>
          <ul>
            <li><b>Feb 7:</b> Employee Hack-a-ston</li>
            <li><b>Mar 7:</b> Food Bank Volunteering</li>
            <li><b>Apr 4:</b> Company Retreat</li>
          </ul>
        </Section>

        <Section title="Latest Event">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis animi
            laudantium eos atque sed debitis eum deleniti cumque saepe aut
            voluptatibus, dolores commodi corporis quibusdam numquam
            perferendis, molestias tenetur suscipit!.
          </p>
          <img
            src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3"
            style={{ width: '35%', margin: '0 1rem' }}
            alt="Kickball outing"
          />
          <img
            src="https://plus.unsplash.com/premium_photo-1661429511577-b165fc04718f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3"
            style={{ width: '35%', margin: '0 1rem' }}
            alt="Happy Hour"
          />
        </Section>
      </main>

      <Foot />
    </div>
  )
}

export default App
