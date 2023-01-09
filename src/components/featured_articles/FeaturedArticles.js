import React from 'react';
import './index.css';
import Article from './Article';
import Sidebar from './Sidebar';

import f1 from '../../assets/images/featured/featured-1.jpg';
import f2 from '../../assets/images/featured/featured-2.jpg';
import f3 from '../../assets/images/featured/featured-3.jpg';

const FeaturedArticles = () => {
  return (
    <div className='featured-articles header-offset'>
        <div className='featured-articles-container container d-grid'>
            {/* featured articles */}
            <div className='featured-content d-grid'>
                <div className='headline-banner'>
                    <h3 className='headline fancy-border'>
                        <span className='place-items-center'>Breaking News</span>
                    </h3>
                    <span className='headline-description'>Apple announces a new partnership...</span>
                </div>

                {imgArray.map((img) => (
                        <Article key={img.title} imgSrc={img.src}/>
                    ))}

            </div>
            
            {/* Trending News */}
            <Sidebar/>
        </div>
    </div>
  )
}

export default FeaturedArticles;

const imgArray = [
    {
        src: f1,
        title: 'featured-1'
    },
    {
        src: f2,
        title: 'featured-2'
    },
    {
        src: f3,
        title: 'featured-3'
    }
];