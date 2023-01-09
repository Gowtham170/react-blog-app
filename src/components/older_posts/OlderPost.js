import React from 'react';
import './index.css'

const OlderPost = ({imgSrc}) => {
    return (
        <a className='article d-grid'>
            <div className='article-image-wrapper'>
                <img src={imgSrc}
                    className='article-image'></img>
            </div>

            <div className="article-data-container">
                <div className="article-data">
                    <span>Dec 5th 2021</span>
                    <span className="article-data-spacer"></span>
                    <span>8 min red</span>
                </div>

                <h3 className="title article-title">Is VR the future?</h3>
                <p>Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Facilis nihil, incidunt ab, consectetur est pariatur
                    ipsa neque perspiciatis id temporibus laudantium. Molestiae id blanditiis
                    quia quaerat dolor vel, ullam voluptatem?</p>
            </div>
        </a>
    );
}

export default OlderPost;