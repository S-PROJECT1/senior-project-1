import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/App.css';

import home from './Assets/home.png'; 
import home1 from './Assets/home1.png'; 


const CarouselImages = [home ,home1];

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {CarouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;




