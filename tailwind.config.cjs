/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-bg": "url('/assets/bg/bg-footer.jpg')",
      },
    },
  },
  plugins: [],
};
