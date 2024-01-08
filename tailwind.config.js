/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E8C6F",
        /*         primary: '#7CA621', */
        primHover: "#1E8D63",
        /*         primHover: '#143b01', */
        secondary: "#262837",
        light: "#F2F2F2",
        /*         illumination: '',  */
        dark: "#1F1D2B",
        delete: "#a81111",
        /*         blood: '#732626',  */
        fall: "#C15B1C",
        tangerine: "#FF6F03",
        marine: "#012f47",
        night: "#111417",
        concrete: "#cef2e4",
        sun: "#F7B761",
        vegetarian: "#7aa600",
        vegan: "#01472c",
      },
      /*       backgroundImage: {
        'custom-img': "url('bg.png')",
      },   */
    },
    fontFamily: {
      PermanentMarker: ["Permanent Marker"],
      Inter: ["Inter"],
      Nunito: ["Nunito"],
    },
  },
  plugins: [],
};
