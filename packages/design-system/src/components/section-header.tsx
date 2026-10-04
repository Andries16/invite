import { Box, Stack, Typography } from "@mui/material";
import * as React from "react";

export const SectionHeader = ({
  title,
  body,
  action,
}: {
  title: React.ReactNode;
  body?: React.ReactNode;
  action?: React.ReactNode;
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 2,
        mt: 4,
        mb: 1.5,
      }}
    >
      <Box>
        <Typography variant="h3">{title}</Typography>
        {body && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {body}
          </Typography>
        )}
      </Box>
      {action}
    </Stack>
  );
};
