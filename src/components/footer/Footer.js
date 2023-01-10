import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer section'>
            <div className='footer-container container d-grid'>

                <div className='company-data'>
                    <a href='#'>
                        <h2 className='logo'>NewsFlash</h2>
                    </a>
                    <p className='company-description'>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nisi dignissimos, dolor
                        laborum atque cum, illo maxime esse.
                    </p>

                    <ul className='list social-media'>
                        <li className='list-item'>
                            <a href="#" className='list-link'>
                                <i className='ri-instagram-line'></i>
                            </a>
                            <a href="#" className='list-link'>
                                <i className='ri-facebook-circle-line'></i>
                            </a>
                            <a href="#" className='list-link'>
                                <i className='ri-twitter-line'></i>
                            </a>
                            <a href="#" className='list-link'>
                                <i className='ri-pinterest-line'></i>
                            </a>
                        </li>
                    </ul>

                    <span className='copyright'>&copy; 2023 NewsFlash. All rights reserved.</span>
                </div>

                <div>
                    <h6 className='title footer-title'>Category</h6>
                    <ul className='list footer-list'>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className='title footer-title'>Useful Links</h6>
                    <ul className='list footer-list'>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className='title footer-title'>Company</h6>
                    <ul className='list footer-list'>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                        <li className='list-item'>
                            <a href="#" className='list-link'>Sample Item</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer;