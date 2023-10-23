/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: 'url(/backgrounds/mel_blackground.jpeg)',
        sobre: 'url(/backgrounds/sobreMel.PNG)',
        sobreMel: 'url(/backgrounds/mel.png)',
        testimonial: 'url(/backgrounds/testimonial_background.svg)',
        about: 'url(/backgrounds/about_background.svg)',
        client: 'url(/backgrounds/clients_background.svg)',
        briefing: 'url(/backgrounds/briefing_background.svg)',
        footer: 'url(/backgrounds/footer_background_v2.svg)',
        espmCard: 'url(/backgrounds/EspmHome.png)',
        unicardioCard: 'url(/backgrounds/UnicardioHome.png)',

      },

      colors: {
        blue: {
          500: '#25346F',
        },

        brand: {
          500: '#21988E',
        },
        spacing: {
          28: '7rem',
          32: '8rem',
          36: '9rem',
          40: '10rem',
          72: '18rem',
          80: '20rem',
          88: '22rem',
          96: '24rem',
        },
      },
      transformOrigin: {
        center: 'center',
      },
      rotateY: {
        '-180': '-180deg',
      },
    },
  },
  variants: {
    extend: {
      rotate: ['hover'],
    },
  },
  plugins: [],
};
