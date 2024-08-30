/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Указываем все файлы в папке src, которые могут использовать классы Tailwind
  ],
  theme: {
    extend: {
      // Здесь можно расширить тему (добавить свои цвета, шрифты и т.д.)
    },
  },
  plugins: [
    // Здесь можно добавить плагины, если они вам нужны
  ],
};
