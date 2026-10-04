import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/experimental-addon-test"],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: "tag",
  },
};

export default config;
