import React, { useEffect, useMemo, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css'
import carouselDummy from '../../assets/dummyData/carousel';
import Slide from './slide/Slide';
import { nanoid } from 'nanoid';

export default function ImageSlider() {

  const cardummyLen = useMemo(() => carouselDummy.length, [])
  const [slidesToShow, setSlidesToShow] = useState(3);


  //  when window size will increase or decrase using this side effect we can manipulate design of carousel using useEffect HOOK.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 990) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(cardummyLen);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();


    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, []);


  const settings = {
    dots: slidesToShow === 1 ? true : false,
    arrows: slidesToShow === 1 ? false : true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    cssEase: "linear"
  };

  return (
    <div className={`${styles.container} image-slider-container`}>
      <Slider {...settings}>
        {
          carouselDummy.map((slide_data) => {
            return <div key={nanoid()}>
              <Slide slide_data={slide_data} />
            </div>
          })
        }
      </Slider>
    </div>
  );
}