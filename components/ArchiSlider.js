import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import Des from "@/components/Des";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

import styled from "styled-components";
import { third, fourth} from "@/lib/colors";
import SwiperCore, {Autoplay} from "swiper";

const Circle=styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: ${fourth};
margin: 10px auto;
`;

const EachSlide=styled.div`
background-color: ${third};
padding: 2vh;
width: 30vw;
box-shadow: 10px 15px 10px grey;
height: 100%;
margin-bottom: 50px;
z-index: -2;
`;


export default function ArchiSlider() {
  SwiperCore.use([Autoplay])
  return(
    <Swiper
    loop={true}
    autoplay={
      {
        delay: 2000
      }
    }
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={70}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
      <SwiperSlide> {slide()} </SwiperSlide>
    </Swiper>
  );
}

function slide(){
  return(
      <EachSlide>
          <Des>Lorem ipsum dolor </Des>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eaque, ipsam amet consectetur</p>
      <Circle></Circle>
      <Des>Lorem ipsum dolor </Des>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
      </EachSlide>
  );
}



