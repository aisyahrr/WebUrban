module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Pastikan Tailwind memproses semua file React
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brandblue: "#08BBE1",
        brandgrey: "#D9D9D9",
        Blue: "#31B1CC",
      },
      screen: {
        md: "900px",
      },
      container: {
        center: true,
        padding: {
          DEFAULY: "1rem",
          sm: "2rem",
        },
      },
      fontFamily: {
        pacifico: ["Pacifico","serif"],
        pangolin: ["Pangolin"],
        roboto: ["Roboto"],
        calistoga: ["Calistoga"],
        playfair: ["Playfair"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
