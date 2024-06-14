import React, { useState } from 'react'
import '../styles/BlogDetails.css';
import { Page, Section } from '../components/tags'

function BlogDetails() {
    const [blogData, setBlogData] = useState([]);
  return (
    <Page className='blog_details_page'>
        {/* <h2></h2> */}

        <Section className='blog_img'>
            <img src='' />
        </Section>
    </Page>
  )
}

export default BlogDetails