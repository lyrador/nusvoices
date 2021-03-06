import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import Video from '../videos/video-5.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={Video} loop autoPlay muted playsInline/>
        <h1>HEAR IT. SEE IT. LIVE IT.</h1>
        {/* <h2>NUS' Premier Mandopop Group</h2> */}
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
                    WATCH TEASER <i className='far fa-play-circle'/>
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection;