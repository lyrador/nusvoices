import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">  
            <p className='footer-subscription-heading'>
                Subscribe to our telegram channel to receive audition. concert updates and more!
            </p>
            {/* <p className='footer-subscription-text'>
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                    <input
                        type='email'
                        name='email'
                        placeholder='your Email'
                        className='footer-input'
                    />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div> */}
            <a target="_blank" href='https://t.me/+IdkuFpRTSuVmMWM1'>
                <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
            </a>
        </section>
        <div className="footer-links">
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Explore</h2>
                    <Link to ='/'>Home</Link>
                    <Link to ='services'>Services</Link>
                    <Link to ='media'>Media</Link>
                    <Link to ='about'>About Us</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Follow</h2>
                    <a target="_blank" href='https://www.instagram.com/nusvoices'>Instagram
                    </a>
                    {/* <img src='images/youtube-logo-png-46031.png' /> */}
                    <a target="_blank" href='https://www.facebook.com/nusvoices'>Facebook</a>
                    <a target="_blank" href='https://www.youtube.com/c/NUSVoices'>Youtube</a>
                    <a target="_blank" href='https://www.tiktok.com/@nusvoices'>TikTok</a>
                    <a target="_blank" href='https://linktr.ee/nuscacvoices'>Linktree</a>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                <h2>Location</h2>
                    <a>
                        CAC Clubroom, Level 5
                        Yusof Ishak House NUS
                        31 Lower Kent Ridge Rd, Singapore 119078
                    </a>
                    <h2></h2>
                    <h2>Contact</h2>
                    <a>
                        nusvoices13@gmail.com
                    </a>
                </div>
            </div>
        </div>
        {/* <section className='social-media'>
            <div className='social-medial-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        VOICES <i className='fab fa-typo3'/>
                    </Link>
                </div>
                <small className='website-rights'>TRVL @2022</small>
                <div className='social-icons'>
                    <Link
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-labels='Facebook'
                    >
                        <i className='fab fa-facebook-f'/>
                    </Link>
                    <Link
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-labels='Instagram'
                    >
                        <i className='fab fa-instagram'/>
                    </Link>
                </div>
            </div>
        </section> */}
    </div>
  )
}

export default Footer