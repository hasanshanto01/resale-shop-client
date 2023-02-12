/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#4FBFA8",

          "secondary": "#555555",

          "accent": "#C149AD",

          "neutral": "#021431",

          "base-100": "#FFFFFF",

          "info": "#93E6FB",

          "success": "#80CED1",

          "warning": "#EFD8BD",

          "error": "#E58B8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
