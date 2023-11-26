import axios from 'axios';

import Head from 'next/head';

import { Link as ScrollLink } from 'react-scroll';
import {  MouseSimple } from 'phosphor-react';


// Components

// Swiper imports modules
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperImage from '@/components/default/Swiper';
import About from '@/components/default/About';


// Import fade effect
const { Fade } = require('react-reveal');

export default function PageHome({ service }: HomeProps) {

  return (
    <>
      <Head>
        <title>Mel Nail Desing</title>
        <link rel="shortcut icon" href="/logos/LogoMel.svg" type="image/x-icon" />
      </Head>

      <section className="mt-[90px]  md:py-0 md:min-h-[calc(100vh-90px)] flex bg-banner semi-transparent-bg" id="home">
        <div className="container flex-1 relative">
          <div className="flex-1 md:flex-2 lg:flex-2">
            <Fade top>
              <img
                src="Logo_mel.png"
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
        className=" bg-left md:bg-center  flex items-center "
      >
        <About />
      </section>


      <section id="beginnerCourse" className='py-20 container'>
        <div> Sobre o Cursos Iniciantes<br /><br />
1. Ideal tanto para iniciantes, que nunca tiveram contato com a técnica, quanto para profissionais que já realizaram um primeiro curso, mas encontram muitos problemas e dúvidas na hora de executar um bom trabalho.
2. Certificado válido 
3. Este curso não dá direito a desenvolvimento prático em modelos, portanto, cada aluna aplica a técnica nas próprias unhas.</div>
      </section>
      
      <section id="advancedCourse" className='py-20 container'>
        <div>Sobre o Curso Avançado<br /><br />
1. Ideal para Profissionais que já atuam na área e estão a procura de especialização e aprendizado de novas técnicas.
2. Certificado válido 
3. Este curso não dá direito a desenvolvimento prático em modelos, portanto, cada aluna aplica a técnica nas próprias unhas.</div>
      </section>

      <section className="bg-briefing h-auto py-20 bg-center bg-cover bg-no-repeat">
       <SwiperImage/>
      </section>

    </>
  );
}

