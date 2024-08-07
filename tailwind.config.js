/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'hot-pink': '#EBA7AC'
      }
    },
  },
  plugins: [],
};
