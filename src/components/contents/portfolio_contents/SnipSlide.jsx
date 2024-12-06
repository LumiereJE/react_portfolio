import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const SnipSlide = ({ slide }) => {
  const [activeIndex, setActiveIndex] = useState();

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={500}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {slide.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/${img}.jpg`}
              alt={`슬라이드 이미지 ${idx + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SnipSlide;
