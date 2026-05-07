/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          // Remapped to Obsidian slate palette
          950: '#020617',   // slate-950
          900: '#0f172a',   // slate-900
          800: '#1e293b',   // slate-800
          700: '#334155',   // slate-700
          600: '#475569',   // slate-600
          500: '#64748b',   // slate-500
        },
        accent: {
          blue:   '#10b981',  // emerald-500  (PRIMARY – replaces old blue)
          cyan:   '#34d399',  // emerald-400  (HIGHLIGHT – replaces old cyan)
          purple: '#8b5cf6',  // violet-500   (SECONDARY – kept)
          green:  '#f59e0b',  // amber-500    (PRICE labels)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.7s ease-out forwards',
        'fade-in':     'fadeIn 0.6s ease-out forwards',
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'gradient-x':  'gradientX 8s ease infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}
