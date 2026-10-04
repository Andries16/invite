import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/experimental-addon-test"],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: "tag",
  },
};

export default config;
