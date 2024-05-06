import type { Config } from 'tailwindcss';

const path = require('path');
const stikom = require.resolve('@stikom-ui/react');

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    path.join(path.dirname(stikom), '**/*.js'),
    path.join(path.dirname(stikom), '**/*.ts'),
    path.join(path.dirname(stikom), '**/*.jsx'),
    path.join(path.dirname(stikom), '**/*.tsx'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
