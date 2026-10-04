import { Box } from "@mui/material";
import * as React from "react";

export const SceneRail = ({
  scenes,
  ...props
}: { scenes?: string[] } & React.ComponentProps<typeof Box>) => {
  return <Box {...props} />;
};
