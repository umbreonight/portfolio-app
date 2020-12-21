import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <i className="icon icon-36 slick-arrow slick-prev" onClick={onClick}>
      chevron_left
    </i>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <i className="icon icon-36 slick-arrow slick-next" onClick={onClick}>
      chevron_right
    </i>
  );
};

const SlickSlider = props => {

  let { children, options } = props;

  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    swipe: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: '60px',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 940,
        settings: {
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
        }
      },
    ]
  };

  const slick = { ...settings, ...options };

  return (
    <div className="slider">
      <Slider {...slick}>
        {children}
      </Slider>
    </div>
  );
};

export default SlickSlider;
