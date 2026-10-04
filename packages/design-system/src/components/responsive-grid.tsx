import { Box } from "@mui/material";
import * as React from "react";

export const ResponsiveGrid = ({
  children,
  columns = 3,
}: {
  children: React.ReactNode;
  columns?: number;
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2,minmax(0,1fr))",
          lg: `repeat(${columns},minmax(0,1fr))`,
        },
      }}
    >
      {children}
    </Box>
  );
};
