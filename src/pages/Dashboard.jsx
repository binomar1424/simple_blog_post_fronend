import React from 'react'
import '../styles/Dashboard.css'
import { Section } from '../components/tags'

function Dashboard() {
  return (
    <div>
        <Section className='buttons_section'>
            <button>Add new blog</button>
            {/* <button>Edit blog</button> */}
        </Section>
    </div>
  )
}

export default Dashboard