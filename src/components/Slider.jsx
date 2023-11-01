import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Slider.css";

const Slider = ({ slides, spaceBetween = 0, slidesPerView = 1 }) => {
  return slidesPerView > 1 ? (
    <>
      <Swiper
        className="mobile"
        loop={true}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
      >
        {slides &&
          slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        className="desktop"
        loop={true}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
        }}
      >
        {slides &&
          slides.map((slide, index) => (
            <SwiperSlide key={index}>{slide}</SwiperSlide>
          ))}
      </Swiper>
    </>
  ) : (
    <Swiper
      loop={true}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 1000,
      }}
    >
      {slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
