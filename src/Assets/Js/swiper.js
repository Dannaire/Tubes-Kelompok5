import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, Zoom } from "swiper";

import "../CSS/detailbiodata.scss";
import picone from "../img/Rasyid2.jpg";
import pictwo from "../img/ppp.jpg";
import picthree from "../img/nabila1.jpeg";
import pictfour from "../img/Novita2.jpeg";


export default function Slideswiper() {
  return (
    <>
      <div className="swiper-container">
      <div className="swiper-slide">
        <Swiper
          className="pop mySwiper"
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
        >
           <div className="swiper-container">
          <SwiperSlide>
            <img src={picone} alt="bg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="images" src={pictwo} alt="bg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="images" src={picthree} alt="bg" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="images" src={pictfour} alt="bg" />
          </SwiperSlide>
          </div>
        </Swiper>
   </div>
        <div className="buttonDiv"></div>
      </div>
    </>
  );
}