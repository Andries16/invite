import { Box, Typography } from "@mui/material";
import * as React from "react";

export const EditorShell = ({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "secondary.main",
        color: "#fff",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "260px minmax(0,1fr) 300px" },
      }}
    >
      <Box sx={{ p: 2, display: { xs: "none", lg: "block" }, bgcolor: "#211f1c" }}>
        {left ?? (
          <>
            <Typography variant="overline" sx={{ color: "primary.light" }}>
              Experience editor
            </Typography>
            <Typography variant="h3" sx={{ color: "#fff" }}>
              A little surprise
            </Typography>
          </>
        )}
      </Box>
      <Box sx={{ p: { xs: 1.5, lg: 2 }, bgcolor: "#292729" }}>{children}</Box>
      <Box
        sx={{
          p: 2,
          bgcolor: "background.paper",
          color: "text.primary",
          display: { xs: "none", lg: "block" },
          overflowY: "auto",
        }}
      >
        {right ?? <Typography sx={{ fontWeight: 800 }}>Scene inspector</Typography>}
      </Box>
    </Box>
  );
};
