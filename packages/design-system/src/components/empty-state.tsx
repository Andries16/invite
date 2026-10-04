import { Box } from "@mui/material";
import * as React from "react";

export const EmptyState = ({
  title: _title,
  body: _body,
  action: _action,
  actions: _actions,
  icon: _icon,
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
