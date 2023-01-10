import React from 'react'
import './index.css';
import OlderPost from './OlderPost';

import op1 from '../../assets/images/older_posts/older_posts_1.jpg';
import op2 from '../../assets/images/older_posts/older_posts_2.jpg';
import op3 from '../../assets/images/older_posts/older_posts_3.jpg';
import op4 from '../../assets/images/older_posts/older_posts_4.jpg';
import op5 from '../../assets/images/older_posts/older_posts_5.jpg';
import op6 from '../../assets/images/older_posts/older_posts_6.jpg';

const OlderPosts = () => {
    return (
        <div className='older-posts section'>
            <div className='container'>
                <h2 className='title section-title' data-name="Older Posts">Older Posts</h2>
               
                <div className='older-posts-grid-wrapper d-grid'>
                   {imgArray.map((img) => (
                        <OlderPost key={img.imgTitle} imgSrc={img.imgSrc}/>
                   ))}
                </div>

                <div className='see-more-container'>
                    <a href='#' className='btn see-more-btn place-items-center'>
                        See more <i className='ri-arrow-right-s-line'></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default OlderPosts;

const imgArray = [
    {
        imgSrc: op1,
        imgTitle: 'Older_Posts_1'
    },
    {
        imgSrc: op2,
        imgTitle: 'Older_Posts_2'
    },
    {
        imgSrc: op3,
        imgTitle: 'Older_Posts_3'
    },
    {
        imgSrc: op4,
        imgTitle: 'Older_Posts_4'
    },
    {
        imgSrc: op5,
        imgTitle: 'Older_Posts_5'
    },
    {
        imgSrc: op6,
        imgTitle: 'Older_Posts_6'
    }
]