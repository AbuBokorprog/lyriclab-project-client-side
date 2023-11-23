import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    //progressCircle.current.style.setProperty("--progress", 1 - progress);
    //progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="container mx-auto px-4">
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
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg"
            className=" w-full max-h-full"
          />
          <div className=" absolute lg:top-80 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn btn-warning mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2022/11/28/00/42/man-7620937_1280.jpg"
            className="w-full max-h-full"
          />
          <div className=" absolute lg:top-96  text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2019/01/20/05/30/guitar-3943201_1280.jpg"
            className=" w-full max-h-full"
          />
          <div className=" absolute lg:top-96 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/21/05/bass-guitar-1841186_1280.jpg"
            className="w-full max-h-full"
          />
          <div className=" absolute lg:top-96 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/258288/pexels-photo-258288.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full max-h-full"
          />
          <div className=" absolute lg:top-96 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/4934190/pexels-photo-4934190.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full max-h-full"
          />
          <div className=" absolute lg:top-96 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/4005446/pexels-photo-4005446.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full max-h-full"
          />
          <div className=" absolute lg:top-96 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/4471325/pexels-photo-4471325.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full max-h-full"
          />
          <div className=" absolute lg:top-96 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1835686/pexels-photo-1835686.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full max-h-full"
          />
          <div className=" absolute lg:top-96 text-center lg:px-20 text-white bottom-10">
            <h2 className="lg:text-5xl font-semibold lg:mb-4">
              Discover, Learn, and Create with Us!
            </h2>
            <h5 className="lg:text-xl font-bold text-red-500 mb-1">
              Enrolled Today
            </h5>

            <h4 className="lg:text-3xl font-semibold">
              Discover the Rhythm of Success with LyricalLAB! Click here to
              embark on a melodic journey and uncover your musical genius.
              Discover More.
            </h4>
            <button className="btn bg-red-500 mt-3 ">Discover More</button>
          </div>
        </SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end">
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
