import { ThemeOptions } from "@mui/material/styles";
export const ink = "#171614";
export const muted = "#77736b";
export const line = "#e5e1d8";
export const panel = "#ffffff";
export const panel2 = "#fbfaf8";
export const background = "#f6f5f2";
export const accent = "#7057e8";
export const accent2 = "#8c79f4";
export const soft = "#efebff";
export const dark = "#211f1c";
export const good = "#23845a";
export const warn = "#a56a18";
export const danger = "#b44a4a";

export const palette: ThemeOptions["palette"] = {
  mode: "light",
  background: { default: background, paper: panel },
  text: { primary: ink, secondary: muted },
  primary: {
    main: accent,
    light: accent2,
    dark: "#604ccf",
    contrastText: "#ffffff",
  },
  secondary: { main: dark, contrastText: "#ffffff" },
  success: { main: good, light: "#e5f5ec" },
  warning: { main: warn, light: "#fff1d9" },
  error: { main: danger, light: "#f9e8e8" },
  divider: line,
  grey: {
    50: "#fbfaf8",
    100: "#f1efe9",
    200: line,
    300: "#d7d2c9",
    500: muted,
    700: "#4e4a44",
    900: ink,
  },
};
