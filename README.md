1. Install tailwind
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p

// INDEX.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// TAILWIND.CONFIG.js
add:
content: [
"./src/**/*.{js,jsx,ts,tsx}",
"./public/index.html"
],

so styles can be applied to src and public

// TAILWIND.js

// SETTINGS.json
-to get suggestions
