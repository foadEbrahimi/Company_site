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
      maxHeight: {
        "26rem": "27rem",
      },
      height: {
        fitContent: "fit-content",
      },
      fontFamily: {
        PoppinsBlack: ["PoppinsBlack"],
        NunitoRegular: ["NunitoRegular"],
      },
    },
  },
  plugins: [],
};
