/**
 * Testimonials section: 4 customer feedback cards in a Swiper slider.
 * Swiper enables smooth horizontal scrolling and responsive slides per view.
 */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img from "../../assets/imagesAbout/01.png";
import svg from "../../assets/imagesAbout/02.png";
import { Autoplay } from "swiper/modules";

export default function TestimonialsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-24 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-14">
        <h2 className="text-2xl sm:text-4xl font-black text-(--secondary-color) mb-10 text-center">
          Customer Feedbacks
        </h2>
        {/* Swiper replaces static grid — responsive: 1/2/3 slides per view, no autoplay */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={1000} 
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-75"
        >
          {[1, 2, 3, 4].map((i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col gap-5 w-full h-full">
                <div className="px-4 py-3 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={img}
                      alt=""
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-(--secondary-color)">
                        Andrew D. Smith
                      </h4>
                      <p className="text-(--main-color) text-sm font-medium">
                        Manager
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={svg} alt="" />
                  </div>
                </div>
                <hr />
                <p className="text-gray-500 text-md leading-relaxed italic">
                  &ldquo;According to the council of supply chain professionals
                  the council of logistics management logistics is the process of
                  planning, implementing and controlling procedures&rdquo;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
