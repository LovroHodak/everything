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
-that tailwind components can accept classes, refs, props

// SETTINGS.json
-to get suggestions of tailwind classes

2. INDEX.html
-added overflow-y to body and #root

APP.js
-useEffect to listen to ref sent to First
-if useState changes in App.js change color in First.js

3. npm i react-query

