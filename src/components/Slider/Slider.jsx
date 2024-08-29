import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./slider.scss";

const Slider = ({items}) => {
  console.log("items", items);
  return (
    <Swiper
      className={"slider"}
      modules={[Navigation, Autoplay]}
      slidesPerView={2}
      navigation
      autoplay={{delay: 4000, disableOnInteraction: false}}
      loop={true}
      breakpoints={{
        768: {slidesPerView: 2.3},
        320: {slidesPerView: 1},
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="slider-image-holder">
            <img src={item.src} alt={""} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
