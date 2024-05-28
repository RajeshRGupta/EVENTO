import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

const Slider = () => {
  return (
    <>
<Splide aria-label="My Favorite Images h-100">
  <SplideSlide className='h-100'>
    {/* <img src="image1.jpg" alt="Image 1"/> */}
    <div className="iner-slider h-100 w-100"></div>
  </SplideSlide>
  <SplideSlide>
    {/* <img src="image2.jpg" alt="Image 2"/> */}
    <div className="iner-slider h-100 w-100"></div>

  </SplideSlide>
</Splide>
    </>
  )
}

export default Slider
