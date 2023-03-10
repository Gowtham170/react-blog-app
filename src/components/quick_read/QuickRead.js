import React from 'react';
import './QuickRead.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const QuickRead = () => {

    const breakpoints = {
      
    }

    return (
        <div className='section'>
            <div className='container'>
                <h2 className='title section-title' data-name="Quick read">Quick Read</h2>

                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        700: {
                            width: 700,
                            slidesPerView: 2
                        },
                        1200: {
                            width: 1200,
                            slidesPerView: 3
                        }

                    }}
                    className='myswiper'
                >
                    <SwiperSlide className='swiper-wrapper'>
                        <a href='#' className='article swiper-slide'>
                            <img
                                src={require('../../assets/images/quick_read/quick_read_1.jpg')}
                                className='article-image'
                            />

                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 min red</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-wrapper'>
                        <a href='#' className='article swiper-slide'>
                            <img
                                src={require('../../assets/images/quick_read/quick_read_2.jpg')}
                                className='article-image'
                            />

                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 min red</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-wrapper'>
                        <a href='#' className='article swiper-slide'>
                            <img
                                src={require('../../assets/images/quick_read/quick_read_3.jpg')}
                                className='article-image'
                            />

                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 min red</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-wrapper'>
                        <a href='#' className='article swiper-slide'>
                            <img
                                src={require('../../assets/images/quick_read/quick_read_4.jpg')}
                                className='article-image'
                            />

                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 min red</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-wrapper'>
                        <a href='#' className='article swiper-slide'>
                            <img
                                src={require('../../assets/images/quick_read/quick_read_5.jpg')}
                                className='article-image'
                            />

                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 min red</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-wrapper'>
                        <a href='#' className='article swiper-slide'>
                            <img
                                src={require('../../assets/images/quick_read/quick_read_6.jpg')}
                                className='article-image'
                            />

                            <div className="article-data-container">
                                <div className="article-data">
                                    <span>Dec 5th 2021</span>
                                    <span className="article-data-spacer"></span>
                                    <span>8 min red</span>
                                </div>

                                <h3 className="title article-title">Is VR the future?</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default QuickRead;
