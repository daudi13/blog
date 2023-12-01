/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "319px",
      sm: "479px",
      md: "769px",
      lg: "975px",
      xl: "1439px",
    },
    colors: {
      'bckg': "#fff",
      'text-color': "#000",
      "softbg": "#f0f0f0",
      "soft-text": "#626262"
    },
    extend: {
      spacing: {
        'max' : '1536px'
      }
    },
  },
  plugins: [],
}
