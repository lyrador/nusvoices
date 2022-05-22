// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Media from './components/pages/Media';
import Trailer from './components/Trailer';
import Helmet from 'react-helmet';

function App() {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>NUS CAC Voices</title>
        <link rel="canonical" href="https://nusvoices.com" />
        <meta name="description" content="NUS CAC Voices, Premier Mandopop Group, SG" />
    </Helmet>
      <Router>
          <Navbar></Navbar>
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/services" element={<Services />} />
            <Route path = "/media" element={<Media />} />
            <Route path = "/sign-up" element={<SignUp />} />
            <Route path = "/trailer" element={<Trailer />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
