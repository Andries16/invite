import { Box, Typography } from "@mui/material";
import * as React from "react";

export const MediaPreview = ({
  title,
  subtitle,
  height = 180,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  height?: number;
}) => {
  return (
    <Box
      sx={{
        height,
        p: 2,
        display: "flex",
        alignItems: "flex-end",
        color: "#fff",
        background: "linear-gradient(135deg,#28252d,#86677f)",
      }}
    >
      <Box>
        <Typography sx={{ color: "inherit", ...{ fontWeight: 800 } }}>{title}</Typography>
        {subtitle && (
          <Typography variant="caption" sx={{ color: "inherit" }}>
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
