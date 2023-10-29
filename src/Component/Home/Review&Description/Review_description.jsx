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
    <div className="my-20 container mx-auto px-4 justify-center items-center lg:flex gap-4">
      <div className="w-1/2 h-96">
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
            <div className="card lg:w-full lg:h-full lg:py-12 lg:px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p className="text-sm">
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
            <div className="card lg:w-full lg:h-full lg:py-12 lg:px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p className="text-sm">
                  Taking the LyricalLab website class was a game-changer for me.
                  The class not only taught me the technical aspects of building
                  websites but also emphasized creativity and user experience.
                  The instructors were knowledgeable and approachable, always
                  willing to answer questions and provide guidance. I now feel
                  confident in my ability to create visually stunning and
                  user-friendly websites. Thank you, LyricalLab!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card lg:w-full lg:h-full lg:py-12 lg:px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p className="text-sm">
                  The LyricalLab website class exceeded my expectations! The
                  curriculum was comprehensive, covering everything from HTML
                  and CSS to responsive design and JavaScript. The instructors
                  were fantastic, breaking down complex concepts into easily
                  understandable chunks. The class projects allowed me to apply
                  what I learned and build a professional-looking portfolio
                  website. I highly recommend this class to anyone interested in
                  web development
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card lg:w-full lg:h-full lg:py-12 lg:px-8 bg-red-200 shadow-xl">
              <div className="card-body">
                <img src={quote} alt="" className="w-10" />
                <p className="text-sm">
                  I had an amazing experience with the LyricalLab website class.
                  The instructors were not only experts in their field but also
                  great mentors. They provided valuable insights and practical
                  tips that helped me improve my coding skills. The class
                  fostered a collaborative learning environment, and I
                  appreciated the constructive feedback from both instructors
                  and peers. I now feel more confident and ready to pursue a
                  career in web development. Thank you, LyricalLab!
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <img
          className="w-full"
          src="https://images.pexels.com/photos/7149172/pexels-photo-7149172.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Review_description;
