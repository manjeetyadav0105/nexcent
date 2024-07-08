
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## command for setup:

npx create-next-app@latest

 Install tailwindcss and its peer dependencies:
```bash npm i -D tailwindcss postcss autoprefixer ```

 Generate tailwind.config.js and postcss.config.js files:
```bash npx tailwindcss init -p```

 Add the paths to all of your template files in your tailwind.config.js file:
```bash
** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
 Run the following command to install flowbite-react:
```bash npm i flowbite-react```

 Add the Flowbite React content path and plugin to tailwind.config.js:
```bash
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
}; ```

@made by Jyoti Saini
