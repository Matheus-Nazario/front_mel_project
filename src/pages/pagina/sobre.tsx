import Head from 'next/head';
import Image from 'next/image';

import { teams } from '@/utils/data/teams';
import { partners } from '@/utils/data/partners';

// Swiper
// import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { bannerAboutLanguage } from '@/dictionaries/languages/pages/About/language';
import { useRouter } from 'next/router';
import { ArrowsInLineVertical, MouseSimple } from 'phosphor-react';
import { Link as ScrollLink } from 'react-scroll';
import { FullscreenExitOutlined } from '@ant-design/icons';

// Import fade effect
const { Fade } = require('react-reveal');

export default function PageAbout() {
  const { locale }: any = useRouter();

  

  return (
    <>
      <Head>
        <title>Sobre | Resolv AI inteligência em dados</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <section className="mt-[90px] h-auto md:-py-10 md:min-h-[calc(100vh-90px)] flex semi-transparent-bg-mel">
          <div className="flex-1 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-13 p-64 ">


   <div className="flex-1 md:flex-2 w-full h-full lg:flex-2">
  <Fade top>
    <img
      src="Logo_mel_png.png"
      alt="Logo"
      className="w-full h-full"
    />
  </Fade>
</div>
</div>
      </section>

      <section className=" mt-[-90px] bg-briefing bg-center bg-cover bg-no-repeat flex items-center transition-all">
    <div className="swiper-container two">
		<div className="swiper-wrapper">
							<div className="swiper-slide">
					<div className="slider-image">
          <img src="nails\nail_3.jpg" alt="Descrição da imagem" />
					</div>
				</div>
							<div className="swiper-slide">
					<div className="slider-image">
          <img src="nails\nail_2.jpg" alt="Descrição da imagem" />
					</div>
				</div>
							<div className="swiper-slide">
					<div className="slider-image">
          <img src="nails\nail_4.jpg" alt="Descrição da imagem" />
					</div>
				</div>
							<div className="swiper-slide">
					<div className="slider-image">
          <img src="nails\nail_5.jpg" alt="Descrição da imagem" />
					</div>
				</div>
							<div className="swiper-slide">
					<div className="slider-image">
          <img src="nails\nail_2.jpg" alt="Descrição da imagem" />
					</div>
				</div>
		</div>
		<div className="swiper-pagination"></div>
	</div>
      </section>

      {/* <section className="bg-client bg-center bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto px-8 py-20">
          <div className="text-gray-600 flex flex-col items-center">
            <Fade top>
              <h1 className="text-xl md:text-3xl max-w-2xl text-center">
                {businessTitle}
              </h1>
            </Fade>
          </div>

          <div className="mt-10">
            <Swiper
              pagination={true}
              // modules={[Pagination, Autoplay]}
              className="testimonialsSwiper"
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 102000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },

                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {partners.map((item, index) => {
                return (
                  <Fade center>
                    <SwiperSlide key={index}>
                      <div className="flex flex-col gap-4">
                        <div className="bg-gray-100 w-full aspect-square border-2 border-gray-300  py-5 px-10 flex items-center justify-center rounded-md">
                          <img
                            className="w-full h-full object-contain"
                            src={item.primary.url}
                            alt={item.primary.alt}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Fade>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section> */}

      {/* <section className="bg-testimonial bg-center bg-cover bg-no-repeat flex items-center">
        <div className="w-full max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-4">
          <Fade left>
            <div className="flex-1">
              <img src="/heros/comercial.svg" alt="" />
            </div>
          </Fade>

          <div className="flex-1 mt-10 md:mt-0">
            <Fade top>
              <span className="text-brand-500">{transparentCta}</span>
            </Fade>
            <Fade center>
              <h1 className="text-xl text-gray-300 mt-2">{transparentTitle}</h1>
            </Fade>
            <Fade bottom>
              <p className="mt-5 text-gray-400 font-light text-sm leading-relaxed">
                {transparentDescription}
              </p>
            </Fade>
          </div>
        </div>
      </section> */}
    </>
  );
}
