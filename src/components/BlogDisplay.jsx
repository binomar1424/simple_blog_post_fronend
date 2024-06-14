import React, { useEffect, useState } from 'react'
import '../styles/BlogDisplay.css'
import { Box, Wrapper } from './tags'
import axios from 'axios';
import { format } from 'date-fns';

function BlogDisplay() {
    const [blogsData, setBlogsData] = useState([]);

    useEffect(() => {
        async function getBlogs() {
            const resp = await axios.get('http://localhost:2300/blogs')
            if (resp.status == 200) {
                setBlogsData(resp.data);
            }
        }
        getBlogs();
    },[]);

  return (
    <Wrapper>
        <h3>Recently uploaded</h3>
        <br /><br />
        <Wrapper className='blog_wrapper'>
            {blogsData.length ? (
                blogsData.map((value, index) => (
                    <Box className='blog_box' key={index}>
                        <div className='blog_box_img_div'>
                            <img src={value.blog_img} />
                        </div>

                        <div className='blog_box_details_div'>
                            <p>{value.blog_title}</p>

                            <div className='blog_box_publish_details'>
                                <div className='publisher'>
                                    {/* <img src={pu} /> */}
                                    <span>{value.publisher_name}</span>
                                </div>

                                <span>{value.published_date ? format(value.published_date, 'dd-MMM') : '--'}</span>
                            </div>
                        </div>
                        </Box>
                ))
            ): <p>Blog data is not available</p>}
        </Wrapper>
    </Wrapper>
  )
}

export default BlogDisplay