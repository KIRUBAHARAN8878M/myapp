import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.template.net/86367/Pizza-Day-Offer-Youtube-Banner-Template.jpeg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://couponswala.com/blog/wp-content/uploads/2020/03/dominos_buy1get1-min-min.png"
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://pbs.twimg.com/media/Cn8-MQOUIAQxNNx.jpg"
          alt="Third slide"
        />

     
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel ;