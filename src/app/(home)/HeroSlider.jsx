"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/bundle";
// import mainSlider from "@/data/mainSlider";
import SingleHeroSlider from "./SingleHeroSlider";
// import { mainSlider } from "@/data/mainSlider";
const mainSlider = [
  {
    id: 1,
    bg: "https://i.ibb.co/DbKJMZg/gal-9.jpg",
    title: "Welcome to \n Easy Shop World!",
  },
  {
    id: 2,
    bg: "https://i.ibb.co/9GG1jqS/gal-7.jpg",
    title: "Welcome to \n Easy Shop World!",
  },
  {
    id: 3,
    bg: "https://i.ibb.co/dWLGTWG/gal-1.jpg",
    title: "Welcome to \n Easy Shop World!",
  },
  {
    id: 4,
    bg: "https://i.ibb.co/DbKJMZg/gal-9.jpg",
    title: "Welcome to \n Easy Shop World!",
  },
  {
    id: 5,
    bg: "https://i.ibb.co/9GG1jqS/gal-7.jpg",
    title: "Welcome to \n Easy Shop World!",
  },
  {
    id: 6,
    bg: "https://i.ibb.co/DbKJMZg/gal-9.jpg",
    title: "Welcome to \n Easy Shop World!",
  },
  {
    id: 7,
    bg: "https://i.ibb.co/dWLGTWG/gal-1.jpg",
    title: "Welcome to \n Easy Shop World!",
  },
];

const HeroSlider = () => {
  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay, EffectFade]}
        navigation
        loop
        autoplay
        effect="fade"
      >
        {mainSlider.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleHeroSlider slider={slider}></SingleHeroSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
