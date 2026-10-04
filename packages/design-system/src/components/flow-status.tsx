import { Box, Typography } from "@mui/material";
import * as React from "react";

export const FlowStatus = ({
  label,
  status,
  ...props
}: { label?: string; status?: string } & React.ComponentProps<typeof Box>) => {
  return (
    <Box {...props}>
      {label && <Typography>{label}</Typography>}
      {status === "live" && <Typography>Live</Typography>}
      {status === "ready" && <Typography>Ready</Typography>}
      {status === "draft" && <Typography>Draft</Typography>}
      {status === "attention" && <Typography>Needs attention</Typography>}
    </Box>
  );
};
