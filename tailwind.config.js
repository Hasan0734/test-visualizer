/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      dmsans: ['"DM Sans"'],
      playfair: ['"Playfair Display"'],
      lexend: ['"Lexend"'],
      roboto: ['"Roboto"'],
      inter:['"Inter"']
    },

    extend: {
      screens: {
        xs: '320px',
        xsm: '510px',
      },
      fontSize: {
        xsm: ['13px', '18px'],
        lg: ['18px'],
        xl: ['26px', '32px'],
        md: ['18px', '22px']
      },
      colors: {
        secondary: '#261229',
        secondary2: '#3B2434',
        white: '#ffffff',
        warning: '#C99F4D',
        pinkdark: '#48233C',
        oblack: '#0F0F0F',
        grayblack: '#505050',
        black2: '#2E2D2D',
        black3: '#090909',
        gray2: '#ECECEC',
        gray3: '#13131394',
        gray4: '#210F23',
        gray5:'#F4F4F4',
        yellow1:'#C99F4D'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        'max-w-sm': '390px',
        'max-w-7xl': '1237px',
      },
    },
  },
  plugins: [],
};