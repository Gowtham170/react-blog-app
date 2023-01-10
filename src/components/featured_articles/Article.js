import React from 'react';

const Article = ({ imgSrc }) => {
    return (
        <a href='#' className='article'>
            <img src={imgSrc}
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
    );
}

export default Article;