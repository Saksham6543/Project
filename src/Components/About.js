import React from 'react';
import AboutBackground from "../Assets/about-background.png"
import AboutBackgroundImage from "../Assets/1111.png"
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt=""/>
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt=""/>
        </div>
        <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 style={{color:'black'}}>Gifts that will light up your day...</h1>
            <p className="primary-text">
                Show your love and care through gifts that are as special as you are !
            </p>
            <p className='primary-text'>
            Gift your loved ones the gift they deserve 
                and lock the moments of happiness forever 🎁 !
            </p>

            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/>Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About
