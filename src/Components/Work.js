import React from 'react';
import CustomGifts from "../Assets/13.png";
import ChooseMeals from "../Assets/choose-image.png";
import Deliverymeals from "../Assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image:CustomGifts,
            title:"Customized",
            text:"Get all types of Customized Gifts!",

        },
        {
            image:ChooseMeals,
            title:"Trending",
            text:"Order Gifts that are on Trend",
        },
        {
            image:Deliverymeals,
            title:"One Day Delivery",
            text:"Get all types of Gifts within 24 hours!",
        },
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'> Work</p>
            <h1 className='primary-heading'> How It Works</h1>
            <p className='primary-text'>
                Get the reviews from our Happy Customers 
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work
import React from 'react'

const Work = () => {
  return (
    <div>
      
    </div>
  )
}

export default Work
