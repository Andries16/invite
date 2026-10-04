import { EditorShell, GuestFrame, SceneRail } from "@invite/design-system";
import { getOrderedScenes } from "@invite/invitation-runtime";
import { getSceneDescription, getSceneDisplayType, getSceneDurationLabel, getSceneTitle, sampleExperience } from "@invite/story";
import type { ExperienceSpec } from "@invite/invitation-schema";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PreviewIcon from "@mui/icons-material/Preview";
import PublishIcon from "@mui/icons-material/Publish";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import {
  AnalyticsPage,
  BillingPage,
  CampaignsPage,
  CreatePage,
  DashboardPage,
  ExperiencesPage,
  InvitationsPage,
  MarketplacePage,
  MediaPage,
  SettingsPage,
  TemplatesPage,
} from "../platform/PlatformPages";
import { PlatformShell, type PlatformPage } from "../platform/PlatformShell";

type AppPage = PlatformPage;

export type { ExperienceSpec } from "@invite/invitation-schema";

type FlowStep = "interview" | "recipe" | "storyboard";
const interviewMessages = [
  {
    role: "assistant" as const,
    text: "What are you creating, and what should the guest feel when they open it?",
  },
  {
    role: "user" as const,
    text: "A romantic date invitation. I want it to feel cinematic, playful and personal.",
  },
  {
    role: "assistant" as const,
    text: "Great. What is the moment, date or place we are inviting them to?",
  },
  {
    role: "user" as const,
    text: "September 28, sunset at Valea Morilor. Keep the exact location hidden until the reveal.",
  },
];

