import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

import '../styles/globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600'],
  subsets: ['latin'],
});

// Components
import { Header } from '@/layouts/Header';
import { Footer } from '@/layouts/Footer';

// Config Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import { CaretUp } from 'phosphor-react';

export default function App({ Component, pageProps }: AppProps) {
  function handleToScrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <main className={poppins.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <button
        className="fixed right-6 bottom-6 bg-brand-500 text-white p-2 text-2xl hover:brightness-90 transition-all"
        title="Clique para voltar ao topo"
        onClick={handleToScrollTop}
      >
        <CaretUp />
      </button>
    </main>
  );
}
