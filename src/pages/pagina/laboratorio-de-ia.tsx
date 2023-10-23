import Head from 'next/head';

import NextLink from 'next/link';

export default function PageLaboratory() {
  return (
    <>
      <Head>
        <title>Serviços | Resolv AI inteligência em dados</title>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <section className="mt-[90px] h-auto py-28 md:py-20 flex bg-banner bg-cover bg-center bg-no-repeat">
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center justify-center flex-1">
          <div className="text-center">
            <h1 className="uppercase text-3xl md:text-5xl font-semibold text-zinc-600">
              Laboratório de I.A.
            </h1>
            <p className="max-w-2xl mx-auto mt-5 text-zinc-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tristique nisi quam, sed aliquet dui convallis a. Aliquam eu felis
              vitae tortor vehicula elementum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed ornare eget lacus sit amet
              varius. Etiam urna tellus, tempor eget metus eu, semper tincidunt
              nulla.
            </p>

            <h2 className="mt-10 text-xl text-zinc-600">
              Bem vindo à era da informação
            </h2>
            <p className="max-w-2xl mx-auto mt-5 text-zinc-500">
              Informações são a chave do desempenho e da criação de novas
              tecnologias. Por meio dela, é possível automatizar, criar padrões
              de comportamento e proporcionar uma experiência muito mais
              avançada para seu usuário.
              <br />
              <br />
              Mas não são todas as empresas que sabem o que fazer com essa
              informação, nem se ela de fato é suficiente para inovar. Para isso
              está a ZeroTreze, para fazer junto com você que seus dados se
              tornem a evolução da sua empresa por meio da Inteligência
              Artificial.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-testimonial bg-left md:bg-center bg-cover bg-no-repeat flex items-center">
        <div className="px-8 py-20 flex flex-col items-center justify-center  w-full max-w-4xl mx-auto">
          <div>
            <h1 className=" text-md md:text-2xl text-center text-zinc-200 font-light">
              Não importa sua dor,{' '}
              <span className="text-brand-500 font-medium">
                temos uma solução
              </span>{' '}
              <br /> tecnológica{' '}
              <span className="text-brand-500 font-medium">
                para sua empresa.
              </span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">
              <div className="bg-zinc-200 border-2 border-zinc-300 rounded-md p-3">
                <h1 className="text-xl">Produtividade</h1>
                <p className="text-sm text-zinc-500 font-light mt-3">
                  Promover melhoria contínua à jornada de Inteligência
                  Artificial de Assistentes Virtuais.
                </p>
              </div>

              <div className="bg-zinc-200 border-2 border-zinc-300 rounded-md p-3">
                <h1 className="text-xl">Custos</h1>
                <p className="text-sm text-zinc-500 font-light mt-3">
                  Promover melhoria contínua à jornada de Inteligência
                  Artificial de Assistentes Virtuais.
                </p>
              </div>

              <div className="bg-zinc-200 border-2 border-zinc-300 rounded-md p-3">
                <h1 className="text-xl">Transformação Digital</h1>
                <p className="text-sm text-zinc-500 font-light mt-3">
                  Promover melhoria contínua à jornada de Inteligência
                  Artificial de Assistentes Virtuais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-client bg-center bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-end">
            <h1 className="text-2xl text-zinc-500">
              <span className="text-brand-500">Fase 01</span> - A avaliação
            </h1>

            <h1 className="text-4xl mt-2 text-zinc-600 text-right">
              Kickoff Ambiente Deploy
            </h1>
            <p className="mt-4 text-gray-500 font-light text-xl text-right">
              Criamos um ambiente deploy <br /> automatizado.
            </p>
          </div>

          <div className="flex-1 md:pl-20 mt-10 md:mt-0">
            <img
              className="w-full "
              src="/heros/test.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-4xl mt-2 text-zinc-600">Data Health</h1>
            <p className="mt-4 text-gray-500 font-light text-lg text-left">
              Não adianta termos a melhor tecnologia do mundo em inteligência
              artificial, também devemos ter a melhor matéria prima. Nossa
              matéria prima nessa jornada são seus dados, aqui avaliaremos eles,
              sua acurácia, sua precisão, sua qualidade, a fim de gerarmos um
              bom produto.
            </p>
          </div>

          <div className="flex-1 md:pr-20 mt-10 md:mt-0">
            <img
              className="w-full "
              src="/heros/test.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-end">
            <h1 className="text-2xl text-zinc-500">
              <span className="text-brand-500">Fase 02</span> - O produto
            </h1>

            <h1 className="text-4xl mt-2 text-zinc-600 text-right">
              Levantamento dos requisitos e KPIs
            </h1>
            <p className="mt-4 text-gray-500 font-light text-xl text-right">
              Inception e Refinamento onde realizamos o levantamento dos
              requisitos técnicos, critérios de aceitação e KPIs para criação
              das sprints.
            </p>
          </div>

          <div className="flex-1 md:pl-20 mt-10 md:mt-0">
            <img
              className="w-full "
              src="/heros/test.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 py-10 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-4xl mt-2 text-zinc-600">Sprints</h1>
            <p className="mt-4 text-gray-500 font-light text-lg text-left">
              Squads selecionadas conforme perfil das histórias e jornada de
              execução, premissas de prazo, grau de complexidade, qualidade e
              resultados esperados em até 30 dias.
            </p>
          </div>

          <div className="flex-1 md:pr-20 mt-10 md:mt-0">
            <img
              className="w-full "
              src="/heros/test.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-end">
            <h1 className="text-4xl mt-2 text-zinc-600 text-right">
              MVP e Validação no mercado
            </h1>
            <p className="mt-4 text-gray-500 font-light text-xl text-right">
              Deploy in prod. Momento de colocar o projeto on-line e validar a
              proposta de valor com o cliente final.
            </p>
          </div>

          <div className="flex-1 md:pl-20 mt-10 md:mt-0">
            <img
              className="w-full "
              src="/heros/test.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
        </div>

        <div className="w-full max-w-6xl mx-auto px-8 pt-10 pb-20 flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1 flex flex-col items-start">
            <h1 className="text-4xl mt-2 text-zinc-600">
              ROI e apuraçãode resultados
            </h1>
            <p className="mt-4 text-gray-500 font-light text-lg text-left">
              Apurar os resultados (KPIs) de desempenho em um super pitchdeck.
            </p>
          </div>

          <div className="flex-1 md:pr-20 mt-10 md:mt-0">
            <img
              className="w-full "
              src="/heros/test.svg"
              alt="Imagem da Jul.IA"
            />
          </div>
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
