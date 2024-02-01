import React from 'react';
import '../css/about.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className='header'>
        <h1>About Us</h1>
        <p>Welcome to our platform! I hope you find what you are looking for here.</p>
        <button className="get-started-button">Scroll Down</button>
      </div>

   

      <div className="about-details">
        <div className="text-content">
          <h1>Who We Are?</h1>
          <p>We are a group of passionate developers and designers who have come together to create this platform. We aim to provide the best possible service to our users by offering high-quality videos that guide them to make things handmade for home and learn how to do necessary handy work at their houses.</p>
        </div>
        <div className="image-content">
          <img src="https://img.ws.mms.shopee.vn/sg-11134201-22100-0efa3qjga0hv42" alt="Our Team" />
        </div>
      </div>

      <div className='service'>
        <h1>Our HandWork Services :</h1>
        <div className="service-content">
          <img src='https://www.shutterstock.com/image-photo/black-family-painting-house-wall-600nw-1070742824.jpg' alt="Our Services" />
          <p>In HandiWork page you will find a lot of services that we provide to help you in your daily life work at the house without the need for foreign services. We provide step-by-step guides through videos, teaching you how to do it from scratch.</p>
        </div>
      </div>



      <div className="about-details">
        <div className="text-content">
          <h1>Our HandMade services :</h1>
          <p>In HandMade page you will discover our beautifull ways to make a lot of decorative things for your house with the lowest costs provided with videos that teach you how you can make it step by step . So make your house more beautifull & wonderfull with Us .</p>
        </div>
        <div className="image-content">
          <img src="https://i5.walmartimages.com/asr/56566034-97e2-4a49-adfd-730bc363fc23.53529513a16f27fed7baae8fcf8519c7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" alt="Our service" />
        </div>
      </div>

</div>

  );
};

export default AboutUs;


