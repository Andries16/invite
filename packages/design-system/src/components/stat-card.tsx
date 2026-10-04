import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import * as React from "react";

export const StatCard = ({
  label,
  value,
  delta,
  progress,
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  delta?: React.ReactNode;
  progress?: number;
}) => {
  return (
    <Card>
      <CardContent>
        <Typography sx={{ color: "text.secondary" }}>{label}</Typography>
        <Typography variant="h2">{value}</Typography>
        {delta && <Typography sx={{ color: "success.main" }}>{delta}</Typography>}
        {progress !== undefined && (
          <LinearProgress value={progress} variant="determinate" sx={{ mt: 1.5 }} />
        )}
      </CardContent>
    </Card>
  );
};
