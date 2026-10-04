import { Box } from "@mui/material";
import * as React from "react";

export const PreviewFrame = ({
  children,
  mode = "phone",
}: {
  children: React.ReactNode;
  mode?: "phone" | "desktop";
}) => {
  return (
    <Box
      sx={{
        mx: "auto",
        maxWidth: mode === "phone" ? 430 : 980,
        minHeight: mode === "phone" ? 600 : 520,
        borderRadius: mode === "phone" ? 5 : 3,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
        background: "linear-gradient(135deg,#161419,#594052)",
      }}
    >
      {children}
    </Box>
  );
};
