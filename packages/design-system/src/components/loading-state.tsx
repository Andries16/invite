import { Box } from "@mui/material";
import * as React from "react";

export const LoadingState = ({
  title: _title,
  body: _body,
  ...props
}: { title?: string; body?: string } & React.ComponentProps<typeof Box>) => {
  return <Box {...props} />;
};
