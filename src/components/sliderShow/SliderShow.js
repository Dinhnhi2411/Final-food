import React, { useState, useRef, useEffect } from "react";
import { poster } from "../../data/Data";
import "./sliderShow.css";

function SliderShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // let sliders = [];

  // banner.forEach((slider) => {
  //     sliders = [...sliders, slider.sliderShow]
  //     console.log(slider.sliderShow)
  // });

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === poster.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );
    return () => {
      resetTimeout();
    };
    // eslint-disable-next-line 
  }, [poster, index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {poster.map((item, index) => (
          <img key={item.id} className="slide" src={item.cover} alt="" />
        ))}
      </div>

      <div className="slideshowDots">
        {poster.map((item, idx) => (
          <div
            key={item.id}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
    
  );
}

export default SliderShow;
