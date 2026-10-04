import {
  CheckCircle,
  Code,
  ContentCopy,
  DragIndicator,
  Extension,
  MoreHoriz,
  Save,
  Security,
  Timeline,
  Web,
} from "@mui/icons-material";
import {
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
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = { title: "Platform/Advanced", parameters: { layout: "fullscreen" } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
const Stage = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ minHeight: "100vh", p: { xs: 2, md: 5 }, bgcolor: "background.default" }}>
    <Box sx={{ maxWidth: 1280, mx: "auto" }}>{children}</Box>
  </Box>
);

export const StoryboardCanvas: Story = {
  render: () => (
    <Stage>
      <Stack spacing={2}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h2">Storyboard canvas</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Compose the experience as a sequence of validated scenes.
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" startIcon={<Save />}>
              Save
            </Button>
            <Button variant="contained">Preview</Button>
          </Stack>
        </Stack>
        <Card>
          <CardContent>
            <Stack direction="row" spacing={1} sx={{ overflow: "auto", pb: 1 }}>
              {Array.from({ length: 8 }, (_, i) => (
                <Paper
                  key={i}
                  variant="outlined"
                  sx={{ minWidth: 170, p: 1.2, borderColor: i === 2 ? "primary.main" : "divider" }}
                >
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Chip size="small" label={String(i + 1).padStart(2, "0")} />
                    <DragIndicator fontSize="small" />
                  </Stack>
                  <Box
                    sx={{
                      height: 95,
                      mt: 1,
                      borderRadius: 2,
                      ...{
                        background: [
                          "linear-gradient(135deg,#3b2c3d,#c99da8)",
                          "linear-gradient(135deg,#1e2c3b,#839eb5)",
                          "linear-gradient(135deg,#75472d,#dfa06a)",
                          "linear-gradient(135deg,#26372e,#9ba37b)",
                        ][i % 4],
                      },
                    }}
                  />
                  <Typography sx={{ fontWeight: 750, mt: 1 }}>Scene {i + 1}</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {i % 3 === 0 ? "Hero" : "Interactive"} · {i + 1} assets
                  </Typography>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stage>
  ),
};

export const VisualRecipeBuilder: Story = {
  render: () => (
    <Stage>
      <Grid>
        <Card>
          <CardContent>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h2">Visual recipe</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Define typography, color, surfaces, motion and composition as structured tokens.
                </Typography>
              </Box>
              <Button variant="contained">Save recipe</Button>
            </Stack>
            <Tabs value={0} sx={{ mt: 2 }}>
              <Tab label="Style" />
              <Tab label="Typography" />
              <Tab label="Motion" />
              <Tab label="Composition" />
            </Tabs>
            <Stack spacing={2} sx={{ mt: 3 }}>
              <TextField
                label="Recipe name"
                value="Midnight Cinema"
                slotProps={{ input: { readOnly: true } }}
              />
              <Stack direction="row" spacing={1}>
                <Paper sx={{ width: 72, height: 72, bgcolor: "#211f1c" }} />
                <Paper sx={{ width: 72, height: 72, bgcolor: "#7057e8" }} />
                <Paper sx={{ width: 72, height: 72, bgcolor: "#f6f5f2" }} />
                <Paper sx={{ width: 72, height: 72, bgcolor: "#ffffff" }} />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Chip label="Editorial" />
                <Chip label="Cinematic" />
                <Chip label="Minimal" />
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Stage>
  ),
};

export const InteractionBuilder: Story = {
  render: () => (
    <Stage>
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Typography variant="h2">Interaction builder</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Configure guest actions without embedding arbitrary application code.
            </Typography>
            <Stack spacing={1.25} sx={{ mt: 3 }}>
              {[
                "RSVP",
                "Quiz branching",
                "Guestbook",
                "Voting",
                "Media submission",
                "Contact form",
              ].map((x, i) => (
                <Paper key={x} variant="outlined" sx={{ p: 1.5 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                    <Extension color="primary" />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontWeight: 750 }}>{x}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        Schema validated interaction
                      </Typography>
                    </Box>
                    <Chip
                      label={i < 4 ? "Configured" : "Available"}
                      size="small"
                      sx={{ color: i < 4 ? "success" : "default" }}
                    />
                    <Button size="small" variant="outlined">
                      Configure
                    </Button>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stage>
  ),
};

export const AutomationCenter: Story = {
  render: () => (
    <Stage>
      <Grid>
        <Card>
          <CardContent>
            <Typography variant="h2">Automation center</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Connect publishing, notifications and guest workflows.
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {[
                "Publish → notify owner",
                "RSVP → confirmation email",
                "Guest submission → moderation queue",
                "Campaign → scheduled delivery",
              ].map((x, i) => (
                <Paper key={x} variant="outlined" sx={{ p: 1.5 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                    <Timeline color="primary" />
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontWeight: 750 }}>{x}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        Trigger · action · audit log
                      </Typography>
                    </Box>
                    <Chip
                      label={i < 3 ? "Active" : "Draft"}
                      size="small"
                      sx={{ color: i < 3 ? "success" : "primary" }}
                    />
                    <IconButton>
                      <MoreHoriz />
                    </IconButton>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Stage>
  ),
};

export const DeveloperExport: Story = {
  render: () => (
    <Stage>
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Code color="primary" />
              <Box>
                <Typography variant="h2">Developer export</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Export a validated ExperienceSpec and immutable build metadata.
                </Typography>
              </Box>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Paper
              sx={{
                p: 2,
                bgcolor: "#211f1c",
                color: "#fff",
                fontFamily: "monospace",
                overflow: "auto",
              }}
            >
              <Typography component="pre" sx={{ fontSize: 11 }}>{`{
  "version": 7,
  "schema": "experience/v1",
  "scenes": 7,
  "interactions": ["rsvp", "quiz"],
  "artifact": "immutable",
  "publicUrl": "elena-victor.invite.md"
}`}</Typography>
            </Paper>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Button variant="contained" startIcon={<ContentCopy />}>
                Copy JSON
              </Button>
              <Button variant="outlined">Download package</Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stage>
  ),
};

export const SecurityCenter: Story = {
  render: () => (
    <Stage>
      <Grid>
        <Card>
          <CardContent>
            <Stack direction="row" spacing={1.5}>
              <Security color="primary" />
              <Box>
                <Typography variant="h2">Security & privacy</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Review access, public exposure and audit events.
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={1.25} sx={{ mt: 3 }}>
              {[
                "2FA enabled",
                "3 workspace members",
                "1 custom domain",
                "Public guest submissions require moderation",
                "Published artifacts are immutable",
              ].map((x) => (
                <Paper key={x} variant="outlined" sx={{ p: 1.5 }}>
                  <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                    <CheckCircle color="success" />
                    <Typography sx={{ fontWeight: 700 }}>{x}</Typography>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Stage>
  ),
};

export const PerformanceCenter: Story = {
  render: () => (
    <Stage>
      <Grid>
        <Card>
          <CardContent>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h2">Delivery performance</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Public runtime health and media optimization.
                </Typography>
              </Box>
              <Chip label="Healthy" sx={{ color: "success" }} />
            </Stack>
            <Stack spacing={2} sx={{ mt: 3 }}>
              {[
                ["LCP", "1.4s", 88],
                ["INP", "92ms", 94],
                ["CLS", "0.02", 98],
                ["Media cache hit", "96%", 96],
              ].map(([label, value, score]) => (
                <Box key={String(label)}>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 700 }}>{label}</Typography>
                    <Typography>{value}</Typography>
                  </Stack>
                  <LinearProgress variant="determinate" value={Number(score)} sx={{ mt: 0.6 }} />
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Stage>
  ),
};

export const MarketplaceCreator: Story = {
  render: () => (
    <Stage>
      <Card>
        <CardContent>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h2">Marketplace creator</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Package a visual recipe or interaction for other creators.
              </Typography>
            </Box>
            <Button variant="contained" startIcon={<Web />}>
              Submit pack
            </Button>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ my: 3 }}>
            <Chip label="Visual recipe" sx={{ color: "primary" }} />
            <Chip label="Component pack" />
            <Chip label="Interaction" />
          </Stack>
          <TextField
            fullWidth
            label="Pack name"
            value="Midnight Cinema"
            slotProps={{ input: { readOnly: true } }}
          />
          <Stack direction="row" spacing={1.5} sx={{ mt: 2 }}>
            <Paper variant="outlined" sx={{ p: 2, flex: 1 }}>
              <Typography sx={{ fontWeight: 800 }}>Assets</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                14 components · 6 tokens
              </Typography>
            </Paper>
            <Paper variant="outlined" sx={{ p: 2, flex: 1 }}>
              <Typography sx={{ fontWeight: 800 }}>Validation</Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Accessibility · schema · license
              </Typography>
            </Paper>
          </Stack>
        </CardContent>
      </Card>
    </Stage>
  ),
};

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        ...{ gridTemplateColumns: { xs: "1fr", md: "minmax(0,1fr) minmax(280px,380px)" } },
      }}
    >
      {children}
    </Box>
  );
}
