import React from 'react';
import {SubHeading} from '../../components';
import { images} from '../../constants';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    }else{
      current.scrollRight += 300;
    }
  }
  const galleryImages = [
    images.gallery01, images.gallery02, images.gallery03, images.gallery04
  ];

  return(
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram' />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'AAA', marginTop:'2rem'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis magnam corporis ducimus eveniet temporibus doloribus exercitationem esse incidunt aliquid, ex facilis, omnis, officia fugit! Ad nesciunt enim vero error et?</p>
        <button className='custom__button' type='button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) =>(
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index+1}`}>
              <img src={image} alt="gallery image" />
              <BsInstagram className='app__gallery-image_icon' />
            </div>
          ))}
        </div>
        <div className='app__gallery-arrow'>
          <BsArrowLeftShort className='app__gallery-arrow_icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='app__gallery-arrow_icon' onClick={() => scroll('right')}/>
        </div>
      </div>
  </div>
)
};

export default Gallery;
