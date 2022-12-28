import React from 'react';
import {images, data} from '../../constants';
import {SubHeading, MenuItem} from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id = 'menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title='Menu That Fits Your Palette' />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Highlights of Malabar</p>
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, i) =>(
            <MenuItem key={wine.title+i} title={wine.title} price = {wine.price} tags = {wine.tags} />
          ))}
        </div>
      </div>
      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu image" />
      </div>
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktail, i) =>(
            <MenuItem key={cocktail.title+i} title={cocktail.title} price = {cocktail.price} tags = {cocktail.tags} />
            ))}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
        <button className='custom__button' type='button'>View More</button>
      </div>
  </div>
);

export default SpecialMenu;
