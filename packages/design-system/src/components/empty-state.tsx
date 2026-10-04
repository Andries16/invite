import { Box } from "@mui/material";
import * as React from "react";

export const EmptyState = ({
  title,
  body,
  action,
  actions,
  icon,
  ...props
}: {
  title?: string;
  body?: string;
  action?: string;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
} & React.ComponentProps<typeof Box>) => {
  return <Box {...props} />;
};
