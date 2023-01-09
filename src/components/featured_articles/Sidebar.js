import React from 'react';
import './index.css';
import TrendingNews from './TrendingNews';
import t2 from '../../assets/images/trending/trending_2.jpg';
import t3 from '../../assets/images/trending/trending_3.jpg';
import t4 from '../../assets/images/trending/trending_4.jpg';
import t5 from '../../assets/images/trending/trending_5.jpg';

const imaArray = [
    {
        imgSrc: t2,
        trending_number: '01',
        imgTitle: 'trending-2'
    },
    {
        imgSrc: t3,
        trending_number: '02',
        imgTitle: 'trending-3'
    },
    {
        imgSrc: t4,
        trending_number: '03',
        imgTitle: 'trending-4'
    },
    {
        imgSrc: t5,
        trending_number: '04',
        imgTitle: 'trending-5'
    }
];

const Sidebar = () => {
    return (
        <div className='sidebar d-grid'>
            <h3 className='title content-title'>Trending News</h3>
            {imaArray.map((img) => (
                <TrendingNews key={img.imgTitle}
                    imgSrc={img.imgSrc} 
                    trending_number={img.trending_number}/>
            ))}
        </div>
    );
}

export default Sidebar;