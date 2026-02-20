/**
 * Category slider on Home. Swiper carousel with category images.
 */
import "./slider.css";
import Img1 from "../../assets/images/01.png";
import Img2 from "../../assets/images/05 (1).png";
import Img3 from "../../assets/images/08.png";
import Img4 from "../../assets/images/16.jpg";
import Img5 from "../../assets/images/03.png";
import Img6 from "../../assets/images/20.jpg";
import Img7 from "../../assets/images/02.png";
import Img8 from "../../assets/images/07.png";
import Img9 from "../../assets/images/01.png";
import Img10 from "../../assets/images/08.png";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Slider() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

  return (
    <section className="w-full overflow-hidden px-3 xl:px-24">
      <div className="w-full h-max border border-gray-300 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 8 },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative group cursor-pointer w-full h-48 border-l border-gray-300 bg-white flex flex-col items-center justify-center gap-2 overflow-hidden">
                <img
                  src={image}
                  alt="category"
                  className="w-24 h-24 object-contain"
                />
                <b className="text-sm text-gray-800">Organic Vegetables</b>
                <p className="text-sm text-(--main-color)">299 items</p>
                <span className="absolute bottom-0 left-0 h-1 bg-(--main-color) line-animation"></span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
