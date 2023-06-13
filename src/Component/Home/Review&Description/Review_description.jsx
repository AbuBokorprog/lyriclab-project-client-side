import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../../../assets/quote.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const Review_description = () => {
  return (
    <div className="my-20 flex gap-4">
      <div className="w-1/2">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card w-full h-100 py-12 px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p>
                  I thoroughly enjoyed the LyricalLab website class! The
                  instructor's teaching style was engaging, and the course
                  material was well-structured. I learned valuable skills in web
                  development and design that I could apply immediately. The
                  hands-on projects helped me gain practical experience, and the
                  instructor provided helpful feedback throughout the course.
                  Highly recommended!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full py-12 px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p>
                  I thoroughly enjoyed the LyricalLab website class! The
                  instructor's teaching style was engaging, and the course
                  material was well-structured. I learned valuable skills in web
                  development and design that I could apply immediately. The
                  hands-on projects helped me gain practical experience, and the
                  instructor provided helpful feedback throughout the course.
                  Highly recommended!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full py-12 px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p>
                  I thoroughly enjoyed the LyricalLab website class! The
                  instructor's teaching style was engaging, and the course
                  material was well-structured. I learned valuable skills in web
                  development and design that I could apply immediately. The
                  hands-on projects helped me gain practical experience, and the
                  instructor provided helpful feedback throughout the course.
                  Highly recommended!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card w-full h-full py-12 px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p>
                  I thoroughly enjoyed the LyricalLab website class! The
                  instructor's teaching style was engaging, and the course
                  material was well-structured. I learned valuable skills in web
                  development and design that I could apply immediately. The
                  hands-on projects helped me gain practical experience, and the
                  instructor provided helpful feedback throughout the course.
                  Highly recommended!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/7149172/pexels-photo-7149172.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Review_description;
