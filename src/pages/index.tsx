import axios from 'axios';

import Head from 'next/head';

import { Link as ScrollLink } from 'react-scroll';
import {  MouseSimple } from 'phosphor-react';


// Components

// Swiper imports modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperImage from '@/components/default/Swiper';


// Import fade effect
const { Fade } = require('react-reveal');

export default function PageHome({ service }: HomeProps) {





  return (
    <>
      <Head>
        <title>Início | Resolv AI inteligência em dados</title>
        <link rel="shortcut icon" href="/logos/LogoMel.svg" type="image/x-icon" />
      </Head>

      <section className="mt-[90px]  md:py-0 md:min-h-[calc(100vh-90px)] flex bg-banner semi-transparent-bg">
        <div className="container flex-1 relative">
          <div className="flex-1 md:flex-2 lg:flex-2">
            <Fade top>
              <img
                src="Logo_mel_png.png"
                alt="Logo"
                style={{ width: '400px' }}
              />
            </Fade>h-auto py-28
            <Fade top>
              <ScrollLink
                to="scrollCeo"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <div
                  title="Clique para descer"
                  className="flex mt-10 items-center gap-2 text-sm hover:brightness-90 transition-opacity cursor-pointer"
                  style={{ color: "#fee27d" }}
                >
                  <MouseSimple className="animate-bounce" size={40} style={{ color: "#fee27d" }} />
                  'Clique para descer'
                </div>
              </ScrollLink>

            </Fade>
          </div>
          { 
            <div className="absolute -right-40 top-0 h-full w-3/5 hidden md:block">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src="/video/video.mp4" type="video/mp4" />
            </video>
          </div>
          }




        </div>
      </section>






      <section
        id="scrollCeo"
        className=" bg-left md:bg-center  flex items-center "
      >

        <div className="container flex-1 relative">
          <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto px-8 py-20">
            <div className="flex-1 text-white md:pr-20">
              <h1 className="mt-5 relative text-xl before:content-[*] before:block before:w-10 before:h-2 bg-black-500 before:bg-black-500 before:absolute text-black">
                Te ensino a crescer no mundo das unhas! </h1>
              <Fade top>
                <p className="mt-7 font-extralight text-gray-900 text-md md:text-lg">
                  “Transforme sua paixão por unhas em um negócio de sucesso - eu te mostro como empreender nesse universo encantador.”
                </p>
              </Fade>
              <Fade bottom>
                <h1 className="mt-5 relative text-xl before:content-[*] before:block before:w-10 before:h-2 bg-black-500 before:bg-black-500 before:absolute text-black">
                  Melissa Amaral Souza Santos
                </h1>
              </Fade>
              <img
                className="w-full mt-10"
                src="/vectors/vector_text.svg"
                alt="imagem"
              />
            </div>

            <Fade right>
              <div className="flex-1 flex items-center justify-end mt-16 md:mt-0">
                <img
                  className="w-full h-full"
                  src="/heros/marco_riveiros.svg"
                  alt="Imagem do CEO da Resolv"
                />
              </div>
            </Fade>
          </div>
        </div>

      </section>
      <section className="bg-briefing h-auto py-72 bg-center bg-cover bg-no-repeat flex items-center">
        
       <SwiperImage/>
      </section>

    </>
  );
}

