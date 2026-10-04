import { Box } from "@mui/material";
import * as React from "react";

export const PrototypeTable = ({
  headers: _headers,
  rows: _rows,
  ...props
}: { headers?: string[]; rows?: string[][] } & React.ComponentProps<typeof Box>) => {
  return <Box {...props} />;
};
