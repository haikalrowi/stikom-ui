const path = require("path");
const stikom = require.resolve("@stikom-ui/react");

const content = [
  path.join(path.dirname(stikom), "**/*.js"),
  path.join(path.dirname(stikom), "**/*.ts"),
  path.join(path.dirname(stikom), "**/*.jsx"),
  path.join(path.dirname(stikom), "**/*.tsx"),
];

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", ...content],
  theme: {
    extend: {},
  },
  plugins: [],
};
