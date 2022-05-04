import React from 'react';
import '../App.css';
import './Components.css'

function Hero() {
  return (
    <>
        <div className='hero-container'>

            <div className='hero-img'>
                <div className='img'>
                    <div class="overlay">
                        {/* <i className='fab fa-typo3'></i> */}
                        <i class="fas fa-link"></i>
                    </div>
                </div>
            </div>
            <div className='hero-text'>
                <h1>JOHN MICHAEL GADOT</h1>
                <p>Web Developer / Designer</p>
                <button className='hero-btn'>Contact <i class="far fa-paper-plane"></i></button>
            </div>
        </div>
    </>
  )
}

export default Hero;