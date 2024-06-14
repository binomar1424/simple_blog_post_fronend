import React from 'react'
import '../styles/TopBar.css'

function TopBar() {
  return (
    <nav className='web_topbar'>
        <section>
            <h2>Blog</h2>
        </section>

        <section>
            <button>Dashboard</button>
        </section>
    </nav>
  )
}

export default TopBar