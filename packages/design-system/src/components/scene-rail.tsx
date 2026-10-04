import { Box, Typography } from "@mui/material";
import * as React from "react";

export const SceneRail = ({
  scenes,
  ...props
}: { scenes?: string[] } & React.ComponentProps<typeof Box>) => {
  return (
    <Box {...props}>
      {scenes?.map((scene, i) => (
        <Typography key={i}>{scene}</Typography>
      ))}
    </Box>
  );
};
