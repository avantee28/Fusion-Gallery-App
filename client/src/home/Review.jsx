import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import { FaStar } from 'react-icons/fa6';
import { Avatar } from 'flowbite-react';

const Review = () => {
  return (
    <>
      <div className="my-12 px-4 lg:px-24">
        <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
          {' '}
          Featured Art
        </h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className=" bg-white py-8 px-4 md:m-5 rounded-lg border">
              <div className="space-y-6">
                <img
                  src="src/assets/banner-arts/art3.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" bg-white py-8 px-4 md:m-5 rounded-lg border">
              <div className="space-y-6">
                <img
                  src="src/assets/banner-arts/art2.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" bg-white py-8 px-4 md:m-5 rounded-lg border">
              <div className="space-y-6">
                <img
                  src="src/assets/banner-arts/art5.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className=" bg-white py-8 px-4 md:m-5 rounded-lg border">
              <div className="space-y-6">
                <img
                  src="src/assets/banner-arts/art4.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Review;