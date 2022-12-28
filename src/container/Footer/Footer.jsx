import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Lorem ipsum, dolor sit amet </p>
        <p className='p__opensans'>+91 98 95 96 94 96 </p>
        <p className='p__opensans'>+91 98 95 96 85 84 </p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.malabar} alt="footer logo" />
        <p className='p__opensans'>One cannot think well, love well and sleep well if one has not dined well</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday </p>
        <p className='p__opensans'>08:00 am - 12:00 am </p>
        <p className='p__opensans'>Saturday - Sunday </p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className='app__footer-copyright'>
      <p className='p__opensans'>All rights reserved</p>
    </div>
  </div>
);

export default Footer;
