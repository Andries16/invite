import { Box, Button, Chip, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";

export const CreatorShell = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Box
        component="aside"
        sx={{
          display: { xs: "none", md: "block" },
          width: 252,
          flexShrink: 0,
          bgcolor: "secondary.main",
          color: "#fff",
          p: 2,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <Typography sx={{ fontWeight: 900, fontSize: 18, p: 1 }}>i. invite.md</Typography>
        <Paper sx={{ p: 1.2, my: 2, bgcolor: "#ffffff12", color: "#fff" }}>
          <Typography sx={{ fontSize: 11, fontWeight: 800 }}>Andrei’s workspace</Typography>
          <Typography sx={{ fontSize: 10, color: "#bcb7af" }}>Personal · Creator</Typography>
        </Paper>
        <Typography variant="caption" sx={{ color: "#aaa59d", p: 1 }}>
          WORKSPACE
        </Typography>
        <Stack spacing={0.25} sx={{ mt: 1 }}>
          {[
            "Overview",
            "Create",
            "Experiences",
            "Templates",
            "Invitations",
            "Campaigns",
            "Media",
            "Story & AI",
            "Interactions",
            "Analytics",
            "Distribution",
            "Settings",
            "Team",
            "Billing",
            "Marketplace",
            "Exports",
          ].map((x) => (
            <Button
              key={x}
              size="small"
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                color: x === title ? "#fff" : "#aaa59d",
                bgcolor: x === title ? "#ffffff14" : undefined,
              }}
            >
              {x}
            </Button>
          ))}
        </Stack>
        <Box sx={{ mt: 2, p: 1.2, border: "1px solid #ffffff18", borderRadius: 2 }}>
          <Typography sx={{ fontSize: 10, fontWeight: 800 }}>Creator plan</Typography>
          <Typography sx={{ fontSize: 9, color: "#bcb7af" }}>68 / 200 AI generations</Typography>
          <LinearProgress value={34} variant="determinate" sx={{ mt: 1 }} />
        </Box>
      </Box>
      <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            height: 68,
            px: { xs: 2, md: 4 },
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.paper",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 4,
          }}
        >
          <Typography sx={{ fontSize: 11, color: "text.secondary" }}>
            Workspace / <b>{title}</b>
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip size="small" label="Creator · 68%" />
            <Button size="small" variant="contained">
              New invitation
            </Button>
          </Stack>
        </Box>
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1500, mx: "auto" }}>{children}</Box>
      </Box>
    </Box>
  );
};
