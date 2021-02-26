import { configure } from "@storybook/react";

// automatically import all files ending in *.stories.js
configure(
  require.context(
    "..",
    true,
    /^.\/(components|stories)\/.*\.stories\.(js|tsx)$/
  ),
  module
);
