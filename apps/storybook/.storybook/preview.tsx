import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: "centered",
    a11y: {
      test: "todo",
    },
  },
  tags: ["autodocs"],
};

export default preview;
