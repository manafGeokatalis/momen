/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  daisyui: {
    themes: [{
      momen: {
        "primary": "#65558F",
        "secondary": "#625b71",
        "accent": "#7d5260",
        "neutral": "#31111D",
        "base-100": "#fef7ff",
        "info": "#00bdff",
        "success": "#00dbb5",
        "warning": "#ff5300",
        "error": "#ff707d",
      }
    }, "dark", "cupcake"],
  },
  plugins: [
    require('daisyui'),
  ],
}

