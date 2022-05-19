import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-3.mp4' autoPlay loop muted playsInline/>
        <h1>HEAR IT. SEE IT. LIVE IT.</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Link to ='/about' className='btn-mobile'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                FIND OUT MORE
                </Button>
            </Link>
            <Link to ='/trailer' className='btn-mobile'>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection;