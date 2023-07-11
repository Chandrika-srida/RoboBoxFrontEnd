import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Des from "@/components/Des";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Autoplay } from "swiper";


import styled from "styled-components";
import { third, fourth,fifth } from "@/lib/colors";

const Image = styled.div`
  width: 15vw;
  height: 40vh;
  background-color: ${fourth};
  margin: 10px auto;
  border-radius: 10px;
`;

const EachSlide = styled.div`
  background-color: ${third};
  padding: 10px 10px;
  width: 20vw;
  z-index: -2;
  margin: 8vh 0px;
`;

export default function TestiSlider() {
  SwiperCore.use([Autoplay])

  return (
    <Swiper
    loop={true}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={2.5}
      effect='fade'
      crossFade= {true}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 2000 }}
      onSlideChange={() => console.log("slide change")}
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

function slide() {
  return (
    <EachSlide>
      <Image></Image>
      <Des>Lorem ipsum dolor </Des>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </EachSlide>
  );
}
