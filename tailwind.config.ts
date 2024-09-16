import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem',
      },

      colors: {
        lamaSky: '#C3EBFA',
        lamaSkyLight: '#EDF9FD',
        lamaPurple: '#CFCEFF',
        lamaPurpleLight: '#F1F0FF',
        lamaYellow: '#FAE27C',
        lamaYellowLight: '#FEFCE8',
      },
    },
  },
  plugins: [],
}
export default config
