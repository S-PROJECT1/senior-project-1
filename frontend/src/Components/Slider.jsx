import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
      const [index, setIndex] = useState(0)
      const handleSelect = (selectedIndex) => {
            setIndex(selectedIndex)
      }
      return (
            <Carousel activeIndex={index} onSelect={handleSelect}>

                  <Carousel.Item className="slider-background2" interval={2000}>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                              <img
                                    style={{ height: "600px", width: "99%" }}
                                    className=""
                                    src="https://media.wired.com/photos/612e57f96b5b362697c4bf0b/master/pass/Games-The_Witcher_3_Wild_Hunt_They_messed_with_the_wrong_person_RGB.jpg"
                                    alt="First slide"
                              />

                        </div>
                  </Carousel.Item>

                  <Carousel.Item className="slider-background3" interval={2000}>
                        <div className="d-flex flex-row justify-content-center align-items-center">
                              <img
                                    style={{ height: "600px", width: "99%" }}
                                    className=""
                                    src="https://images7.alphacoders.com/132/1323379.png"
                                    alt="First slide"
                              />

                        </div>
                  </Carousel.Item>

            </Carousel>
      );
};

export default Slider;