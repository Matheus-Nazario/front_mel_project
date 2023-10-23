import React, { useEffect } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

// Install Swiper modules
SwiperCore.use([]);

// Custom SwiperOptions type with extended events
interface CustomSwiperOptions  {
  on?: {
    init?: (swiper: SwiperCore) => any;
    beforeDestroy?: (swiper: SwiperCore) => void;
    slideChange?: (swiper: SwiperCore) => void;
    slideChangeTransitionStart?: (swiper: SwiperCore) => void;
    // ... Add any other custom events you may need here
  };
}

const SwiperImage: React.FC = () => {
  let mySwiper: SwiperCore | null = null;

  useEffect(() => {
    mySwiper = new SwiperCore('.swiper-container', {
      loop: true,
      speed: 800,
      slidesPerView: 2, // or 'auto'
      centeredSlides: true,
      effect: 'coverflow', // 'cube', 'fade', 'coverflow'
      coverflowEffect: {
        rotate: 50, // Slide rotate in degrees
        stretch: 0, // Stretch space between slides (in px)
        depth: 100, // Depth offset in px (slides translate in Z axis)
        modifier: 1, // Effect multiplier
        slideShadows: true, // Enables slides shadows
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1023: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
      // Events
      on: {
        init: function (swiper) {
          swiper.el.classList.remove('loading');
        },
      },
    } as CustomSwiperOptions); // Cast the options to the custom type

    // Return a function to destroy the Swiper when the component is unmounted
    return () => {
      if (mySwiper) {
        mySwiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <section>
      <style jsx>{`
        /* Swiper CSS */
        .swiper-container {
          width: 100%;
          height: 28vw;
          transition: opacity 0.6s ease;
        }
        .swiper-wrapper {
          /* Se houver alguma estilização específica para a wrapper do Swiper, adicione aqui */
        }
        .swiper-slide {
          background-position: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          position: relative;
        }
        .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.8;
        }
        .swiper-slide-prev,
        .swiper-slide-next {
          z-index: -1;
        }
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background: none;
        }
        .swiper-slide-active {
          z-index: 1;
        }
        .swiper-slide-next .content,
        .swiper-slide-prev .content,
        .swiper-slide-active .content {
          opacity: 1;
          visibility: visible;
          transform: translateX(0) scale(1);
          transition: opacity 0.6s, visibility 0s, transform 0.6s;
        }
        .swiper-slide-prev .content,
        .swiper-slide-next .content {
          transform: translateX(0) scale(0.8);
          opacity: 0;
          visibility: hidden;
        }
        .swiper-slide-next .content {
          transform: translateX(-100%) scale(0.8);
        }
        .swiper-slide-prev .content {
          transform: translateX(100%) scale(0.8);
        }
        .content {
          position: absolute;
          top: 40%;
          left: 0;
          width: 50%;
          padding-left: 5%;
          color: #fff;
        }
        [class^='swiper-button-'] {
          width: 44px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }
        .swiper-container:hover [class^='swiper-button-'] {
          transform: translateX(0);
          opacity: 1;
          visibility: visible;
        }
        .swiper-pagination-bullet {
          margin: 0 9px;
          position: relative;
          width: 12px;
          height: 12px;
          background-color: #fff;
          opacity: 0.4;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 18px;
          transform: translate(-50%, -50%);
          border: 0px solid #fff;
          border-radius: 50%;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet:hover,
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-pagination-bullet-active::before {
          border-width: 1px;
        }
        /* Fim do CSS para o Swiper */

        /* Seu CSS global continua abaixo */
        body,
        html {
          min-height: 100%;
        }

        ::selection {
          background-color: #ef476f;
          color: #fff;
        }

        /* Outros estilos globais */
        /* ... */

        /* Mediaqueries (caso necessário) */
        @media (max-width: 1180px) {
          .swiper-slide .content .title {
            font-size: 25px;
          }
          .swiper-slide .content .caption {
            font-size: 12px;
          }
        }

        @media (max-width: 1023px) {
          .swiper-container {
            height: 40vw;
          }
        }
      `}</style>
      <div className="swiper-container loading" style={{ margin: '0 auto', userSelect: 'none' }}>
        <div className="swiper-wrapper">
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url(/nails/nail_2.jpg)`,
              height: '200px', // Altura menor para os slides
            }}
          >
            <Image src="/nails/nail_2.jpg" alt="Slide 1" width={500} height={300} />
            <div className="content">
              {/* Conteúdo do slide 1 */}
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url(/nails/nail_3.jpg)`,
              height: '200px', // Altura menor para os slides
            }}
          >
            <Image src="/nails/nail_3.jpg" alt="Slide 1" width={500} height={300} />
            <div className="content">
              {/* Conteúdo do slide 2 */}
            </div>
          </div>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: `url(/nails/nail_4.jpg)`,
              height: '200px', // Altura menor para os slides
            }}
          >
            <Image src="/nails/nail_4.jpg" alt="Slide 1" width={500} height={300} />
            <div className="content">
              {/* Conteúdo do slide 3 */}
            </div>
          </div>
          {/* Adicione outros slides do Swiper aqui */}
        </div>

        {/* Se necessário, adicione a paginação */}
        <div className="swiper-pagination"></div>

        {/* Se necessário, adicione os botões de navegação */}
        <div className="swiper-button-prev swiper-button-white"></div>
        <div className="swiper-button-next swiper-button-white"></div>
      </div>
    </section>
  );
};

export default SwiperImage;
