import React from 'react';
import './index.css';
import PopularTag from './PopularTag';

import travelTag from '../../assets/images/tags/travel-tag.jpg';
import foodTag from '../../assets/images/tags/food-tag.jpg';
import technologyTag from '../../assets/images/tags/technology-tag.jpg';
import healthTag from '../../assets/images/tags/health-tag.jpg';
import natureTag from '../../assets/images/tags/nature-tag.jpg';
import fitnessTag from '../../assets/images/tags/fitness-tag.jpg';

const PopularTags = () => {
  return (
    <div className='section'>
        <div className='container'>
            <h2 className='title section-title' data-name="Popular Tags">Popular Tags</h2>

            <div className='popular-tags-container d-grid'>
                {imgArray.map((img) => (
                    <PopularTag key={img.imgTitle} imgSrc={img.imgSrc} tagName={img.tagName}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PopularTags;

const imgArray = [
    {
        imgSrc: travelTag,
        imgTitle: 'travelTag',
        tagName: 'Travel'
    },
    {
        imgSrc: foodTag,
        imgTitle: 'foodTag',
        tagName: 'Food'
    },
    {
        imgSrc: technologyTag,
        imgTitle: 'technologyTag',
        tagName: 'Technology'
    },
    {
        imgSrc: healthTag,
        imgTitle: 'healthTag',
        tagName: 'Health'
    },
    {
        imgSrc: natureTag,
        imgTitle: 'natureTag',
        tagName: 'Nature'
    },
    {
        imgSrc: fitnessTag,
        imgTitle: 'fitnessTag',
        tagName: 'Fitness'
    }
] 