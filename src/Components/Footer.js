import React from 'react'
import Logo from '../Assets/Screenshot 2023-11-21 153534.svg'
import { BsTwitter } from 'react-icons/bs'
import {SiLinkedin} from "react-icons/si";
import { BsYoutube } from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'> 
            <img src={Logo} alt=""/>
        </div>
        <div className='footer-icons'>
            <BsTwitter/>
            <SiLinkedin/>
            <BsYoutube/>
            <FaFacebookF/>
            <FaInstagram/>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>91*******</span>
                <span>22cse131@skcet.ac.in</span>
                <span>22cse144@skcet.ac.in</span>
                <span>22cse209@skcet.ac.in</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms and Conditions</span>
                <span>Private Policy</span> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
