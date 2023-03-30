module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "linear-gradient(120deg, #182848 0%, #22C1C3 80%,  #66CDAA 100%)",
        // site: "url('./assets/text-dark')",
        about: "url('./assets/post18.webp')",
        services: "url('./assets/post8.webp')",
      },
    },
  },
  plugins: [],
};
