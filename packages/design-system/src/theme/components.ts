import { alpha, ThemeOptions } from "@mui/material/styles";
import { accent, background, dark, ink, line, muted, panel, panel2, soft } from "./tokens";

export const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    defaultProps: { enableColorScheme: true },
    styleOverrides: {
      html: { background: background },
      body: {
        margin: 0,
        background: background,
        color: ink,
        WebkitFontSmoothing: "antialiased",
      },
      "button, input, textarea, select": { font: "inherit" },
      "*:focus-visible": {
        outline: `3px solid ${alpha(accent, 0.2)}`,
        outlineOffset: 2,
      },
      button: { cursor: "pointer" },
      "button:disabled": { cursor: "default" },
      "::selection": { backgroundColor: alpha(accent, 0.18) },
      "@media (prefers-reduced-motion: reduce)": {
        "*": {
          scrollBehavior: "auto !important",
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          transitionDuration: "0.01ms !important",
        },
      },
    },
  },
  MuiAppBar: {
    defaultProps: { elevation: 0 },
    styleOverrides: {
      root: {
        backgroundColor: alpha(panel2, 0.91),
        color: ink,
        backgroundImage: "none",
        borderBottom: `1px solid ${line}`,
        backdropFilter: "blur(14px)",
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: 70,
        paddingLeft: 30,
        paddingRight: 30,
        "@media (max-width: 780px)": {
          paddingLeft: 15,
          paddingRight: 15,
          minHeight: 70,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: "none",
        border: `1px solid ${line}`,
        boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset",
      },
      rounded: { borderRadius: 17 },
    },
  },
  MuiCard: {
    defaultProps: { variant: "outlined" },
    styleOverrides: {
      root: {
        borderRadius: 17,
        backgroundColor: panel,
        overflow: "hidden",
        boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset",
      },
    },
  },
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        minHeight: 36,
        borderRadius: 10,
        padding: "9px 13px",
        fontWeight: 720,
        whiteSpace: "nowrap",
        transition: "transform 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 7px 18px rgba(0,0,0,0.07)",
        },
        "&:active": { transform: "translateY(0)" },
      },
      sizeSmall: {
        minHeight: 32,
        padding: "7px 10px",
        fontSize: "0.6875rem",
      },
      sizeLarge: { minHeight: 42, padding: "11px 16px" },
    },
    variants: [
      {
        props: { variant: "contained" },
        style: {
          backgroundColor: dark,
          color: "#fff",
          border: `1px solid ${dark}`,
          "&:hover": { backgroundColor: "#2b2824" },
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          backgroundColor: panel,
          color: ink,
          borderColor: line,
          "&:hover": { backgroundColor: "#f1efe9", borderColor: "#d7d2c9" },
        },
      },
      {
        props: { variant: "text" },
        style: {
          color: muted,
          backgroundColor: "transparent",
          "&:hover": { backgroundColor: "#f1efe9" },
        },
      },
      {
        props: { variant: "soft" },
        style: {
          backgroundColor: soft,
          color: "#604ccf",
          border: "1px solid #dfd7ff",
          "&:hover": { backgroundColor: "#e8e3ff", borderColor: "#d5ccff" },
        },
      },
      {
        props: { variant: "accent" },
        style: {
          backgroundColor: accent,
          color: "#fff",
          border: `1px solid ${accent}`,
          "&:hover": { backgroundColor: "#604ccf" },
        },
      },
    ],
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        width: 34,
        height: 34,
        fontSize: "0.625rem",
        fontWeight: 850,
        background: "linear-gradient(145deg, #ddd6ff, #b9adff)",
        color: ink,
      },
    },
  },
  MuiList: { styleOverrides: { root: { paddingTop: 0, paddingBottom: 0 } } },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        minHeight: 40,
        borderRadius: 10,
        padding: "10px 11px",
        color: muted,
        fontWeight: 650,
        gap: 10,
        "&:hover": { backgroundColor: "#efede7", color: ink },
        "&.Mui-selected": {
          backgroundColor: "#efede7",
          color: ink,
          boxShadow: `inset 3px 0 0 ${accent}`,
          "&:hover": { backgroundColor: "#efede7" },
        },
      },
    },
  },
  MuiListItemIcon: {
    styleOverrides: {
      root: { minWidth: 21, color: "inherit", justifyContent: "center" },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      primary: { fontSize: "0.875rem", fontWeight: 650 },
      secondary: { fontSize: "0.625rem", color: muted, marginTop: 2 },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        width: 36,
        height: 36,
        border: `1px solid ${line}`,
        borderRadius: 10,
        backgroundColor: panel,
        color: muted,
        "&:hover": { backgroundColor: "#f1efe9" },
      },
      sizeSmall: { width: 30, height: 30 },
    },
  },
  MuiTextField: { defaultProps: { variant: "outlined", size: "small" } },
  MuiFormControl: { defaultProps: { size: "small" } },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: muted,
        fontSize: "0.8125rem",
        "&.Mui-focused": { color: "#604ccf" },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: { marginLeft: 0, marginRight: 0, fontSize: "0.6875rem" },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 9,
        backgroundColor: panel,
        "& .MuiOutlinedInput-notchedOutline": { borderColor: line },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d7d2c9",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#b9aef3",
          borderWidth: 1,
        },
      },
      input: { padding: "9px 11px" },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: muted,
        fontSize: "0.8125rem",
        "&.Mui-focused": { color: "#604ccf" },
      },
    },
  },
  MuiSelect: { defaultProps: { variant: "outlined", size: "small" } },
  MuiAutocomplete: {
    defaultProps: { size: "small" },
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: 9,
          backgroundColor: panel,
        },
      },
      tag: { borderRadius: 999 },
    },
  },
  MuiBadge: {
    styleOverrides: {
      badge: {
        minWidth: 18,
        height: 18,
        padding: "0 5px",
        borderRadius: 99,
        fontSize: "0.5625rem",
        fontWeight: 850,
        backgroundColor: soft,
        color: "#604ccf",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 999,
        fontWeight: 650,
        backgroundColor: "#f0eee8",
      },
      colorPrimary: { backgroundColor: soft, color: "#604ccf" },
      sizeSmall: { height: 24, fontSize: "0.6875rem" },
    },
  },
  MuiToggleButtonGroup: {
    styleOverrides: {
      root: {
        backgroundColor: "#efede7",
        borderRadius: 9,
        padding: 3,
        gap: 2,
      },
    },
  },
  MuiToggleButton: {
    styleOverrides: {
      root: {
        border: 0,
        borderRadius: 7,
        padding: "6px 8px",
        color: muted,
        fontSize: "0.6875rem",
        textTransform: "none",
        "&.Mui-selected": {
          backgroundColor: panel,
          color: ink,
          fontWeight: 750,
          boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
          "&:hover": { backgroundColor: panel },
        },
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        marginTop: 4,
        border: `1px solid ${line}`,
        borderRadius: 13,
        boxShadow: "0 14px 45px rgba(31,27,22,0.07)",
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        minHeight: 36,
        borderRadius: 8,
        margin: "2px 4px",
        padding: "7px 10px",
        fontSize: "0.8125rem",
        "&:hover": { backgroundColor: "#f1efe9" },
        "&.Mui-selected": {
          backgroundColor: soft,
          color: "#604ccf",
          "&:hover": { backgroundColor: "#e8e3ff" },
        },
      },
    },
  },
  MuiBreadcrumbs: {
    styleOverrides: {
      root: { fontSize: "0.75rem", color: muted },
      separator: { color: "#a09c94" },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: { minHeight: 40 },
      indicator: { height: 2, borderRadius: 2, backgroundColor: accent },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        minHeight: 40,
        minWidth: 0,
        padding: "8px 12px",
        textTransform: "none",
        color: muted,
        fontWeight: 650,
        "&.Mui-selected": { color: ink },
      },
    },
  },
  MuiDialog: {
    defaultProps: { maxWidth: "sm", fullWidth: true },
    styleOverrides: {
      paper: {
        borderRadius: 20,
        padding: 23,
        boxShadow: "0 25px 80px rgba(31,27,22,0.14)",
      },
    },
  },
  MuiDrawer: {
    styleOverrides: { paper: { backgroundColor: panel2, borderColor: line } },
  },
  MuiSnackbarContent: {
    styleOverrides: {
      root: {
        backgroundColor: "#25231f",
        color: "#fff",
        borderRadius: 11,
        boxShadow: "0 25px 80px rgba(31,27,22,0.14)",
        fontSize: "0.75rem",
      },
    },
  },
  MuiDivider: { styleOverrides: { root: { borderColor: line } } },
  MuiAlert: {
    styleOverrides: {
      root: { borderRadius: 11, border: `1px solid ${line}` },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: { height: 6, borderRadius: 9, backgroundColor: "#eeeae2" },
      bar: { borderRadius: 9 },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: { width: 38, height: 24, padding: 0 },
      switchBase: {
        padding: 3,
        "&.Mui-checked": {
          transform: "translateX(14px)",
          color: "#fff",
          "& + .MuiSwitch-track": { backgroundColor: accent, opacity: 1 },
        },
      },
      thumb: { width: 18, height: 18 },
      track: { borderRadius: 12, backgroundColor: "#d7d2c9", opacity: 1 },
    },
  },
  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 6,
        color: "#aaa49a",
        "&.Mui-checked": { color: accent },
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        padding: 6,
        color: "#aaa49a",
        "&.Mui-checked": { color: accent },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: dark,
        borderRadius: 8,
        fontSize: "0.6875rem",
      },
    },
  },
};
