/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, rgba(0,0,0,0) 70%)',
      },
    },
  },
  plugins: [],
}
