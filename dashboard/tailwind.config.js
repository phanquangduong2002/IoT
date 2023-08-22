/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {},
      height: {},
      backgroundImage: {
        "light-mode":
          "linear-gradient(106deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%)",
        "dark-mode":
          "radial-gradient( circle farthest-corner at 83.7% 4.3%,  rgba(173,0,171,1) 0%, rgba(15,51,92,1) 90% )",
      },
      colors: {
        yellow: "linear-gradient(180deg, #F8D49A -146.42%, #FAD79D -46.42%)",
        orange: "#fca61f",
        black: "#242d49",
        gray: "#788097",
        purple: "linear-gradient(180deg, #BB67FF 0%, #C484F3 100%)",
        pink: "#FF919D",
        glass: "rgba(255, 255, 255, 0.4)",
        boxShadow: "0px 19px 60px rgb(0 0 0 / 8%)",
        smboxShadow: "-79px 51px 60px rgba(0, 0, 0, 0.08)",
        activeItem: "#f799a354",
      },
    },
  },
  plugins: [require("daisyui")],
};
