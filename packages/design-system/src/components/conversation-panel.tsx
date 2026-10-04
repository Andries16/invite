import { Box } from "@mui/material";
import * as React from "react";

export const ConversationPanel = ({
  ...props
}: { children?: React.ReactNode } & React.ComponentProps<typeof Box>) => {
  return <Box {...props} />;
};
