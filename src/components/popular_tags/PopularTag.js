import React from 'react';
import './index.css';

const PopularTag = ({imgSrc, tagName}) => {
    return (
        <a href='#' className='article'>
            <span className='tag-name'>#{tagName}</span>
            <img src={imgSrc} className='article-image'></img>
        </a>
    )
}

export default PopularTag;