/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "3/2": "3 / 2",
      },
      backgroundImage: {
        space: "url('./src/assets/wp7590983-lost-astronaut-4k-wallpapers.jpg')",
      },
      fontFamily: {
        chakra: ["Chakra Petch"],
        Comfortaa: ["Comfortaa"],
      },
    },
  },
  plugins: [],
};
