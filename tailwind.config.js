module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,vue}'],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      dl: '850px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#001d6c',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        xss: '.7rem',
      },
      spacing: {
        128: '31rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
