import Link from 'next/link';
import Image from 'next/image';
import { List, X } from 'phosphor-react';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { headerLanguage } from '@/dictionaries/languages/components/Header/language';
import { NavLink } from '@/components/default/Navlink';

export function Header() {
  const [isToggleMenuMobile, setIsToggleMenuMobile] = useState(false);
  const [isMenuTextYellow, setIsMenuTextYellow] = useState(false);
  const { locale }: any = useRouter();

  const { menu, actionButton } = headerLanguage[locale];

  function handleToogleMenuMobile() {
    setIsToggleMenuMobile(!isToggleMenuMobile);
  }

  const handleClick = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMenuTextYellow(isToggleMenuMobile);
  }, [isToggleMenuMobile]);

  return (
    <header className="z-20 w-full fixed left-0 top-0 backdrop-blur  duration-200 border-b  bg-zinc-900/0 border-transparent">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-[90px]">
        <Link href="/">
          <img src="Logo_mel_png.png" alt="Logo" className="dark:opacity-50" width={150} />
        </Link>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            className="text-zinc-600 "
            title="Clique para abrir e fechar o menu"
            onClick={handleToogleMenuMobile}
          >
            {isToggleMenuMobile ? <X size={30} /> : <List size={30} />}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all ${
            isToggleMenuMobile ? 'opacity-100 visible' : 'opacity-0 invisible'
          }  fixed left-0 top-[90px] bg-black hover:text-yellow-500 transition-all z-20 text-left w-full px-8 py-5 flex flex-col gap-3 
          ${isMenuTextYellow ? 'text-white' : 'text-yellow-500'}`}
        >
          {menu.map((item: any, index: number) => {
            return (
              <div
                key={index}
                onClick={handleToogleMenuMobile}
                className="hover:text-yellow-500  text-black-500 offset-2 font-medium hover:brightness-90 transition-all border-b border-gray-600 pb-3"
              >
                <NavLink title={item.title} url={item.url}>
                  {item.title} 
                </NavLink>
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-7 text-black font-regular list-none">
          {menu.map((item: any, index: number) => {
            if (item.title === 'ESG') {
              return (
                <li
                  key={index}
                  className="hover:text-yellow-500  text-black-500 offset-2 font-medium hover:brightness-90 transition-all"
                >
                  <a href="/#esgSection" className="cursor-pointer">
                    {item.title}
                  </a>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <a title={item.title} onClick={() => handleClick(item.url)} style={{cursor: 'pointer'}}>
                    {item.title}
                  </a>
                </li>
              );
            }
          })}
        </div>
        <div className="flex flex-row  gap-4">
                <a href="https://www.facebook.com/resolvai">
                  <Image
                    src="/icons/facebook-f.svg"
                    alt="Logo do facebook"
                    width={15}
                    height={15}
                    priority
                  />
                </a>

                <a href="https://www.instagram.com/designer_mel_santos/?hl=hr" className='hover:text-yellow-500 transition-all'>
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
                <a href="https://api.whatsapp.com/send?phone=551340429800&text=Ol%C3%A1!%20%0A%0AObrigado%20por%20entrar%20em%20contato%20com%20a%20Resolv.%20Recebemos%20sua%20mensagem%20atrav%C3%A9s%20do%20nosso%20site.%20Como%20podemos%20ajudar?%0A%0AAtenciosamente,%0AEquipe%20Resolv">
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

    </header>
  );
}
