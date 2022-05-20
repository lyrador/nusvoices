import React from 'react';
import '../App.css';
import './AboutSection.css';
import Slider from './Slider/Slider';

function AboutSection() {
  return (     
    <div>
        {/* <section className='hero-container-2'> */}
            {/* <img src='images/750_0507.jpg'></img> */}
            <Slider></Slider>
        {/* </section> */}
        <section className='hero-container-3'>
            <h1>PLAY. SING. LOVE.</h1>
            <br></br>
            <h2>Who is NUS CAC Voices?</h2>
            <p>
                Voices is a family of students from the National University of Singapore (NUS) who share a common passion for the performance of Mandopop music. Established in 1999, Voices has grown beyond its name to become a community of talented vocalists and instrumentalists alike who perform a variety of genres on and off campus.
                <br></br>
                <br></br>
                While specialising in Mandopop, Voices boasts a wide-ranging repertoire comprising mainstream and indie music across many languages such as English, Cantonese, and Japanese. Voices is thus the go-to choice of live music for both on-campus and external events.
                Many of Voices’ talents have gone on to become successful individuals in the local music scene. They include SPOP Sing!’s Top 20 finalists Fu Qiaohan and Kenneth Toh, local singer-songwriters Ruth Kueo Miaoru and See Kai Zheng, as well as singer and host Vee Yi Wei Ni.
                <br></br>
                <br></br>
                Voices holds two exciting concerts every academic year. Prelude in the first semester features performances by our new members, and Emerge in the second semester showcases the best of all our talents.
                Like-minded NUS students who can sing and/or play musical instruments are welcome to join Voices’ auditions held in August at the start of every academic year.
            </p>
        </section>
    </div>
  )
}

export default AboutSection;