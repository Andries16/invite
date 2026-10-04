import { Box } from "@mui/material";
import * as React from "react";

export const PermissionGate = ({
  title: _title,
  body: _body,
  action: _action,
  children: _children,
  ...props
}: {
  title?: string;
  body?: string;
  action?: string | React.ReactNode;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Box>) => {
  return <Box {...props} />;
};
