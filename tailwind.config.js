export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '500px',
      sm: '770px',
      md: '870px',
      lg: '990px',
      xl: '1500px',
    },
    extend: {
    
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Webkit (Chrome, Safari, Edge) */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
};