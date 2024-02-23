# Installation

Important steps to bootstrap your project with STIKOM UI.

- You must have **Tailwind CSS properly configured** with your desired framework.

  See [Tailwind CSS - Framework Guides](https://tailwindcss.com/docs/installation/framework-guides).

- Install STIKOM UI:

  ```
  npm install @stikom-ui/react
  ```

- Add some configuration lines:

  > This may be a little tricky. Open an issue if something goes wrong.

  ```js title="tailwind.config.js"
  const path = require("path");
  const stikom = require.resolve("@stikom-ui/react");

  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      // ...
      path.join(path.dirname(stikom), "**/*.js"),
      path.join(path.dirname(stikom), "**/*.ts"),
      path.join(path.dirname(stikom), "**/*.jsx"),
      path.join(path.dirname(stikom), "**/*.tsx"),
    ],
    // ...
  };
  ```

  See [Tailwind CSS - Content Configuration](https://tailwindcss.com/docs/content-configuration#working-with-third-party-libraries).
