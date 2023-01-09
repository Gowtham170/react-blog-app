import React from 'react'

const TrendingNews = ({imgSrc, trending_number}) => {
    return (
        <div>
            <a href='#' className='trending-news-box'>
                <div className='trending-news-image-box'>
                    <span className='trending-number'>{trending_number}</span>
                    <img src={imgSrc}
                        className="article-image"
                        alt=""></img>
                </div>
                <div className='trending-news-data'>
                    <div className='article-data'>
                        <span>Dec 5th 2021</span>
                        <span className='article-data-spacer'></span>
                        <span>8 min read</span>
                    </div>
                    <h3 className='title article-title'>Sample article title</h3>
                </div>
            </a>
        </div>
    )
}

export default TrendingNews;