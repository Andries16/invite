import { alpha, createTheme } from "@mui/material/styles";

const ink = "#171614";
const muted = "#77736b";
const line = "#e5e1d8";
const panel = "#ffffff";
const panel2 = "#fbfaf8";
const background = "#f6f5f2";
const accent = "#7057e8";
const accent2 = "#8c79f4";
const soft = "#efebff";
const dark = "#211f1c";
const good = "#23845a";
const warn = "#a56a18";
const danger = "#b44a4a";

export const inviteTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: background, paper: panel },
    text: { primary: ink, secondary: muted },
    primary: { main: accent, light: accent2, dark: "#604ccf", contrastText: "#ffffff" },
    secondary: { main: dark, contrastText: "#ffffff" },
    success: { main: good, light: "#e5f5ec" },
    warning: { main: warn, light: "#fff1d9" },
    error: { main: danger, light: "#f9e8e8" },
    divider: line,
    grey: { 50: "#fbfaf8", 100: "#f1efe9", 200: line, 300: "#d7d2c9", 500: muted, 700: "#4e4a44", 900: ink },
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 650,
    fontWeightBold: 800,
    h1: { fontSize: "2.5rem", lineHeight: 1.05, fontWeight: 850, letterSpacing: "-0.055em" },
    h2: { fontSize: "2rem", lineHeight: 1.08, fontWeight: 800, letterSpacing: "-0.04em" },
    h3: { fontSize: "1.35rem", lineHeight: 1.15, fontWeight: 800, letterSpacing: "-0.02em" },
    h4: { fontSize: "1.125rem", lineHeight: 1.2, fontWeight: 800, letterSpacing: "-0.02em" },
    body1: { lineHeight: 1.55 },
    body2: { fontSize: "0.8125rem", lineHeight: 1.55 },
    button: { textTransform: "none", fontWeight: 720, letterSpacing: 0 },
    caption: { fontSize: "0.6875rem", lineHeight: 1.4 },
  },
  shadows: [
    "none",
    "0 1px 0 rgba(255,255,255,0.9) inset",
    "0 3px 12px rgba(31,27,22,0.05)",
    "0 7px 18px rgba(31,27,22,0.07)",
    "0 14px 45px rgba(31,27,22,0.07)",
    "0 25px 65px rgba(31,27,22,0.10)",
    "0 25px 80px rgba(31,27,22,0.14)",
    ...Array(19).fill("0 25px 80px rgba(31,27,22,0.14)"),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { background: background },
        body: { margin: 0, background: background, color: ink, WebkitFontSmoothing: "antialiased" },
        "button, input, textarea, select": { font: "inherit" },
        "*:focus-visible": { outline: `3px solid ${alpha(accent, 0.2)}`, outlineOffset: 2 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: "none", border: `1px solid ${line}`, boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset" },
        rounded: { borderRadius: 17 },
      },
    },
    MuiCard: {
      defaultProps: { variant: "outlined" },
      styleOverrides: { root: { borderRadius: 17, backgroundColor: panel, overflow: "hidden", boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset" } },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { minHeight: 36, borderRadius: 10, padding: "9px 13px", fontWeight: 720, whiteSpace: "nowrap", transition: "transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease", "&:hover": { transform: "translateY(-1px)", boxShadow: "0 7px 18px rgba(0,0,0,0.07)" }, "&:active": { transform: "translateY(0)" } },
        sizeSmall: { minHeight: 32, padding: "7px 10px", fontSize: "0.6875rem" },
        sizeLarge: { minHeight: 42, padding: "11px 16px" },
      },
      variants: [
        { props: { variant: "contained" }, style: { backgroundColor: dark, color: "#fff", border: `1px solid ${dark}`, "&:hover": { backgroundColor: "#2b2824" } } },
        { props: { variant: "outlined" }, style: { backgroundColor: panel, color: ink, borderColor: line, "&:hover": { backgroundColor: "#f1efe9", borderColor: "#d7d2c9" } } },
        { props: { variant: "text" }, style: { color: muted, backgroundColor: "transparent", "&:hover": { backgroundColor: "#f1efe9" } } },
        { props: { variant: "soft" }, style: { backgroundColor: soft, color: "#604ccf", border: "1px solid #dfd7ff", "&:hover": { backgroundColor: "#e8e3ff", borderColor: "#d5ccff" } } },
        { props: { variant: "accent" }, style: { backgroundColor: accent, color: "#fff", border: `1px solid ${accent}`, "&:hover": { backgroundColor: "#604ccf" } } },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: { width: 36, height: 36, border: `1px solid ${line}`, borderRadius: 10, backgroundColor: panel, color: muted, "&:hover": { backgroundColor: "#f1efe9" } },
        sizeSmall: { width: 30, height: 30 },
      },
    },
    MuiTextField: { defaultProps: { variant: "outlined", size: "small" } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 9, backgroundColor: panel, "& .MuiOutlinedInput-notchedOutline": { borderColor: line }, "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#d7d2c9" }, "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#b9aef3", borderWidth: 1 } },
        input: { padding: "9px 11px" },
      },
    },
    MuiInputLabel: { styleOverrides: { root: { color: muted, fontSize: "0.8125rem", "&.Mui-focused": { color: "#604cccf" } } } },
    MuiSelect: { defaultProps: { variant: "outlined", size: "small" } },
    MuiAutocomplete: { defaultProps: { size: "small" }, styleOverrides: { root: { "& .MuiOutlinedInput-root": { borderRadius: 9, backgroundColor: panel } }, tag: { borderRadius: 999 } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 999, fontWeight: 650, backgroundColor: "#f0eee8" }, colorPrimary: { backgroundColor: soft, color: "#604cccf" }, sizeSmall: { height: 24, fontSize: "0.6875rem" } } },
    MuiToggleButtonGroup: { styleOverrides: { root: { backgroundColor: "#efede7", borderRadius: 9, padding: 3, gap: 2 } } },
    MuiToggleButton: { styleOverrides: { root: { border: 0, borderRadius: 7, padding: "6px 8px", color: muted, fontSize: "0.6875rem", textTransform: "none", "&.Mui-selected": { backgroundColor: panel, color: ink, fontWeight: 750, boxShadow: "0 2px 6px rgba(0,0,0,0.06)", "&:hover": { backgroundColor: panel } } } } },
    MuiTabs: { styleOverrides: { root: { minHeight: 40 }, indicator: { height: 2, borderRadius: 2, backgroundColor: accent } } },
    MuiTab: { styleOverrides: { root: { minHeight: 40, minWidth: 0, padding: "8px 12px", textTransform: "none", color: muted, fontWeight: 650, "&.Mui-selected": { color: ink } } } },
    MuiDialog: { styleOverrides: { paper: { borderRadius: 20, padding: 23, boxShadow: "0 25px 80px rgba(31,27,22,0.14)" } } },
    MuiDrawer: { styleOverrides: { paper: { backgroundColor: panel2, borderColor: line } } },
    MuiDivider: { styleOverrides: { root: { borderColor: line } } },
    MuiAlert: { styleOverrides: { root: { borderRadius: 11, border: `1px solid ${line}` } } },
    MuiLinearProgress: { styleOverrides: { root: { height: 6, borderRadius: 9, backgroundColor: "#eeeae2" }, bar: { borderRadius: 9 } } },
    MuiTooltip: { styleOverrides: { tooltip: { backgroundColor: dark, borderRadius: 8, fontSize: "0.6875rem" } } },
  },
});

export type InviteTheme = typeof inviteTheme;
