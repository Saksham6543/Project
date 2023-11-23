import React from 'react';
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/1.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container' >
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        </div>
        <div className="home-text-section">
            <h1 className="primary-heading">
                Gifts that last for a Lifetime... 
            </h1>
            <p className="primary-text">
                Flowers that Tell a Story <br></br>
                Thoughtfully Personalized Gifts 
            </p>
            <button className="secondary-button">
                Order Now <FiArrowRight/>
            </button>
        </div>
        <div className="home-image-container">
            <img src={BannerImage} alt=''/>
        </div>
      </div>
    </div>
  );
};

export default Home
