import React from 'react'
import '../styles/LandingPage.css'
import { Page, Section } from '../components/tags'
import TopBar from '../components/TopBar'
import BlogDisplay from '../components/BlogDisplay'

function LandingPage() {
  return (
    <Page className='landing_page'>
        {/* T O P   S E C T I O N */}
        <Section className='top_section'>
            <TopBar />

            <section className='landing_page_welcome_section'>
                {/* <h1>A Thriving Society</h1> */}
                {/* <p>Embrace wisdom in your thoughts, clarity in your words, <br />and mindfulness in your actions.</p> */}
                <h1>Simple Blog Website</h1>
            </section>
        </Section>

        <Section className='landing_page_blog_section'>
            <BlogDisplay />
        </Section>

    </Page>
  )
}

export default LandingPage