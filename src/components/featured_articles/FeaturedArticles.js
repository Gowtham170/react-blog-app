import React from 'react';
import './index.css';
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


                    <a href='#' className='article featured-article featured-article-1'>
                        <img src={f1}
                            alt="featured-article"
                            className='article-image'></img>
                        <span className='article-category'>Technology</span>

                        <div className='article-data-container'>
                            <div className='article-data'>
                                <span>Dec 5th 2021</span>
                                <span className='article-data-spacer'></span>
                                <span>8 min read</span>
                            </div>
                            <h3 className='title article-title'>Is VR the future?</h3>
                        </div>
                    </a>

                    <a href='#' className='article featured-article featured-article-2'>
                        <img src={f2}
                            alt="featured-article"
                            className='article-image'></img>
                        <span className='article-category'>Technology</span>

                        <div className='article-data-container'>
                            <div className='article-data'>
                                <span>Dec 5th 2021</span>
                                <span className='article-data-spacer'></span>
                                <span>8 min read</span>
                            </div>
                            <h3 className='title article-title'>Is VR the future?</h3>
                        </div>
                    </a>

                    <a href='#' className='article featured-article featured-article-3'>
                        <img src={f3}
                            alt="featured-article"
                            className='article-image'></img>
                        <span className='article-category'>Technology</span>

                        <div className='article-data-container'>
                            <div className='article-data'>
                                <span>Dec 5th 2021</span>
                                <span className='article-data-spacer'></span>
                                <span>8 min read</span>
                            </div>
                            <h3 className='title article-title'>Is VR the future?</h3>
                        </div>
                    </a>

                </div>

                {/* Trending News */}
                <Sidebar />
            </div>
        </div>
    )
}

export default FeaturedArticles;
