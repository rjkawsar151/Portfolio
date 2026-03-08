/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0F172A',
        'deep-indigo': '#1E1B4B',
        electric: '#3B82F6',
        'electric-glow': '#60A5FA',
        'slate-accent': '#64748B',
        'glass-border': 'rgba(255,255,255,0.08)',
        'glass-bg': 'rgba(15,23,42,0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'cinema-grain': "url('https://grainy-gradients.vercel.app/noise.svg')",
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'tilt-3d': 'tilt-3d 5s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59,130,246,0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(59,130,246,0.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'tilt-3d': {
          '0%, 100%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateY(5deg) rotateX(2deg)' },
        }
      },
    },
  },
  plugins: [],
}
