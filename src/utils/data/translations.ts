type Translation = {
  [key: string]: string;
};

type Translations = {
  [key: string]: Translation;
};

const translations: Translations = {
  en: {
    welcome: 'Welcome',
    about: 'About',
    contact: 'Contact',
  },
  es: {
    welcome: 'Bienvenido',
    about: 'Acerca de',
    contact: 'Contacto',
  },
  pt: {
    welcome: 'Bem-vindo',
    about: 'Sobre',
    contact: 'Contato',
  },
};

export default translations;
