import {
  ArrowForward,
  AutoAwesome,
  Check,
  CloudUpload,
  ContentCopy,
  Edit,
  Image,
  PlayArrow,
  QrCode2,
  Smartphone,
  Visibility,
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
  FormControlLabel,
  IconButton,
  LinearProgress,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

const meta = { title: "Platform/Flows", parameters: { layout: "fullscreen" } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const Stage = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ minHeight: "100vh", p: { xs: 2, md: 5 }, bgcolor: "background.default" }}>
    <Box sx={{ maxWidth: 1180, mx: "auto" }}>{children}</Box>
  </Box>
);

export const AIInterview: Story = {
  render: () => (
    <Stage>
      <Gridless>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Avatar sx={{ bgcolor: "primary.main" }}>
                  <AutoAwesome />
                </Avatar>
                <Box>
                  <Typography variant="h3">Let's create something memorable</Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    I'll ask a few questions, then turn your answers into an experience.
                  </Typography>
                </Box>
              </Stack>
              <Stack spacing={2.25} sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 800 }}>What are you creating?</Typography>
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  <Chip label="Wedding" sx={{ color: "primary" }} />
                  <Chip label="Birthday" />
                  <Chip label="Date" />
                  <Chip label="Love declaration" />
                  <Chip label="Announcement" />
                </Stack>
                <TextField
                  multiline
                  minRows={3}
                  label="Tell me about the moment"
                  placeholder="The story, people, mood, inside jokes..."
                />
                <Button variant="contained" endIcon={<ArrowForward />}>
                  Continue
                </Button>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ width: { md: 360 } }}>
            <CardContent>
              <Typography variant="h3">Creation context</Typography>
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="caption">FORMAT</Typography>
                  <Typography sx={{ fontWeight: 750 }}>Interactive invitation</Typography>
                </Paper>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="caption">STYLE</Typography>
                  <Typography sx={{ fontWeight: 750 }}>Film trailer</Typography>
                </Paper>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Typography variant="caption">MEDIA</Typography>
                  <Typography sx={{ fontWeight: 750 }}>Photos + GIFs</Typography>
                </Paper>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Gridless>
    </Stage>
  ),
};

