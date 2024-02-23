const path = require("path");
const stikom = require.resolve("@stikom-ui/react");

const content = [
  path.join(path.dirname(stikom), "**/*.js"),
  path.join(path.dirname(stikom), "**/*.ts"),
  path.join(path.dirname(stikom), "**/*.jsx"),
  path.join(path.dirname(stikom), "**/*.tsx"),
];

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ...content,
  ],
  plugins: [],
};
