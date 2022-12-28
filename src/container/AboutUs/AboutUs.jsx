import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon_img' />
        <p className='p__opensans'>Being the perfect amalgamation of indigenous and foreign flavors, the dishes of the Malabar are created with all natural ingredients procured locally with techniques and concepts borrowed from foreign traders. </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt="knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about spoon" className='spoon_img' />
        <p className='p__opensans'>Kerala's Malabar region is known for ethnic Moplah dishes. The traditional Moplah cuisine has its own distinct taste, being rich in flavor and ingredients it is a popular pick especially during the month of Ramzan.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
