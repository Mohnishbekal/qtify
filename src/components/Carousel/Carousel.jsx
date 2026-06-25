import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Carousel({ items }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={"auto"}
      spaceBetween={24}
      slidesPerGroup={2}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} style={{ width: "auto" }}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;