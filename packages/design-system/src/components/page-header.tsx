import { Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import * as React from "react";

export const PageHeader = ({
  eyebrow,
  title,
  body,
  actions,
  sx,
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  body?: React.ReactNode;
  actions?: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "flex-start", md: "flex-end" },
        gap: 2,
        ...sx,
      }}
    >
      <Box>
        <Typography variant="overline" sx={{ color: "primary", ...{ fontWeight: 800 } }}>
          {eyebrow}
        </Typography>
        <Typography variant="h1">{title}</Typography>
        {body && (
          <Typography sx={{ color: "text.secondary", ...{ maxWidth: 760 } }}>{body}</Typography>
        )}
      </Box>
      {actions && (
        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
          {actions}
        </Stack>
      )}
    </Stack>
  );
};
