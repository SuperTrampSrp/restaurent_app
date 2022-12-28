import React from 'react';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='cheff'>
    <div className='app__wrapper_img app__wrapper__img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believs In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p className='p__opensans'>Assumenda laborum praesentium autem amet nihil dolore quaerat recusandae consequatur hic est? Adipisci, inventore. Culpa odit veniam reiciendis laborum eos assumenda quasi.</p>
        </div>
        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
