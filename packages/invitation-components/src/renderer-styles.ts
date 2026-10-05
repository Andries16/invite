import type { CSSProperties } from "react";

export const runtimeStyle = {
  minHeight: "100vh",
  boxSizing: "border-box" as const,
};

export const experienceStyle = {
  width: "min(100%, 900px)",
  margin: "0 auto",
  padding: "24px",
  boxSizing: "border-box" as const,
};

export const topBarStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 0 24px",
  fontSize: 12,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  opacity: 0.7,
};

export const sceneStyle = {
  minHeight: "calc(100vh - 130px)",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  gap: 24,
  padding: "32px 0 64px",
};

export const sceneHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  fontSize: 12,
  opacity: 0.65,
};

export const sectionStyle = {
  display: "grid",
  gap: 12,
};

export const eyebrowStyle = {
  margin: 0,
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  opacity: 0.7,
};

export const heroTitleStyle = {
  margin: 0,
  fontSize: "clamp(48px, 9vw, 96px)",
  lineHeight: 0.98,
  fontWeight: 500,
};

export const headingStyle = {
  margin: 0,
  fontSize: "clamp(30px, 5vw, 52px)",
  lineHeight: 1.05,
};

export const bodyStyle = {
  margin: 0,
  maxWidth: 680,
  fontSize: "clamp(17px, 2vw, 21px)",
  lineHeight: 1.65,
  opacity: 0.78,
};

export const mediaStyle = {
  margin: 0,
  display: "grid",
  gap: 8,
};

export const imageStyle = {
  width: "100%",
  maxHeight: 620,
  objectFit: "cover" as const,
  borderRadius: 20,
};

export const galleryStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 10,
};

export const galleryImageStyle = {
  width: "100%",
  aspectRatio: "1",
  objectFit: "cover" as const,
  borderRadius: 14,
};

export const primaryButtonStyle: CSSProperties = {
  border: "none",
  borderRadius: 999,
  padding: "14px 22px",
  background: "var(--invite-primary)",
  color: "white",
  cursor: "pointer",
  font: "inherit",
  justifySelf: "start",
};

export const secondaryButtonStyle = {
  border: "1px solid currentColor",
  borderRadius: 999,
  padding: "12px 18px",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  font: "inherit",
  justifySelf: "start",
};

export const selectedButtonStyle = {
  ...secondaryButtonStyle,
  background: "currentColor",
  color: "white",
};

export const choiceGridStyle = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: 10,
};

export const sceneNavigationStyle = {
  display: "flex",
  justifyContent: "center",
  gap: 8,
  padding: "8px 0 24px",
};

export const sceneDotStyle = {
  width: 8,
  height: 8,
  border: 0,
  borderRadius: "50%",
  padding: 0,
  cursor: "default",
};

export const timelineStyle = {
  display: "grid",
  gap: 16,
  margin: 0,
  paddingLeft: 24,
};

export const timelineItemStyle = {
  display: "grid",
  gap: 4,
  padding: "16px 0",
  borderBottom: "1px solid currentColor",
};

export const countdownGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 10,
};

export const countdownItemStyle = {
  display: "grid",
  gap: 4,
  textAlign: "center" as const,
  padding: 16,
  border: "1px solid currentColor",
  borderRadius: 16,
};

export const audioStyle = {
  width: "100%",
  maxWidth: 560,
};

export const guestbookLabelStyle = {
  display: "grid",
  gap: 8,
};

export const guestbookInputStyle = {
  width: "100%",
  resize: "vertical" as const,
  border: "1px solid currentColor",
  borderRadius: 12,
  padding: 12,
  background: "transparent",
  color: "inherit",
};

export const guestbookEntriesStyle = {
  display: "grid",
  gap: 8,
};

export const errorStyle = {
  minHeight: "100vh",
  padding: 32,
  display: "grid",
  placeContent: "center",
  gap: 12,
};
