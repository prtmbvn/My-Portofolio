/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    // Pastikan path ini mencakup semua file komponen kamu
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. Warna Custom (Tema Konoha/Scroll)
      colors: {
        primary: '#34c4f4',
        parchment: '#f0e6d2', // Warna kertas gulungan
        ink: '#1a1a1a', // Warna tinta
        'konoha-orange': '#ea580c',
      },

      // 2. Font Custom
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        brush: ['Permanent Marker', 'cursive'],
      },

      // 3. Daftar Animasi (Untuk dipanggil di className)
      animation: {
        marquee: 'marquee 25s linear infinite', // Jalan ke kiri
        'marquee-reverse': 'marquee-reverse 25s linear infinite', // Jalan ke kanan
        'spin-slow': 'spin 12s linear infinite', // Putar pelan
        float: 'float 6s ease-in-out infinite', // Melayang
        'pulse-glow': 'pulse-glow 3s infinite', // Berdenyut
      },

      // 4. Detil Keyframes (Cara animasi bergerak)
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
