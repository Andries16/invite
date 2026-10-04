import { ThemeOptions } from "@mui/material/styles";
export const typography: ThemeOptions["typography"] = {
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: 14,
  fontWeightRegular: 400,
  fontWeightMedium: 650,
  fontWeightBold: 800,
  h1: {
    fontSize: "2.5rem",
    lineHeight: 1.05,
    fontWeight: 850,
    letterSpacing: "-0.055em",
  },
  h2: {
    fontSize: "2rem",
    lineHeight: 1.08,
    fontWeight: 800,
    letterSpacing: "-0.04em",
  },
  h3: {
    fontSize: "1.35rem",
    lineHeight: 1.15,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  h4: {
    fontSize: "1.125rem",
    lineHeight: 1.2,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  body1: { lineHeight: 1.55 },
  body2: { fontSize: "0.8125rem", lineHeight: 1.55 },
  button: { textTransform: "none", fontWeight: 720, letterSpacing: 0 },
  caption: { fontSize: "0.6875rem", lineHeight: 1.4 },
};
