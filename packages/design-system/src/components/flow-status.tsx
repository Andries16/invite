import { Box } from "@mui/material";
import * as React from "react";

export const FlowStatus = ({
  ...props
}: { label?: string; status?: string } & React.ComponentProps<typeof Box>) => {
  return <Box {...props} />;
};
