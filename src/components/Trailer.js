import React from 'react';
import '../App.css';
import { Button } from './Button';
import ReactPlayer from 'react-player';
import './Trailer.css';

function Trailer() {
  return (
    <div className='trailer-container'>
      <div className='trailer-inner'>
        <ReactPlayer className='video'
          width='100%' 
          height='100%' 
          controls 
          url='https://www.youtube.com/watch?v=2HOBFiwBqbI&t=392s' 
          />
      </div>
    </div>
  )
}

export default Trailer;