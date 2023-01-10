import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter section'>
        <div className='container'>
            <h2 className='title section-title' data-name='News Letter'>News Letter</h2>
            
            <div className='form-container-inner'>
                <h6 className='title newsletter-title'>Subscribe to NewsFlash</h6>
                <p className='newsletter-description'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit.</p>
                <form className='form'>
                    <input type='text' className='form-input' placeholder='Enter your email address'></input>
                    <button className='btn place-items-center form-btn'>
                        <i className='ri-mail-send-line'></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default NewsLetter;