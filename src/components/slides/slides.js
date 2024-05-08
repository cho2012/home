import "./slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "./slide";
import { useRef } from "react";
import { useState } from "react";
function Slides() {
  const [oldSlide, setOldSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const sliderRef = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
  };
  const next = () => {
    sliderRef.current.slickNext();
  };
  const prev = () => {
    sliderRef.current.slickPrev();
  };
  const play = () => {
    sliderRef.current.slickPlay();
    setIsPlay(true);
  };

  const pause = () => {
    sliderRef.current.slickPause();
    setIsPlay(false);
  };
  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((_, index) => (
          <Slide
            key={index}
            next={next}
            prev={prev}
            play={play}
            pause={pause}
            isPlay={isPlay}
            activeSlide={activeSlide}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Slides;

const slides = [{ name: "0번" }, { name: "1번" }, { name: "2번" }];
