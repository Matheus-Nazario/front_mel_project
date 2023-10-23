import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function LanguageSelector() {
  const { locale } = useRouter();

  return (
    <div className="flex  items-center gap-2">
      <Link
        href="/"
        locale="pt-BR"
        className={`relative border-2 rounded-full ${
          locale === 'pt-BR' ? 'border-brand-500' : 'border-white'
        }`}
      >
        <img className="w-8 h-8" src="icons/brasil.svg" alt="Português" />
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity"></div>
      </Link>
      <Link
        href="/"
        locale="en-US"
        className={`relative border-2 rounded-full  ${
          locale === 'en-US' ? 'border-brand-500 ' : 'border-white'
        } `}
      >
        <img className="w-8 h-8" src="icons/usa.svg" alt="English" />
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity"></div>
      </Link>

      <Link
        href="/"
        locale="es"
        className={`relative border-2 rounded-full ${
          locale === 'es' ? 'border-brand-500' : 'border-white'
        }`}
      >
        <img className="w-8 h-8" src="icons/esp.svg" alt="Español" />
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-30 transition-opacity"></div>
      </Link>
    </div>
  );
}
