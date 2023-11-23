import React from 'react'
import ProfilePic from '../Assets/acc.jpg'
import {AiFillStar} from "react-icons/ai"
const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>
          What Are They Saying
        </h1>
        <p className='primary-text'>Honest Reviews From Our Trusted Customers</p>

      </div>
      <div className='testimonial-section-bottom'>
        <img className="img-purvi"src={ProfilePic} alt=""/>
        <p className='primary-text'>It is an amazing website and the order was delivered in the promised time! 
          Really loved the gift!. I would recommend it to all of you guys !
        </p>
        <div className='testimonials-stars-container'>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
          <AiFillStar/>
        </div>
        <h2>Kavya K</h2> 


      </div>
    </div>
  )
}

export default Testimonial