export function CreationFlow({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = React.useState<FlowStep>("interview");
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState(interviewMessages);
  const [selectedRecipe, setSelectedRecipe] = React.useState("Cinematic");

  if (step === "storyboard") {
    return (
      <PlatformShell
        page="create"
        title="Storyboard ready"
        subtitle="AI transformed the interview into an editable ExperienceSpec."
      >
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Chip label="ExperienceSpec validated" sx={{ color: "success" }} />
              <Typography variant="h3" sx={{ mt: 1 }}>
                A little surprise
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                7 scenes · 3 interactions · cinematic visual recipe · hidden location reveal.
              </Typography>
            </CardContent>
          </Card>
          <Grid container spacing={1.5}>
            {getOrderedScenes(sampleExperience).map((scene, i) => (
              <Grid key={scene.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card>
                  <CardContent>
                    <Typography variant="caption">0{i + 1}</Typography>
                    <Typography sx={{ fontWeight: 800 }}>{getSceneTitle(scene)}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {getSceneDisplayType(scene)} · {getSceneDurationLabel(scene)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" onClick={onComplete}>
              Open in editor
            </Button>
          </Stack>
        </Stack>
      </PlatformShell>
    );
  }

  return (
    <PlatformShell
      page="create"
      title="Create with AI"
      subtitle={
        step === "interview"
          ? "A short conversation becomes a structured experience plan."
          : "Choose a creative direction."
      }
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              {step === "interview" ? (
                <Stack spacing={1.5}>
                  {messages.map((message, i) => (
                    <Paper
                      key={i}
                      variant="outlined"
                      sx={{
                        p: 1.5,
                        alignSelf: message.role === "user" ? "flex-end" : "stretch",
                        maxWidth: "88%",
                        bgcolor: message.role === "user" ? "secondary.main" : "background.paper",
                        color: message.role === "user" ? "#fff" : "text.primary",
                      }}
                    >
                      {message.text}
                    </Paper>
                  ))}
                  <TextField
                    fullWidth
                    multiline
                    minRows={2}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Tell the creative director more..."
                  />
                  <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                    <Typography variant="caption" sx={{ color: "text.secondary" }}>
                      {messages.length} messages · AI keeps the structured story separate from
                      generated code.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => {
                        if (input.trim()) {
                          setMessages([...messages, { role: "user", text: input.trim() }]);
                          setInput("");
                        } else setStep("recipe");
                      }}
                    >
                      Continue
                    </Button>
                  </Stack>
                </Stack>
              ) : (
                <Stack spacing={2}>
                  <Typography variant="h3">Choose the visual recipe</Typography>
                  <Grid container spacing={1}>
                    {["Cinematic", "Warm minimal", "Editorial", "Playful"].map((recipe) => (
                      <Grid key={recipe} size={{ xs: 6 }}>
                        <Button
                          fullWidth
                          variant={selectedRecipe === recipe ? "contained" : "outlined"}
                          onClick={() => setSelectedRecipe(recipe)}
                        >
                          {recipe}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                  <Button variant="contained" onClick={() => setStep("storyboard")}>
                    Generate storyboard
                  </Button>
                </Stack>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography sx={{ fontWeight: 800 }}>Creation contract</Typography>
              <Stack spacing={1.25} sx={{ mt: 2 }}>
                {[
                  "Structured story",
                  "Visual recipe",
                  "Interaction schema",
                  "Responsive scenes",
                  "Accessibility defaults",
                ].map((x) => (
                  <Stack key={x} direction="row" spacing={1}>
                    <CheckCircleIcon color="success" fontSize="small" />
                    <Typography variant="body2">{x}</Typography>
                  </Stack>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </PlatformShell>
  );
}

function PublicPreview({ onBack, onPublish }: { onBack: () => void; onPublish: () => void }) {
  return (
    <PlatformShell
      page="preview"
      title="Guest Preview"
      subtitle="This is the public experience your guests will see."
      actions={
        <Button variant="contained" startIcon={<PublishIcon />} onClick={onPublish}>
          Publish
        </Button>
      }
    >
      <Stack spacing={2} sx={{ alignItems: "center" }}>
        <GuestFrame>
          <Stack
            spacing={5}
            sx={{
              minHeight: 720,
              p: { xs: 3, md: 7 },
              textAlign: "center",
              background: "linear-gradient(160deg,#fffaf3,#f0e9ef)",
            }}
          >
            {getOrderedScenes(sampleExperience).map((scene, index) => (
              <Box
                key={scene.id}
                sx={{ py: 5, minHeight: 260, display: "grid", placeItems: "center" }}
              >
                <Stack spacing={1.5} sx={{ alignItems: "center" }}>
                  <Typography variant="overline" sx={{ color: "primary" }}>
                    {String(index + 1).padStart(2, "0")} · {getSceneDisplayType(scene)}
                  </Typography>
                  <Typography variant="h2" sx={{ fontFamily: "Georgia, serif" }}>
                    {getSceneTitle(scene)}
                  </Typography>
                  <Typography sx={{ color: "text.secondary", maxWidth: 500 }}>
                    {getSceneDescription(scene)}
                  </Typography>
                  {getSceneDisplayType(scene) === "Quiz" && <Button variant="contained">Continue</Button>}
                  {getSceneDisplayType(scene) === "Rsvp" && <Button variant="outlined">RSVP</Button>}
                </Stack>
              </Box>
            ))}
          </Stack>
        </GuestFrame>
        <Button startIcon={<ArrowBackIcon />} onClick={onBack}>
          Back to editor
        </Button>
      </Stack>
    </PlatformShell>
  );
}

function PublishPage({ onBack }: { onBack: () => void }) {
  return (
    <PlatformShell
      page="distribution"
      title="Publish & Distribution"
      subtitle="Your experience is ready to become a stable public artifact."
    >
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <CheckCircleIcon color="success" />
              <Box>
                <Typography sx={{ fontWeight: 800 }}>Production build validated</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Accessibility, responsive layout, interactions and media checks passed.
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </Card>
        <Grid container spacing={1.5}>
          {[
            ["Stable URL", "invite.md/i/a-little-surprise"],
            ["QR code", "Ready to generate"],
            ["Custom domain", "Not configured"],
            ["Social preview", "Ready"],
          ].map(([label, value]) => (
            <Grid key={label} size={{ xs: 12, sm: 6 }}>
              <Card>
                <CardContent>
                  <Typography variant="caption" sx={{ color: "text.secondary" }}>
                    {label}
                  </Typography>
                  <Typography variant="h3" sx={{ mt: 0.5 }}>
                    {value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
          <Button variant="outlined" onClick={onBack}>
            Back to preview
          </Button>
          <Button variant="contained" sx={{ ml: 1 }}>
            Publish experience
          </Button>
        </Stack>
      </Stack>
    </PlatformShell>
  );
}

function EditorPage({ onBack, onPreview }: { onBack: () => void; onPreview: () => void }) {
  const [selectedId, setSelectedId] = React.useState<string>(String(getOrderedScenes(sampleExperience)[0]?.id));
  const [device, setDevice] = React.useState<"desktop" | "phone">("desktop");
  const selected = getOrderedScenes(sampleExperience).find((scene) => scene.id === selectedId) ?? getOrderedScenes(sampleExperience)[0];
  const [description, setDescription] = React.useState(getSceneDescription(selected));

  const [prevId, setPrevId] = React.useState(selectedId);
  if (selectedId !== prevId) {
    setPrevId(selectedId);
    setDescription(getSceneDescription(selected));
  }

  return (
    <PlatformShell
      page="editor"
      title="Experience Editor"
      subtitle="Compose scenes, interactions and the guest experience."
      actions={
        <Stack direction="row" spacing={0.75}>
          <Button size="small" startIcon={<PreviewIcon />} onClick={onPreview}>
            Preview
          </Button>
          <Button size="small" variant="contained" startIcon={<PublishIcon />}>
            Publish
          </Button>
        </Stack>
      }
    >
      <EditorShell
        left={
          <Stack spacing={1}>
            <Typography variant="overline" sx={{ color: "primary.light" }}>
              Experience editor
            </Typography>
            <Typography variant="h3" sx={{ color: "#fff" }}>
              A little surprise
            </Typography>
            <Typography variant="caption" sx={{ color: "#9f9991" }}>
              7 scenes · 3 interactions
            </Typography>
            <Stack spacing={0.5} sx={{ mt: 1 }}>
              {getOrderedScenes(sampleExperience).map((scene, index) => (
                <Button
                  key={scene.id}
                  size="small"
                  onClick={() => setSelectedId(scene.id)}
                  variant={scene.id === selectedId ? "contained" : "text"}
                  sx={{
                    justifyContent: "flex-start",
                    textTransform: "none",
                    color: scene.id === selectedId ? undefined : "#c7c1b8",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}&nbsp; {getSceneTitle(scene)}
                </Button>
              ))}
            </Stack>
          </Stack>
        }
        right={
          <Stack spacing={1.5}>
            <Typography sx={{ fontWeight: 800 }}>Scene inspector</Typography>
            <Chip size="small" label={getSceneDisplayType(selected)} sx={{ alignSelf: "flex-start" }} />
            <TextField label="Scene title" value={getSceneTitle(selected)} fullWidth size="small" disabled />
            <TextField
              label="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              multiline
              minRows={5}
              fullWidth
              size="small"
            />
            <Button variant="outlined">Edit media</Button>
            <Button variant="outlined">Configure interaction</Button>
          </Stack>
        }
      >
        <Stack spacing={2} sx={{ maxWidth: 820, mx: "auto" }}>
          <Stack direction="row" sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Button size="small" startIcon={<ArrowBackIcon />} onClick={onBack}>
              Back to experiences
            </Button>
            <Stack direction="row" spacing={0.5}>
              <IconButton
                size="small"
                onClick={() => setDevice("desktop")}
                color={device === "desktop" ? "primary" : "default"}
              >
                <DesktopWindowsIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => setDevice("phone")}
                color={device === "phone" ? "primary" : "default"}
              >
                <PhoneIphoneIcon />
              </IconButton>
            </Stack>
          </Stack>

          <Box>
            <Chip
              label={`${getSceneDisplayType(selected)} · Scene ${String(getOrderedScenes(sampleExperience).indexOf(selected) + 1).padStart(2, "0")}`}
              sx={{ color: "primary" }}
            />
            <Typography variant="h2" sx={{ color: "#fff", mt: 1 }}>
              {getSceneTitle(selected)}
            </Typography>
            <Typography sx={{ color: "#bdb7ae" }}>
              {getSceneDurationLabel(selected)} · Autosaved just now
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GuestFrame>
              <Stack
                spacing={1.5}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: device === "phone" ? 560 : 520,
                  width: device === "phone" ? 320 : "100%",
                  textAlign: "center",
                  ...{ px: 3, transition: "width .2s ease" },
                }}
              >
                <Typography variant="overline" sx={{ color: "primary" }}>
                  SEPTEMBER 28
                </Typography>
                <Typography variant="h2" sx={{ fontFamily: "Georgia, serif" }}>
                  Elena & Victor
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>{description}</Typography>
                <Chip
                  label={["Quiz", "Rsvp"].includes(getSceneDisplayType(selected)) ? "Guest interaction" : "Animated scene"}
                  size="small"
                />
              </Stack>
            </GuestFrame>
          </Box>

          <SceneRail scenes={getOrderedScenes(sampleExperience).map((scene) => getSceneTitle(scene))} />
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
            {getOrderedScenes(sampleExperience).map((scene) => (
              <Button
                key={scene.id}
                size="small"
                variant={scene.id === selectedId ? "contained" : "outlined"}
                onClick={() => setSelectedId(scene.id)}
              >
                {getSceneTitle(scene)}
              </Button>
            ))}
          </Stack>
        </Stack>
      </EditorShell>
    </PlatformShell>
  );
}

function FullPlatform() {
  const [page, setPage] = React.useState<AppPage>("dashboard");
  const [_, setCreationFlow] = React.useState(false);

  const pageTitles: Record<AppPage, string> = {
    dashboard: "Overview",
    experiences: "Experiences",
    invitations: "Invitations",
    create: "Create",
    templates: "Templates",
    campaigns: "Campaigns",
    media: "Media",
    analytics: "Analytics",
    settings: "Settings",
    billing: "Billing",
    marketplace: "Marketplace",
    story: "Story & AI",
    interactions: "Interactions",
    distribution: "Distribution",
    team: "Team & Collaboration",
    exports: "Export & Delivery",
    editor: "Experience Editor",
    preview: "Guest Preview",
  };

  const content: Record<AppPage, React.ReactNode> = {
    dashboard: <DashboardPage />,
    experiences: <ExperiencesPage />,
    invitations: <InvitationsPage />,
    create: <CreatePage onStartAI={() => setCreationFlow(true)} />,
    templates: <TemplatesPage />,
    campaigns: <CampaignsPage />,
    media: <MediaPage />,
    analytics: <AnalyticsPage />,
    settings: <SettingsPage />,
    billing: <BillingPage />,
    marketplace: <MarketplacePage />,
    story: (
      <PlatformShell page="dashboard" title="Story & AI">
        <Grid container spacing={1.75}>
          {["12 facts", "7 moments", "94% creative confidence"].map((x) => (
            <Grid key={x} size={{ xs: 12, md: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h3">{x}</Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    Story intelligence and creative direction.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PlatformShell>
    ),
    interactions: (
      <PlatformShell page="dashboard" title="Interactions">
        <Grid container spacing={1.75}>
          {["RSVP", "Quiz", "Branching", "Guestbook", "Voting", "Photo upload"].map((x) => (
            <Grid key={x} size={{ xs: 12, sm: 6, lg: 4 }}>
              <Card>
                <CardContent>
                  <Chip label="Typed interaction" />
                  <Typography variant="h3" sx={{ mt: 1 }}>
                    {x}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </PlatformShell>
    ),
    distribution: <PublishPage onBack={() => setPage("preview")} />,
    team: (
      <PlatformShell page="dashboard" title="Team & Collaboration">
        <Card>
          <CardContent>
            <Typography variant="h3">Review workflow</Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Owner → designer → reviewer → approved.
            </Typography>
          </CardContent>
        </Card>
      </PlatformShell>
    ),
    exports: (
      <PlatformShell page="dashboard" title="Export & Delivery">
        <Grid container spacing={1.75}>
          {["Interactive website", "ZIP", "PDF / print", "Social card", "Short video", "MP4"].map(
            (x) => (
              <Grid key={x} size={{ xs: 12, sm: 6, lg: 4 }}>
                <Card>
                  <CardContent>
                    <Chip label="Ready" />
                    <Typography variant="h3" sx={{ mt: 1 }}>
                      {x}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ),
          )}
        </Grid>
      </PlatformShell>
    ),
    editor: (
      <EditorPage onBack={() => setPage("experiences")} onPreview={() => setPage("preview")} />
    ),
    preview: (
      <PublicPreview onBack={() => setPage("editor")} onPublish={() => setPage("distribution")} />
    ),
  };

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <PlatformShell page={page} title={pageTitles[page]} onNavigate={setPage}>
        {content[page]}
      </PlatformShell>
    </Box>
  );
}

const meta = {
  title: "Platform/00 Full Platform",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const App: Story = {
  render: () => <FullPlatform />,
};
