/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        Primary: {
          100: "#cdf5fd",
          900: "#00a9ff",
        },
      },
      fontFamily: {
        PoppinsBlack: ["PoppinsBlack"],
      },
    },
  },
  plugins: [],
};
