import React from 'react';
import '../App.css';
import { Button } from './Button';
import './InstagramFeed.css';
import { Link } from 'react-router-dom';
import InstaFeeds from './Components/InstaFeeds'

const InstagramFeed = () => {
  return (
    <>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Instagram Feed with Instagram API</h1>
      </header>

      <InstaFeeds token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
    </>
  );
}

export default InstagramFeed;