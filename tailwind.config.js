module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
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
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      textColor: {
        indy: 'var(--color-indy)',
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
