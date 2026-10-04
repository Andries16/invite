import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { MediaPreview } from "./media-preview";

export const RecipeCard = ({
  title,
  description,
  tags,
  action = "Use recipe",
}: {
  title: React.ReactNode;
  description: React.ReactNode;
  tags?: React.ReactNode;
  action?: React.ReactNode;
}) => {
  return (
    <Card>
      <MediaPreview title={title} />
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        {tags && <Box sx={{ mt: 1 }}>{tags}</Box>}
        <Button size="small" variant="contained" sx={{ mt: 1 }}>
          {action}
        </Button>
      </CardContent>
    </Card>
  );
};
