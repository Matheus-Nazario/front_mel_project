import NextLink from 'next/link';

import { ArrowsInLineVertical } from 'phosphor-react';

export default function PageConsultingIntelligence() {
  return (
    <>

      <section className="mt-[90px] bg-testimonial bg-left md:bg-center bg-cover bg-no-repeat flex items-center">
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl mx-auto px-8 py-20">
          <div className="flex-1 text-white md:pr-20">
            <h1 className="mt-5 relative leading-relaxed text-2xl md:text-3xl before:content-[*] before:block before:w-10 before:h-2 before:bg-red-500 before:absolute">
              Embarque agora na <br /> jornada de{' '}
              <span className="text-brand-500">projetos 013IS.</span>
            </h1>
            <p className="mt-7 font-extralight text-gray-400 text-md md:text-md">
              Seja bem vindo (a)! Se você chegou até aqui é porque sua empresa
              está a um passo de lançar seus produtos e serviços no universo
              digital. Com isso seu empreendimento vai alcançar resultados nunca
              antes imaginados.
              <br />
              <br />
              Chegou a hora tão esperada! Entender que a inteligência artificial
              é o foguete perfeito para esse lançamento, e eu, JUL.IA, vou te
              guiar de forma simples e inteligente à melhor jornada de sucesso
              rumo a esse imenso universo de possibilidades.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-end mt-16 md:mt-0">
            <iframe
              width="100%"
              height="350px"
              className="rounded-md border-2 border-gray-200"
              src="https://www.youtube.com/embed/3XBnAvtcmSw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="bg-client bg-center bg-cover bg-no-repeat flex flex-col items-center">
{/* Sessao nova */}
      <div className="w-full max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-brand-500 font-semibold"></span>
            <h1 className="text-2xl mt-2"></h1>
            <p className="mt-4 text-gray-500 font-light">
            Na Resolv, entendemos que informações são a chave do desempenho e da criação de novas tecnologias. Com o poder dos dados, é possível automatizar processos, identificar padrões de comportamento e oferecer uma experiência avançada para seus usuários. Nosso objetivo é capacitar sua empresa a utilizar a inteligência artificial como uma aliada estratégica, impulsionando a entrega de valor de maneira escalável e transformadora. 
              <br />
              <br />
              Combinando o poder dos dados, o conhecimento compartilhado e a aplicação inteligente da inteligência artificial, estamos preparados para impulsionar o sucesso do seu negócio em um mercado dinâmico e competitivo através dos nossos serviços.
            </p>

            <button
              className="px-12 py-2 mt-8  bg-brand-500 text-white rounded-md hover:brightness-90 transition-all hover:ring-4 hover:ring-gray-100 ring-4 ring-gray-100"
              type="button"
            >
               Etapa de identificação de Maturidade Digital 
            </button>
          </div>


          <div className="relative hidden md:flex border-l-2 border-r-2 border-gray-300 bg-gray-100 ml-10 h-98 flex-1 items-center">
  <img className="absolute 100vh w-56 h-98 object-cover" src="/video/juliaGif.gif" alt="GIF" style={{ zIndex: 999 }} />
</div>

          {/* <div className="flex-1 md:pl-20 mt-10 md:mt-0">
          <video
              className="absolute 200vh w-full h-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src="video/julia.mp4" type="julia/mp4" />
            </video> */}
            
        </div>
{/* Fim da Sessao nova */}


        <div className="w-full max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-brand-500 font-semibold">Etapa 01</span>
            <h1 className="text-2xl mt-2">Escolher os canais de comunicação</h1>
            <p className="mt-4 text-gray-500 font-light">
              Agora chegou a hora de decidir por quais universos iremos
              disponibilizar seus produtos e serviços, garantindo excelência em
              atendimento 24/7
              <br />
              <br />
              Você pode ejetar agora e começar um projeto caso precise apenas de
              canais de comunicação:
            </p>

            <button
              className="px-20 py-2 mt-8  bg-brand-500 text-white rounded-md hover:brightness-90 transition-all hover:ring-4 hover:ring-gray-100 ring-4 ring-gray-100"
              type="button"
            >
              Preciso apenas de canais
            </button>
          </div>

          <div className="flex-1 md:pl-20 mt-10 md:mt-0">
            <img
              className="w-full "
              src="/heros/julia_02.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
        </div>

        <div className=" w-full max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row-reverse items-start gap-10">
          <div className="flex-1">
            <span className="text-brand-500 font-semibold">Etapa 02</span>
            <h1 className="text-2xl mt-2">Design da Jornada de Sucesso</h1>
            <p className="mt-4 text-gray-500 font-light">
              Desenhar uma jornada e construir um passo a passo para seu cliente
              chegar com sucesso ao serviço desejado.
            </p>

            <p className=" text-gray-600 text-lg font-light mt-5">
              Como posso ajudar seu cliente?
            </p>

            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-center gap-3 text-gray-600">
                <img src="/logo_rounded.svg" alt="Logo da designer_mel_santos" /> Conhecer
                sua empresa, seus produtos e serviços;
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <img src="/logo_rounded.svg" alt="Logo da designer_mel_santos" />{' '}
                Esclarecer dúvidas através de tutoriais;
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <img src="/logo_rounded.svg" alt="Logo da designer_mel_santos" />
                Vender seus produtos e serviços até a formalização (pagamentos
                ou assinaturas digitais de contratos);
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <img src="/logo_rounded.svg" alt="Logo da designer_mel_santos" />
                Ofertar serviços financeiros e back office para seus clientes
                integrados com seus sistemas;
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <img src="/logo_rounded.svg" alt="Logo da designer_mel_santos" />
                Ofertar serviços de RH, Benefícios e Saúde Ocupacional para seus
                (suas) colaboradores (as);
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <img src="/logo_rounded.svg" alt="Logo da designer_mel_santos" />
                Ofertar canal de compras e financeiro para seus fornecedores;
              </li>
            </ul>
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <img
                className="w-10 h-10 object-cover shrink-0"
                src="/heros/julia_03.svg"
                alt=""
              />
              <div>
                <p className="bg-zinc-200 border border-zinc-400 text-sm text-gray-600 leading-relaxed p-4 rounded-tr-3xl  rounded-br-3xl  rounded-bl-3xl">
                  Cras pulvinar metus vel nibh congue, sit amet posuere mauris
                  dictum. Suspendisse feugiat augue neque, eget lacinia enim
                  sollicitudin placerat. Etiam condimentum aliquet malesuada.
                  Quisque convallis sodales varius.
                </p>
                <div className="flex justify-end">
                  <span className="block text-xs mt-2 text-zinc-500 font-light">
                    Enviado 31 de maio de 2023 às 21:32:45
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                className="w-10 h-10 object-cover shrink-0"
                src="/heros/julia_03.svg"
                alt=""
              />
              <div>
                <p className="bg-zinc-200 border border-zinc-400 text-sm text-gray-600 leading-relaxed p-4 rounded-tr-3xl  rounded-br-3xl  rounded-bl-3xl">
                  Cras pulvinar metus vel nibh congue, sit amet posuere mauris
                  dictum. Suspendisse feugiat augue neque, eget lacinia enim
                  sollicitudin placerat. Etiam condimentum aliquet malesuada.
                  Quisque convallis sodales varius.
                </p>
                <div className="flex justify-end">
                  <span className="block text-xs mt-2 text-zinc-500 font-light">
                    Enviado 31 de maio de 2023 às 21:32:45
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <img
                className="w-10 h-10 object-cover shrink-0"
                src="/heros/julia_03.svg"
                alt=""
              />
              <div>
                <p className="bg-zinc-200 border border-zinc-400 text-sm text-gray-600 leading-relaxed p-4 rounded-tr-3xl  rounded-br-3xl  rounded-bl-3xl">
                  Cras pulvinar metus vel nibh congue, sit amet posuere mauris
                  dictum. Suspendisse feugiat augue neque, eget lacinia enim
                  sollicitudin placerat. Etiam condimentum aliquet malesuada.
                  Quisque convallis sodales varius.
                </p>
                <div className="flex justify-end">
                  <span className="block text-xs mt-2 text-zinc-500 font-light">
                    Enviado 31 de maio de 2023 às 21:32:45
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-[2]">
            <span className="text-brand-500 font-semibold">Etapa 03</span>
            <h1 className="text-2xl mt-2">
              Desenvolvimento de soluções e integrações
            </h1>
            <p className="mt-4 text-gray-500 font-light">
              Chegou a hora de acionar a estação espacial e convocar o melhor
              time de desenvolvedores da galáxia para criar ou integrar serviços
              inteligentes utilizando as melhores tecnologias de code/low code e
              no code.
              <br />
              <br />
              Não vendemos código, desenvolvemos soluções tangíveis,
              sustentáveis, escaláveis e infalíveis.
            </p>

            <button
              className="px-20 py-2 mt-8  bg-brand-500 text-white rounded-md hover:brightness-90 transition-all hover:ring-4 hover:ring-gray-100 ring-4 ring-gray-100"
              type="button"
            >
              Saiba mais sobre o allconnect
            </button>
          </div>

          <div className="flex-1 md:pl-20 flex flex-col items-center md:items-end">
            <div className="text-center md:text-left">
              <h1 className="text-brand-500 text-2xl">+ Agilidade</h1>
              <h1 className="text-brand-500 text-2xl mt-2">+ Resultado</h1>
              <h1 className="text-brand-500 text-2xl mt-2">+ Performance</h1>

              <span className="text-zinc-500 text-2xl mt-7 block">
                Com tecnologia
              </span>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1">
            <span className="text-brand-500 font-semibold">Etapa 04</span>
            <h1 className="text-2xl mt-2">
              Integramos seu assistente com os sistemas mais utilizados do mundo
            </h1>
            <p className="mt-4 text-gray-500 font-light">
              Podemos te ajudar a desenvolver serviços ainda não suportáveis
              pelos seus sistemas internos e integrá-los aos serviços suportados
              de sistemas como: CRM, ERP, WMS, ITSM, LOJAS VIRTUAIS, PDVs.
              <br />
              <br />
              Se seu sistema é antigo e não possui comunicação acessível, não se
              preocupe, nosso time domina Robotização de Processos (RPA).
              <br />
              <br />
              Você pode ejetar agora e começar um projeto caso precise apenas de
              desenvolvimento para seu assistante:
            </p>

            <button
              className="px-20 py-2 mt-8  bg-brand-500 text-white rounded-md hover:brightness-90 transition-all hover:ring-4 hover:ring-gray-100 ring-4 ring-gray-100"
              type="button"
            >
              Preciso apenas de desenvolvimento
            </button>
          </div>

          <div className="flex-1 md:pr-20">
            <img
              className="w-full md:h-[600px] mt-10 md:mt-0"
              src="/heros/julia_04.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 pt-10 pb-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="text-brand-500 font-semibold">Etapa 05</span>
            <h1 className="text-2xl mt-2">Inteligência artificial</h1>
            <p className="mt-4 text-gray-500 font-light">
              Agora contaremos nosso segredo: Chegou a hora de reunir as
              melhores mentes de nossos times. Todos os nossos especialistas
              trabalhando junto aos seus. Nossa missão é conhecer o
              comportamento dos seus clientes, colaboradores e fornecedores.
              <br />
              <br />
              Precisamos entender suas características pessoais para definirmos
              a persona e capacidade cognitiva que sua assistente virtual terá.
              <br />
              <br />
              Para isso, contamos com o que há de melhor de IA no mundo:
              <br />
              <span className="text-3xl text-brand-500 uppercase font-bold mt-10 block">
                JUL.IA
              </span>
            </p>

            <button
              className="px-20 py-2 mt-8  bg-brand-500 text-white rounded-md hover:brightness-90 transition-all hover:ring-4 hover:ring-gray-100 ring-4 ring-gray-100"
              type="button"
            >
              Saiba mais sobre o allconnect
            </button>
          </div>

          <div className="flex-1 md:pl-20 grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
            <div className="bg-zinc-200 border-2 border-zinc-300 w-full aspect-square flex items-center justify-center px-5 py-3 rounded-md">
              <div>
                <div className="bg-brand-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                  <ArrowsInLineVertical size={20} />
                </div>
                <p className="text-sm mt-5 text-gray-500">
                  Compreender as intenções independente da forma escrita ou
                  falada por seu cliente, entender sotaques e dialetos diversos.
                </p>
              </div>
            </div>

            <div className="bg-zinc-200 border-2 border-zinc-300 w-full aspect-square flex items-center justify-center px-5 py-3 rounded-md">
              <div>
                <div className="bg-brand-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                  <ArrowsInLineVertical size={20} />
                </div>
                <p className="text-sm mt-5 text-gray-500">
                  Compreender as intenções independente da forma escrita ou
                  falada por seu cliente, entender sotaques e dialetos diversos.
                </p>
              </div>
            </div>

            <div className="bg-zinc-200 border-2 border-zinc-300 w-full aspect-square flex items-center justify-center px-5 py-3 rounded-md">
              <div>
                <div className="bg-brand-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                  <ArrowsInLineVertical size={20} />
                </div>
                <p className="text-sm mt-5 text-gray-500">
                  Compreender as intenções independente da forma escrita ou
                  falada por seu cliente, entender sotaques e dialetos diversos.
                </p>
              </div>
            </div>

            <div className="bg-zinc-200 border-2 border-zinc-300 w-full aspect-square flex items-center justify-center px-5 py-3 rounded-md">
              <div>
                <div className="bg-brand-500 w-10 h-10 rounded-full flex items-center justify-center text-white">
                  <ArrowsInLineVertical size={20} />
                </div>
                <p className="text-sm mt-5 text-gray-500">
                  Compreender as intenções independente da forma escrita ou
                  falada por seu cliente, entender sotaques e dialetos diversos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 pt-10 pb-20 flex flex-col items-center">
          <div className="text-gray-600 flex flex-col items-center">
            <h1 className="text-xl md:text-3xl">Conheça os nossos serviços</h1>
            <p className="text-sm text-center font-light max-w-lg mt-3 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              lacinia porta magna, vel aliquam felis tincidunt ullamcorper
            </p>
          </div>

          <div className="flex items-center gap-10 mt-10">
            <div className="bg-zinc-200 border-2 border-zinc-300 rounded-md p-3">
              <h1 className="text-xl">Curadoria</h1>
              <p className="text-sm text-zinc-500 font-light mt-3">
                Promover melhoria contínua à jornada de Inteligência Artificial
                de Assistentes Virtuais.
              </p>
            </div>

            <div className="bg-zinc-200 border-2 border-zinc-300 rounded-md p-3">
              <h1 className="text-xl">Sustentação</h1>
              <p className="text-sm text-zinc-500 font-light mt-3">
                Sua força de apoio às tecnologias e assistentes construídos e
                implantados pelo time 013IS.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-20">
          <NextLink
            className="px-20 py-2  bg-brand-500 text-white rounded-md hover:brightness-90 transition-all hover:ring-4 hover:ring-gray-100 ring-4 ring-gray-100"
            href="/laboratorio-de-ia"
          >
            Ir para a página de laboratório de IA
          </NextLink>
        </div>
      </section>

      <section className="bg-briefing bg-center bg-cover bg-no-repeat flex items-center transition-all">
        <div className="w-full max-w-6xl mx-auto px-8 py-28 flex items-center justify-center">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-xl md:text-2xl max-w-xl text-gray-300">
              Se você busca uma jornada digital excepcional e proteção contra
              fraudes, escolha a Resolv. 
            </h1>
            <p className="text-sm md:text-md max-w-sm md:max-w-md mt-5 text-gray-400 font-light">
              Contacte-nos hoje mesmo e descubra como podemos impulsionar o
              sucesso do seu negócio! 
            </p>

            <div className="flex flex-col md:flex-row items-center gap-5 mt-10">
              <NextLink
                href=""
                className="bg-brand-500 w-full md:w-40 py-2 rounded-full hover:brightness-90 transition-all text-sm text-white font-light"
              >
                Jul.IA
              </NextLink>
              <NextLink
                href=""
                className="bg-gray-500 w-full md:w-auto py-2 px-4 rounded-full hover:brightness-90 transition-all text-sm text-gray-200 font-light"
              >
                Formulário padrão
              </NextLink>
              <NextLink
                href=""
                className="bg-gray-500 w-full md:w-auto py-2 px-4 rounded-full hover:brightness-90 transition-all text-sm text-gray-200 font-light"
                title="Clique para agendar uma reunião"
              >
                Agende uma reunião
              </NextLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
