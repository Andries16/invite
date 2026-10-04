import { inviteTheme } from "@invite/design-system";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={inviteTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    a11y: { test: "todo" },
  },
  tags: ["autodocs"],
};

export default preview;
