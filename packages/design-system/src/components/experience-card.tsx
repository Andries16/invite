import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material";
import * as React from "react";
import { MediaPreview } from "./media-preview";
import { InviteStatus, StatusChip } from "./status-chip";

export const ExperienceCard = ({
  title,
  status = "draft",
  meta = "6 scenes · 3 interactions",
  onOpen,
}: {
  title: React.ReactNode;
  status?: InviteStatus;
  meta?: React.ReactNode;
  onOpen?: () => void;
}) => {
  return (
    <Card>
      <MediaPreview title={title} subtitle={meta} />
      <CardContent>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Box>
            <Typography sx={{ fontWeight: 800 }}>{title}</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {meta}
            </Typography>
          </Box>
          <StatusChip status={status} />
        </Stack>
        <Button size="small" sx={{ mt: 1 }} onClick={onOpen}>
          Continue
        </Button>
      </CardContent>
    </Card>
  );
};
