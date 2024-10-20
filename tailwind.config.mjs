/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#167DB7',
        accent: '#FE5230',
        'ij-black': '#212121',
        'ij-red': '#FF421C',
        'ij-green': '#00A550',
        'ij-blue': '#E8F2F8',
        'ij-yellow': '#EFA500',
      },
      backgroundImage: {
        'hero-pattern': 'url(/hero-pattern.webp)',
        'kings-league': 'url(/kings-league-info.webp)',
        'selection-process': "url('/bento-info/selection-process.webp'), linear-gradient(90deg, rgba(254,246,219,0.8) 0%, rgba(252,225,151,0.8) 100%)",
        'emerging-positions': "url('/bento-info/emergent-positions.webp')",
        'company-opinion': "url('/bento-info/company-opinion.webp')",
        'no-experience': "url('/bento-info/no-experience.webp'), linear-gradient(139.81deg, rgb(230, 246, 238) 26.01%, rgb(139, 207, 173) 131.62%)"
      },  
      borderRadius: {
        '4xl': '3rem',
      },
      backgroundSize: {
        'auto-height': 'auto 100%', 
      },
      letterSpacing: {
        separated: '0.35px',
      },
      padding: {
        '15': '60px'
      },
    },
  },
  plugins: [],
};
