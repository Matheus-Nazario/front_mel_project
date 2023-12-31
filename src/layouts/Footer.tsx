import Image from 'next/image';
import { menu } from '@/utils/data/menu';

// Components
import { Logo } from '@/components/application/Logo';
import { NavLink } from '@/components/default/Navlink';

export function Footer() {
  return (
    <footer>
      <div className="bg-red w-full">
        <div className="bg-bottom bg-cover bg-no-repeat text-white">
          <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-6 py-16">
            <div className="max-w-6xl  self-start flex-col mx-auto mt-[-72px] flex  gap-6 ">
              <Logo width={120} />

              <p className="text-gray-600 mt-[-72px] text-sm">
              “Transforme sua paixão por unhas em um negócio de sucesso -<br/>
               Te mostro como empreender nesse universo encantador.”
              </p>
            </div>
            <div className="flex flex-col items-center px-14 md:items-start gap-2 text-sm text-gray-400 font-light">
              <h1 className="text-lg text-gray-600 mb-2">Menu</h1>
              {menu.map((item, index) => {
                return (
                  <NavLink key={index} title={item.title} url={item.url}>
                    {'>'} {item.title} 
                  </NavLink>
                );
              })}
            </div>

            <div className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-400 font-light">
              <h1 className="text-lg text-gray-600 mb-2">Políticas</h1>

              <p className="text-gray-600 text-sm">
                {' '}
                {'>'} Política de Cookies{' '}
              </p>
              <p className="text-gray-600 text-sm"> {'>'} termo de uso </p>
              <p className="text-gray-600 text-sm">
                {' '}
                {'>'} Política de Privacidade{' '}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-400 font-light">
              <h1 className="text-lg  text-gray-600 mb-2">Redes sociais</h1>
              <div className="flex flex-row  gap-4">
                <a href="https://www.facebook.com/melissa.santos.1069020?mibextid=2JQ9oc">
                  <Image
                    src="/icons/facebook-f.svg"
                    alt="Logo do facebook"
                    width={15}
                    height={15}
                    priority
                  />
                </a>

                <a href="https://www.instagram.com/designer_mel_santos/?hl=hr">
                  <Image
                    src="/icons/instagram.svg"
                    alt="Logo do instagram"
                    width={25}
                    height={18}
                    priority
                  />
                </a>
                <a href="mailto:atendimento@designer_mel_santos">
                  <Image
                    src="/icons/envelope.svg"
                    alt="Logo do envelope"
                    width={30}
                    height={18}
                    priority
                  />
                </a>
                <a href="https://api.whatsapp.com/message/JKMNRU2U3J77E1?autoload=1&app_absent=0">
                  <Image
                    src="/icons/whatsapp.svg"
                    alt="Logo da whatsapp"
                    width={25}
                    height={18}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden sm:block max-w-6xl mx-auto px-8">
            <div className="border-t border-zinc-700 pt-6 pb-12 flex flex-col items-center justify-center">
              <h1 className="ext-lg text-gray-600 mb-2">
                @2023 | Todos os direitos reservados | designer_mel_santos
              </h1>
              <p className="flex items-center gap-2 text-xs font-light text-gray-400 mt-1">
                {' '}
                atendimento@designer_mel_santos | São Miguel Paulista - Zona leste /SP. ©2015 by Grupo Mel Nail Designer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
