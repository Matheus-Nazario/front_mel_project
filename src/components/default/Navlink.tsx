import Link from 'next/link';

import { ReactNode } from 'react';
import { useRouter } from 'next/router';

interface NavLinkProps {
  url: string;
  title: string;
  children: ReactNode;
}

export function NavLink({ url, title, children }: NavLinkProps) {
  const { pathname } = useRouter();

  return (
    <Link
      href={url}
      title={`Clique para ir em ${title}`}
      className={`${
        url === pathname
          ? 'text-yellow-500 underline underline-offset-2 font-medium hover:brightness-90 transition-all'
          : 'text-black-900 font-regular hover:text-yellow-500 transition-all'
      }   `}
    >
      {children}
    </Link>
  );
}
