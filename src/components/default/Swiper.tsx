import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const SwiperImage: React.FC = () => {
  return (
    <section id="portfolio">

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom'
          }}
          loop={true}
          modules={[Navigation]}
        >
                  <SwiperSlide >
            <div>

                <img src={`/nails/nail1.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail2.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail3.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail4.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail5.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail6.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail7.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail8.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail9.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail10.jpeg`}  />

            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div>

                <img src={`/nails/nail11.jpeg`}  />

            </div>
          </SwiperSlide>
          <div id="container-nav">
          <div className="swiper-button-prev-custom">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>
          </div>
          <div className="swiper-button-next-custom">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>
          </div>
        </div>
      </Swiper>

    </section>
  );
};

export default SwiperImage;
