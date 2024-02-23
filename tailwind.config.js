/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      indigo: {
        light: '#a5b4fc',
        DEFAULT: '#6366f1',
        dark: '#3730a3',
      },
      amber: {
        light: '#fcd34d',
        DEFAULT: '#f59e0b',
        dark: '#92400e',
      },
      gray: {
        lightest: '#f5f5f4',
        light: '#d6d3d1',
        DEFAULT: '#78716c',
        dark: '#292524',
        darkest: '#0c0a09',
      },
      red: {
        light: '#fca5a5',
        DEFAULT: '#dc2626',
        dark: '#991b1b',
      }
    },
    fontFamily: {
      sans: ['Trebuchet MS', 'sans-serif'],
      serif: ['Cambria', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

