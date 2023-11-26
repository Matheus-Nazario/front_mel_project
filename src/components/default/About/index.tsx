import React from 'react';
const { Fade } = require('react-reveal');
// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <section id="scrollCeo">
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
          src="/heros/mel_perfil.svg"
          alt="Imagem da CEO"
        />
      </div>
    </Fade>
  </div>
</div>
</section>
  )
}

export default About;