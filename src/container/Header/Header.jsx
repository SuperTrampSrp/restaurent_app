import React from 'react';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id = 'home'>
    <div className='app__wrapper_info'>
      <SubHeading title = 'Chase the new flavour'/>
      <h1 className='app__header-h1'>Indulge in Delectable Dishes From Malabar</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>A pure gustatory delight satiates the soul, leaving a person content but wanting more and this truly defines the Malabar cuisine.  Caressed by the Arabian Sea and guarded by the Western Ghats the Malabar region northern Kerala has a rich culinary history, drawing influence from Arab, Chinese and European cuisine seeping in and blending with the local traditions, giving Malabar food its unique characteristics.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>
    
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
