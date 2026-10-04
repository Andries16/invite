import {
  Add,
  ArrowForward,
  CheckCircle,
  MoreHoriz,
  NotificationsNone,
  Publish,
  QrCode2,
} from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta = { title: "Platform/Components", parameters: { layout: "centered" } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Actions: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
      <Button variant="contained">Continue</Button>
      <Button variant="contained">Publish</Button>
      <Button variant="contained">AI suggestion</Button>
      <Button variant="outlined">Secondary</Button>
      <Button variant="text">Cancel</Button>
      <IconButton>
        <NotificationsNone />
      </IconButton>
      <IconButton>
        <MoreHoriz />
      </IconButton>
    </Stack>
  ),
};
export const Statuses: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      <Chip label="Live" sx={{ color: "success" }} />
      <Chip label="Draft" sx={{ color: "primary" }} />
      <Chip label="Scheduled" sx={{ color: "warning" }} />
      <Chip label="Needs attention" sx={{ color: "error" }} />
    </Stack>
  ),
};
export const InvitationCard: Story = {
  render: () => (
    <Card sx={{ width: 380 }}>
      <Paper
        square
        sx={{
          height: 180,
          display: "grid",
          placeItems: "center",
          bgcolor: "#342c44",
          color: "#fff",
          border: 0,
        }}
      >
        <Typography sx={{ fontFamily: "Georgia,serif", fontSize: 28 }}>Elena & Victor</Typography>
      </Paper>
      <CardContent>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography sx={{ fontWeight: 800 }}>Wedding Story</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              5 scenes · 3 interactions
            </Typography>
          </Box>
          <Chip size="small" label="Live" sx={{ color: "success" }} />
        </Stack>
      </CardContent>
    </Card>
  ),
};
export const Progress: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 420 }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography>AI generation</Typography>
        <Typography sx={{ color: "text.secondary" }}>72%</Typography>
      </Stack>
      <LinearProgress value={72} variant="determinate" />
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <CheckCircle color="success" />
        <Typography>Assets optimized</Typography>
        <ArrowForward color="disabled" />
      </Stack>
    </Stack>
  ),
};
export const Distribution: Story = {
  render: () => (
    <Card sx={{ width: 460 }}>
      <CardContent>
        <Typography variant="h3">Distribution</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Public delivery is ready.
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Stack spacing={1}>
          <Button variant="contained" startIcon={<Publish />}>
            Publish
          </Button>
          <Button variant="outlined" startIcon={<QrCode2 />}>
            Generate QR
          </Button>
          <Button variant="outlined" startIcon={<Add />}>
            Add custom domain
          </Button>
        </Stack>
      </CardContent>
    </Card>
  ),
};
export const WorkspaceIdentity: Story = {
  render: () => (
    <Paper sx={{ p: 2, width: 360 }}>
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        <Badge badgeContent="Pro" color="primary">
          <Avatar>AM</Avatar>
        </Badge>
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontWeight: 800 }}>Andrei's Studio</Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            12 experiences · 246 media assets
          </Typography>
        </Box>
      </Stack>
    </Paper>
  ),
};
