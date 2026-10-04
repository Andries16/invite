import type {} from "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    soft: true;
    accent: true;
  }
}

import { createTheme } from "@mui/material/styles";
import { components } from "./components";
import { palette } from "./tokens";
import { typography } from "./typography";

export const inviteTheme = createTheme({
  cssVariables: { colorSchemeSelector: "class" },
  breakpoints: { values: { xs: 0, sm: 600, md: 780, lg: 1120, xl: 1500 } },
  spacing: 4,
  shape: { borderRadius: 10 },
  palette,
  typography,
  components,
});

export type InviteTheme = typeof inviteTheme;
