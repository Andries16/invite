import { EmptyState, LoadingState, PermissionGate } from "@invite/design-system";
import {
  Add,
  AutoAwesome,
  CheckCircle,
  Close,
  ErrorOutlined,
  HelpOutlined,
  InfoOutlined,
  WarningAmber,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Skeleton,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = {
  title: "Platform/States & Responsive",
  parameters: { layout: "centered" },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ minWidth: 340, maxWidth: 1100, p: 4, bgcolor: "background.default" }}>{children}</Box>
);

export const EmptyExperiences: Story = {
  render: () => (
    <Stage>
      <EmptyState
        title="No experiences yet"
        icon={
          <Avatar
            sx={{
              mx: "auto",
              width: 52,
              height: 52,
              bgcolor: "primary.light",
              color: "primary.dark",
            }}
          >
            <AutoAwesome />
          </Avatar>
        }
        body="Start with an idea, a template, or a blank canvas. Your first experience can be ready in minutes."
        actions={
          <>
            <Button variant="contained" startIcon={<Add />}>
              Create with AI
            </Button>
            <Button variant="outlined">Browse templates</Button>
          </>
        }
      />
    </Stage>
  ),
};

export const EmptyMedia: Story = {
  render: () => (
    <Stage>
      <EmptyState
        title="Your media library is empty"
        body="Upload photos, videos, GIFs, audio and stickers to start composing scenes."
        actions={
          <Button variant="contained" startIcon={<Add />}>
            Upload media
          </Button>
        }
      />
    </Stage>
  ),
};

export const Errors: Story = {
  render: () => (
    <Stage>
      <Stack spacing={1.5}>
        <Alert severity="error" icon={<ErrorOutlined />}>
          The generation failed. Your draft is safe. Retry without losing changes.
        </Alert>
        <Alert severity="warning" icon={<WarningAmber />}>
          3 media files are above the recommended delivery size.
        </Alert>
        <Alert severity="info" icon={<InfoOutlined />}>
          This campaign uses guest variables. Preview a recipient before publishing.
        </Alert>
        <Alert severity="success" icon={<CheckCircle />}>
          Version 7 is production-ready.
        </Alert>
      </Stack>
    </Stage>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <Stage>
      <Stack spacing={2}>
        <LoadingState title="Generating scenes…" body="This can take a few seconds." />
        <Card>
          <CardContent>
            <Skeleton variant="text" width="40%" height={30} />
            <Skeleton variant="rounded" height={120} />
            <Skeleton variant="text" width="75%" />
            <Skeleton variant="text" width="55%" />
          </CardContent>
        </Card>
      </Stack>
    </Stage>
  ),
};

export const PermissionLocked: Story = {
  render: () => (
    <Stage>
      <PermissionGate
        title="Pro feature"
        body="Custom domains and advanced analytics are available on the Pro plan."
        action="Upgrade workspace"
      />
    </Stage>
  ),
};

export const ConfirmationSnackbar: Story = {
  render: () => (
    <Stage>
      <Snackbar
        open
        message="Invitation published successfully"
        action={
          <IconButton size="small">
            <Close />
          </IconButton>
        }
      />
    </Stage>
  ),
};

export const ResponsiveCreator: Story = {
  render: () => (
    <Stage>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Responsive creator
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Paper sx={{ width: { xs: "100%", md: 260 }, p: 2 }}>
          <Typography variant="overline">Sidebar</Typography>
          <Stack spacing={0.5} sx={{ mt: 1 }}>
            {["Overview", "Experiences", "Invitations", "Media", "Analytics"].map((x, i) => (
              <Button
                key={x}
                variant={i === 0 ? "contained" : "text"}
                fullWidth
                sx={{ justifyContent: "flex-start" }}
              >
                {x}
              </Button>
            ))}
          </Stack>
        </Paper>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h3">Content adapts</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              At compact widths the navigation collapses, cards stack, controls wrap and preview
              frames remain usable without horizontal scrolling.
            </Typography>
            <TextField fullWidth label="Responsive field" sx={{ mt: 2 }} />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1} sx={{ mt: 2 }}>
              <Button variant="contained">Primary action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stage>
  ),
};

export const Accessibility: Story = {
  render: () => (
    <Stage>
      <Card>
        <CardContent>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
            <HelpOutlined color="primary" />
            <Box>
              <Typography variant="h2">Accessibility contract</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Every reusable creator component exposes keyboard, focus, disabled and error states.
              </Typography>
            </Box>
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack spacing={1.25}>
            {[
              "Keyboard navigation",
              "Visible focus indicator",
              "Reduced motion",
              "Form labels and errors",
              "Color contrast",
              "Screen-reader names",
              "Touch target sizing",
            ].map((x) => (
              <Paper key={x} variant="outlined" sx={{ p: 1.5 }}>
                <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                  <CheckCircle color="success" />
                  <Typography sx={{ fontWeight: 700 }}>{x}</Typography>
                  <Chip label="Pass" size="small" sx={{ color: "success", ...{ ml: "auto" } }} />
                </Stack>
              </Paper>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Stage>
  ),
};

export const MobileDrawer: Story = {
  render: () => (
    <Stage>
      <Drawer anchor="bottom" open>
        <Stack spacing={1}>
          <Typography variant="h3">Scene actions</Typography>
          <Button variant="text" sx={{ justifyContent: "flex-start" }}>
            Duplicate scene
          </Button>
          <Button variant="text" sx={{ justifyContent: "flex-start" }}>
            Move scene
          </Button>
          <Button variant="text" sx={{ justifyContent: "flex-start" }}>
            Add interaction
          </Button>
          <Button color="error" variant="text" sx={{ justifyContent: "flex-start" }}>
            Delete scene
          </Button>
        </Stack>
      </Drawer>
    </Stage>
  ),
};