export const StoryboardEditor: Story = {
  render: () => (
    <Stage>
      <Card>
        <CardContent>
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
            <Box>
              <Typography variant="h2">Elena & Victor</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                Storyboard · 7 scenes · Draft v7
              </Typography>
            </Box>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" startIcon={<Visibility />}>
                Preview
              </Button>
              <Button variant="contained">Publish</Button>
            </Stack>
          </Stack>
          <Divider sx={{ my: 3 }} />
          <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
            <Stack spacing={1} sx={{ width: { md: 260 } }}>
              <Typography variant="overline">Scenes</Typography>
              {[
                "Opening",
                "Memory beat",
                "The question",
                "The reveal",
                "Location",
                "RSVP",
                "Finale",
              ].map((x, i) => (
                <Paper
                  key={x}
                  variant="outlined"
                  sx={{
                    p: 1.2,
                    borderColor: i === 2 ? "primary.main" : "divider",
                    bgcolor: i === 2 ? "primary.50" : "background.paper",
                  }}
                >
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Chip size="small" label={String(i + 1).padStart(2, "0")} />
                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>{x}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>
                        {i % 2 ? "Image + copy" : "Interactive"}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
            <Card variant="outlined" sx={{ flex: 1, bgcolor: "grey.50" }}>
              <CardContent>
                <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                  <Typography variant="h3">The question</Typography>
                  <Chip label="Interactive" sx={{ color: "primary" }} />
                </Stack>
                <Stack spacing={2} sx={{ mt: 2 }}>
                  <TextField
                    label="Headline"
                    value="How well do you know us?"
                    slotProps={{ input: { readOnly: true } }}
                  />
                  <TextField
                    multiline
                    minRows={3}
                    label="Description"
                    value="Pick the answer that sounds most like us."
                    slotProps={{ input: { readOnly: true } }}
                  />
                  <Typography sx={{ fontWeight: 750 }}>Choices</Typography>
                  {[
                    "Our first date was at the cinema",
                    "We met through friends",
                    "It happened completely by accident",
                  ].map((x, i) => (
                    <Paper key={x} variant="outlined" sx={{ p: 1.3 }}>
                      <Stack direction="row" sx={{ alignItems: "center" }}>
                        <Radio checked={i === 0} />
                        <Typography>{x}</Typography>
                        <IconButton sx={{ ml: "auto" }}>
                          <Edit />
                        </IconButton>
                      </Stack>
                    </Paper>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </CardContent>
      </Card>
    </Stage>
  ),
};

export const PreviewStudio: Story = {
  render: () => (
    <Stage>
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
              <Box>
                <Typography variant="h2">Experience preview</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Same normalized ExperienceSpec used by preview and production.
                </Typography>
              </Box>
              <Stack direction="row">
                <Button variant="outlined" startIcon={<Smartphone />}>
                  Phone
                </Button>
                <Button variant="outlined">Desktop</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
        <Stack direction="row" sx={{ justifyContent: "center" }}>
          <Paper
            sx={{
              width: 390,
              height: 760,
              borderRadius: 7,
              p: 1,
              bgcolor: "#171614",
              boxShadow: 8,
            }}
          >
            <Paper
              sx={{
                height: "100%",
                borderRadius: 5,
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(145deg,#322538,#d09baa)",
              }}
            >
              <Stack sx={{ alignItems: "center", textAlign: "center", color: "#fff", p: 4 }}>
                <Typography variant="caption">SEPTEMBER 28 · 2026</Typography>
                <Typography sx={{ fontFamily: "Georgia,serif", fontSize: 42, lineHeight: 1 }}>
                  Elena
                  <br />& Victor
                </Typography>
                <Typography sx={{ mt: 2, ...{ opacity: 0.8 } }}>A story worth opening.</Typography>
                <Button sx={{ mt: 4, bgcolor: "#fff", color: "#211f1c" }} startIcon={<PlayArrow />}>
                  Begin
                </Button>
              </Stack>
            </Paper>
          </Paper>
        </Stack>
      </Stack>
    </Stage>
  ),
};

export const MediaLibrary: Story = {
  render: () => (
    <Stage>
      <Card>
        <CardContent>
          <Stack direction="row" sx={{ justifyContent: "space-between" }}>
            <Box>
              <Typography variant="h2">Media library</Typography>
              <Typography sx={{ color: "text.secondary" }}>246 assets · 18.4 GB</Typography>
            </Box>
            <Button variant="contained" startIcon={<CloudUpload />}>
              Upload media
            </Button>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ my: 3 }}>
            <Chip label="All" sx={{ color: "primary" }} />
            <Chip label="Images" />
            <Chip label="GIFs" />
            <Chip label="Video" />
            <Chip label="Audio" />
          </Stack>
          <Box
            sx={{
              display: "grid",
              gap: 1.5,
              gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
            }}
          >
            {Array.from({ length: 10 }, (_, i) => (
              <Card key={i}>
                <Box
                  sx={{
                    height: 130,
                    display: "grid",
                    ...{
                      placeItems: "center",
                      background: [
                        "linear-gradient(135deg,#3b2c3d,#c99da8)",
                        "linear-gradient(135deg,#1e2c3b,#839eb5)",
                        "linear-gradient(135deg,#52633f,#c0bd85)",
                      ][i % 3],
                    },
                  }}
                >
                  <Image sx={{ color: "#fff" }} />
                </Box>
                <CardContent sx={{ p: 1.4 }}>
                  <Typography sx={{ fontWeight: 700, fontSize: 12 }}>memory-{i + 1}.jpg</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    2.4 MB · optimized
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Stage>
  ),
};

export const RSVPForm: Story = {
  render: () => (
    <Stage>
      <Box sx={{ maxWidth: 620, mx: "auto" }}>
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            <Stack sx={{ alignItems: "center", textAlign: "center" }}>
              <Typography variant="overline">ELENA & VICTOR</Typography>
              <Typography variant="h1">Will you join us?</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                September 28, 2026 · Chișinău
              </Typography>
            </Stack>
            <Divider sx={{ my: 4 }} />
            <Stack spacing={2}>
              <TextField label="Your name" />
              <RadioGroup row>
                <FormControlLabel value="yes" control={<Radio />} label="Joyfully yes" />
                <FormControlLabel value="no" control={<Radio />} label="Sadly no" />
              </RadioGroup>
              <TextField label="Dietary notes" multiline minRows={2} />
              <Button variant="contained" size="large">
                Send RSVP
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Stage>
  ),
};

export const QuizInteraction: Story = {
  render: () => (
    <Stage>
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Typography sx={{ fontWeight: 800 }}>Question 2 of 5</Typography>
              <Typography sx={{ color: "text.secondary" }}>40%</Typography>
            </Stack>
            <LinearProgress value={40} variant="determinate" sx={{ my: 2 }} />
            <Typography variant="h2">Where did we first say “I love you”?</Typography>
            <RadioGroup sx={{ mt: 3 }}>
              {[
                "At the lake",
                "In the car",
                "During a late-night walk",
                "Over a terrible dinner",
              ].map((x) => (
                <Paper key={x} variant="outlined" sx={{ mb: 1 }}>
                  <FormControlLabel
                    value={x}
                    control={<Radio />}
                    label={x}
                    sx={{ p: 1.2, m: 0, width: "100%" }}
                  />
                </Paper>
              ))}
            </RadioGroup>
            <Button fullWidth variant="contained" sx={{ mt: 2 }}>
              Continue
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Stage>
  ),
};

export const CampaignPersonalization: Story = {
  render: () => (
    <Stage>
      <Gridless>
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Typography variant="h2">Wedding guests</Typography>
              <Typography sx={{ color: "text.secondary" }}>
                One master experience · personalized delivery
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <TextField
                  label="Guest variable"
                  value="{{guest.firstName}}"
                  slotProps={{ input: { readOnly: true } }}
                />
                <TextField
                  label="Fallback"
                  value="Friend"
                  slotProps={{ input: { readOnly: true } }}
                />
                <Button variant="contained">Preview guest</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              {["Maria", "Victor", "Daniel", "Sofia", "Alex"].map((name, i) => (
                <Stack
                  key={name}
                  direction="row"
                  spacing={1.5}
                  sx={{ alignItems: "center", py: 1.2 }}
                >
                  <Avatar>{name[0]}</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      {name.toLowerCase()}@example.com
                    </Typography>
                  </Box>
                  <Chip
                    label={i < 3 ? "Delivered" : "Pending"}
                    size="small"
                    sx={{ color: i < 3 ? "success" : "default" }}
                  />
                  <IconButton>
                    <More />
                  </IconButton>
                </Stack>
              ))}
            </CardContent>
          </Card>
        </Stack>
      </Gridless>
    </Stage>
  ),
};

export const PublishFlow: Story = {
  render: () => (
    <Stage>
      <Box sx={{ maxWidth: 760, mx: "auto" }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h2">Publish experience</Typography>
            <Stepper activeStep={2} sx={{ my: 4 }}>
              {["Validate", "Build", "Publish", "Share"].map((x) => (
                <Step key={x}>
                  <StepLabel>{x}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Alert severity="success" icon={<Check />}>
              Version 7 passed accessibility, responsive and production validation.
            </Alert>
            <Stack spacing={2} sx={{ mt: 3 }}>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography sx={{ fontWeight: 800 }}>Immutable artifact</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Build 7.0.3 · generated 2 min ago · stable public URL
                </Typography>
              </Paper>
              <TextField
                label="Public URL"
                value="elena-victor.invite.md"
                slotProps={{ input: { readOnly: true } }}
              />
              <Button variant="contained" size="large">
                Publish version 7
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Stage>
  ),
};

export const QRShare: Story = {
  render: () => (
    <Stage>
      <Box sx={{ maxWidth: 820, mx: "auto" }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              sx={{ alignItems: "center" }}
            >
              <Box
                sx={{
                  width: 230,
                  height: 230,
                  display: "grid",
                  ...{
                    placeItems: "center",
                    border: "12px solid #fff",
                    boxShadow: 3,
                    bgcolor: "#fff",
                  },
                }}
              >
                <QrCode2 sx={{ fontSize: 210 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h2">Share anywhere</Typography>
                <Typography sx={{ color: "text.secondary", mt: 1 }}>
                  Print this QR code on cards, posters or gifts. Every scan resolves to the stable
                  published experience.
                </Typography>
                <TextField
                  fullWidth
                  sx={{ mt: 2 }}
                  value="https://elena-victor.invite.md"
                  slotProps={{ input: { readOnly: true } }}
                />
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  <Button variant="contained" startIcon={<ContentCopy />}>
                    Copy URL
                  </Button>
                  <Button variant="outlined" startIcon={<QrCode2 />}>
                    Download QR
                  </Button>
                </Stack>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Stage>
  ),
};

export const ReviewAndApproval: Story = {
  render: () => (
    <Stage>
      <Gridless>
        <Card>
          <CardContent>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h2">Review changes</Typography>
                <Typography sx={{ color: "text.secondary" }}>Version 6 → Version 7</Typography>
              </Box>
              <Chip label="2 approvals required" sx={{ color: "warning" }} />
            </Stack>
            <Divider sx={{ my: 3 }} />
            {[
              "Updated opening title",
              "Replaced hero image",
              "Added RSVP dietary field",
              "Changed reveal transition",
            ].map((x, i) => (
              <Stack
                key={x}
                direction="row"
                spacing={1.5}
                sx={{
                  alignItems: "center",
                  py: 1.5,
                  ...{ borderBottom: "1px solid", borderColor: "divider" },
                }}
              >
                <Avatar sx={{ width: 30, height: 30 }}>{i + 1}</Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 750 }}>{x}</Typography>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    Andrei M. · 8 minutes ago
                  </Typography>
                </Box>
                <Button size="small">Comment</Button>
                <Button size="small" variant={i < 2 ? "contained" : "outlined"}>
                  {i < 2 ? "Approve" : "Review"}
                </Button>
              </Stack>
            ))}
          </CardContent>
        </Card>
      </Gridless>
    </Stage>
  ),
};

export const LoadingAndGeneration: Story = {
  render: () => (
    <Stage>
      <Box sx={{ maxWidth: 700, mx: "auto" }}>
        <Card>
          <CardContent sx={{ p: 4 }}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <AutoAwesome color="primary" />
              <Box>
                <Typography variant="h2">Building your experience</Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  AI is translating your story into a validated ExperienceSpec.
                </Typography>
              </Box>
            </Stack>
            <Stack spacing={2} sx={{ mt: 4 }}>
              {[
                "Analyzing story",
                "Selecting visual recipe",
                "Composing scenes",
                "Optimizing media",
                "Validating interactions",
              ].map((x, i) => (
                <Box key={x}>
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography sx={{ fontWeight: 700 }}>{x}</Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {i < 3 ? "Complete" : "In progress"}
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={i < 3 ? 100 : i === 3 ? 42 : 12}
                    sx={{ mt: 0.75 }}
                  />
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Stage>
  ),
};

function Gridless({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
function More() {
  return <span>•••</span>;
}
