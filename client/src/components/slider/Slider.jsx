import React from 'react'
import './slider.css'

import { ArrowRightOutlined, ArrowLeftOutlined} from '@mui/icons-material'

import stormseeker from '../../assets/images/categories/stormseeker-rX12B5uX7QM-unsplash.jpg'

const slider = () => {
    
  const slideLeft = () => {
    var slide = document.querySelector('.slide');
    slide.scrollLeft = slide.scrollLeft - 463;
  }
  const slideRight = () => {
    var slide = document.querySelector('.slide');
    slide.scrollLeft = slide.scrollLeft + 463;
  }
  
  return (
    <div className="slider">
      <div className='title'>Popular services</div>
      <div className='sliderContainer'>
        <i className='slideIcon left' onClick={slideLeft}><ArrowLeftOutlined /></i>
        <div className='slide'>
          <div className='image'></div>
          <div className='image'><img src={stormseeker} alt=''></img></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
          <div className='image'></div>
        </div>
        <i className='slideIcon right' onClick={slideRight}><ArrowRightOutlined /></i>
      </div>
    </div>
  );
}

export default slider