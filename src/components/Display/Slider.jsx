import React from 'react';
import { Carousel, Button } from 'antd';
import { css } from '@emotion/react';
import img from '@/assets/images/Macbook.png'
// const sliderStyles = css`
//   .slider {
//     width: 100%;
//     height: 400px;
//     overflow: hidden;
//     margin: 0 auto;
//   }

//   .slider-inner {
//     display: flex;
//     transition: transform 0.5s ease;
//   }

//   .slide {
//     flex: 1;
//     background-size: cover;
//     background-position: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     color: white;
//   }

//   .slide-content {
//     max-width: 500px;
//     margin: 0 auto;
//   }

//   .prev-button,
//   .next-button {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     cursor: pointer;
//     background-color: rgba(0, 0, 0, 0.5);
//     color: white;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//   }

//   .prev-button {
//     left: 20px;
//   }

//   .next-button {
//     right: 20px;
//   }
// `;

const Slider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = React.useState(0);

  const handlePrevClick = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex + slides.length - 1) % slides.length);
  };

  const handleNextClick = () => {
    setActiveSlideIndex((prevIndex) => prevIndex % slides.length);
  };

  const slides = [
    {
      title: 'Mobile Phones',
      image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
      content: 'Explore our wide selection of mobile phones from top brands.',
    },
    {
      title: 'Smart TV',
      image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
      content: 'Upgrade your home entertainment with our latest smart TVs.',
    },
    {
      title: 'Smart Watch',
      image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
      content: 'Stay connected and stylish with our range of smart watches.',
    },
    {
      title: 'Laptops',
      image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
      content: 'Find the perfect laptop for your needs and budget.',
    },
    {
      title: 'Drones',
      image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
      content: 'Capture stunning aerial footage with our high-end drones.',
    },
    {
      title: 'Headphones',
      image: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX679_.jpg',
      content: 'Immerse yourself in your music with our premium headphones.',
    },
  ];

  return (
    <div >
      <Carousel activeIndex={activeSlideIndex}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.image} alt={slide.title} />
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.content}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <Button className="prev-button" onClick={handlePrevClick}>قبلی</Button>
      <Button className="next-button" onClick={handleNextClick}>بعدی</Button>
    </div>
  );
};

export default Slider;
