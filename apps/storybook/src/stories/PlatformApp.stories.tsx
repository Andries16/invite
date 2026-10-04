import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AnalyticsPage, BillingPage, CampaignsPage, CreatePage, DashboardPage,
  ExperiencesPage, InvitationsPage, MarketplacePage, MediaPage, SettingsPage,
  TemplatesPage,
} from "../platform/PlatformPages";
import { PlatformShell, type PlatformPage } from "../platform/PlatformShell";
import { EditorShell, GuestFrame, SceneRail } from "@invite/design-system";
import {
  Box, Button, Card, CardContent, Chip, Grid, IconButton, Stack, TextField, Typography,
} from "@mui/material";
import { ArrowBack, DesktopWindows, PhoneIphone, Preview, Publish } from "@mui/icons-material";

type AppPage = PlatformPage;
type FlowStep = "create" | "interview" | "storyboard";
const interviewMessages = [
  { role: "assistant" as const, text: "What are you creating, and what should the guest feel when they open it?" },
  { role: "user" as const, text: "A romantic date invitation. I want it to feel cinematic, playful and personal." },
  { role: "assistant" as const, text: "Great. What is the moment, date or place we are inviting them to?" },
  { role: "user" as const, text: "September 28, sunset at Valea Morilor. Keep the exact location hidden until the reveal." },
];

function CreationFlow({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = React.useState<FlowStep>("interview");
  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState(interviewMessages);
  const [selectedRecipe, setSelectedRecipe] = React.useState("Cinematic");

  if (step === "storyboard") {
    return (
      <PlatformShell page="create" title="Storyboard ready" subtitle="AI transformed the interview into an editable ExperienceSpec.">
        <Stack spacing={2}>
          <Card><CardContent><Chip color="success" label="ExperienceSpec validated" /><Typography variant="h3" mt={1}>A little surprise</Typography><Typography color="text.secondary">7 scenes · 3 interactions · cinematic visual recipe · hidden location reveal.</Typography></CardContent></Card>
          <Grid container spacing={1.5}>{scenes.map((scene, i) => <Grid key={scene.id} size={{ xs: 12, sm: 6, lg: 4 }}><Card><CardContent><Typography variant="caption">0{i+1}</Typography><Typography fontWeight={800}>{scene.title}</Typography><Typography variant="body2" color="text.secondary">{scene.type} · {scene.duration}</Typography></CardContent></Card></Grid>)}</Grid>
          <Stack direction="row" justifyContent="flex-end"><Button variant="contained" onClick={onComplete}>Open in editor</Button></Stack>
        </Stack>
      </PlatformShell>
    );
  }

  return (
    <PlatformShell page="create" title="Create with AI" subtitle={step === "interview" ? "A short conversation becomes a structured experience plan." : "Choose a creative direction."}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Card><CardContent>
            {step === "interview" ? <Stack spacing={1.5}>
              {messages.map((message, i) => <Paper key={i} variant="outlined" sx={{ p: 1.5, alignSelf: message.role === "user" ? "flex-end" : "stretch", maxWidth: "88%", bgcolor: message.role === "user" ? "secondary.main" : "background.paper", color: message.role === "user" ? "#fff" : "text.primary" }}>{message.text}</Paper>)}
              <TextField fullWidth multiline minRows={2} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Tell the creative director more..." />
              <Stack direction="row" justifyContent="space-between"><Typography variant="caption" color="text.secondary">{messages.length} messages · AI keeps the structured story separate from generated code.</Typography><Button variant="accent" onClick={() => { if (input.trim()) { setMessages([...messages, { role: "user", text: input.trim() }]); setInput(""); } else setStep("storyboard"); }}>Continue</Button></Stack>
            </Stack> : <Stack spacing={2}>
              <Typography variant="h3">Choose the visual recipe</Typography>
              <Grid container spacing={1}>{["Cinematic", "Warm minimal", "Editorial", "Playful"].map((recipe) => <Grid key={recipe} size={{ xs: 6 }}><Button fullWidth variant={selectedRecipe === recipe ? "contained" : "outlined"} onClick={() => setSelectedRecipe(recipe)}>{recipe}</Button></Grid>)}</Grid>
              <Button variant="accent" onClick={() => setStep("storyboard")}>Generate storyboard</Button>
            </Stack>}
          </CardContent></Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card><CardContent><Typography fontWeight={800}>Creation contract</Typography><Stack spacing={1.25} mt={2}>{["Structured story", "Visual recipe", "Interaction schema", "Responsive scenes", "Accessibility defaults"].map((x) => <Stack key={x} direction="row" spacing={1}><CheckCircle color="success" fontSize="small" /><Typography variant="body2">{x}</Typography></Stack>)}</Stack></CardContent></Card>
        </Grid>
      </Grid>
    </PlatformShell>
  );
}

type Scene = {
  id: string;
  title: string;
  type: string;
  duration: string;
  description: string;
};

const scenes: Scene[] = [
  { id: "opening", title: "Opening", type: "Hero", duration: "8.2s", description: "A cinematic introduction that establishes the mood." },
  { id: "memory", title: "Memory beat", type: "Story", duration: "12.0s", description: "One personal memory with photo, caption and ambient motion." },
  { id: "question", title: "The question", type: "Interaction", duration: "15.0s", description: "A playful question that invites the guest to participate." },
  { id: "reveal", title: "The reveal", type: "Reveal", duration: "7.4s", description: "The central surprise with a deliberate visual pause." },
  { id: "location", title: "Location", type: "Details", duration: "10.0s", description: "Date, place and practical information." },
  { id: "rsvp", title: "RSVP", type: "RSVP", duration: "18.0s", description: "Collect attendance and optional guest information." },
  { id: "finale", title: "Finale", type: "Closing", duration: "6.0s", description: "A warm closing moment with sharing and replay." },
];

function EditorPage({ onBack }: { onBack: () => void }) {
  const [selectedId, setSelectedId] = React.useState("opening");
  const [device, setDevice] = React.useState<"desktop" | "phone">("desktop");
  const selected = scenes.find((scene) => scene.id === selectedId) ?? scenes[0];
  const [description, setDescription] = React.useState(selected.description);

  React.useEffect(() => {
    setDescription(selected.description);
  }, [selectedId, selected.description]);

  return (
    <PlatformShell
      page="editor"
      title="Experience Editor"
      subtitle="Compose scenes, interactions and the guest experience."
      actions={
        <Stack direction="row" spacing={0.75}>
          <Button size="small" startIcon={<Preview />}>Preview</Button>
          <Button size="small" variant="contained" startIcon={<Publish />}>Publish</Button>
        </Stack>
      }
    >
      <EditorShell
        left={
          <Stack spacing={1}>
            <Typography variant="overline" color="primary.light">Experience editor</Typography>
            <Typography variant="h3" color="#fff">A little surprise</Typography>
            <Typography variant="caption" color="#9f9991">7 scenes · 3 interactions</Typography>
            <Stack spacing={0.5} mt={1}>
              {scenes.map((scene, index) => (
                <Button key={scene.id} size="small" onClick={() => setSelectedId(scene.id)}
                  variant={scene.id === selectedId ? "contained" : "text"}
                  sx={{ justifyContent: "flex-start", textTransform: "none", color: scene.id === selectedId ? undefined : "#c7c1b8" }}>
                  {String(index + 1).padStart(2, "0")}&nbsp; {scene.title}
                </Button>
              ))}
            </Stack>
          </Stack>
        }
        right={
          <Stack spacing={1.5}>
            <Typography fontWeight={800}>Scene inspector</Typography>
            <Chip size="small" label={selected.type} sx={{ alignSelf: "flex-start" }} />
            <TextField label="Scene title" value={selected.title} fullWidth size="small" disabled />
            <TextField label="Description" value={description} onChange={(event) => setDescription(event.target.value)} multiline minRows={5} fullWidth size="small" />
            <Button variant="outlined">Edit media</Button>
            <Button variant="outlined">Configure interaction</Button>
          </Stack>
        }
      >
        <Stack spacing={2} sx={{ maxWidth: 820, mx: "auto" }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Button size="small" startIcon={<ArrowBack />} onClick={onBack}>Back to experiences</Button>
            <Stack direction="row" spacing={0.5}>
              <IconButton size="small" onClick={() => setDevice("desktop")} color={device === "desktop" ? "primary" : "default"}><DesktopWindows /></IconButton>
              <IconButton size="small" onClick={() => setDevice("phone")} color={device === "phone" ? "primary" : "default"}><PhoneIphone /></IconButton>
            </Stack>
          </Stack>

          <Box>
            <Chip label={`${selected.type} · Scene ${String(scenes.indexOf(selected) + 1).padStart(2, "0")}`} color="primary" />
            <Typography variant="h2" sx={{ color: "#fff", mt: 1 }}>{selected.title}</Typography>
            <Typography sx={{ color: "#bdb7ae" }}>{selected.duration} · Autosaved just now</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <GuestFrame>
              <Stack
                alignItems="center"
                justifyContent="center"
                minHeight={device === "phone" ? 560 : 520}
                width={device === "phone" ? 320 : "100%"}
                textAlign="center"
                spacing={1.5}
                sx={{ px: 3, transition: "width .2s ease" }}
              >
                <Typography variant="overline" color="primary">SEPTEMBER 28</Typography>
                <Typography variant="h2" fontFamily="Georgia, serif">Elena & Victor</Typography>
                <Typography color="text.secondary">{description}</Typography>
                <Chip label={selected.type === "Interaction" ? "Guest interaction" : "Animated scene"} size="small" />
              </Stack>
            </GuestFrame>
          </Box>

          <SceneRail scenes={scenes.map((scene) => scene.title)} />
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {scenes.map((scene) => (
              <Button key={scene.id} size="small" variant={scene.id === selectedId ? "contained" : "outlined"} onClick={() => setSelectedId(scene.id)}>
                {scene.title}
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
  const [creationFlow, setCreationFlow] = React.useState(false);

  const pageTitles: Record<AppPage, string> = {
    dashboard: "Overview", experiences: "Experiences", invitations: "Invitations",
    create: "Create", templates: "Templates", campaigns: "Campaigns", media: "Media",
    analytics: "Analytics", settings: "Settings", billing: "Billing",
    marketplace: "Marketplace", story: "Story & AI", interactions: "Interactions",
    distribution: "Distribution", team: "Team & Collaboration", exports: "Export & Delivery",
    editor: "Experience Editor",
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
    story: <PlatformShell page="dashboard" title="Story & AI"><Grid container spacing={1.75}>{["12 facts", "7 moments", "94% creative confidence"].map((x) => <Grid key={x} size={{ xs: 12, md: 4 }}><Card><CardContent><Typography variant="h3">{x}</Typography><Typography color="text.secondary">Story intelligence and creative direction.</Typography></CardContent></Card></Grid>)}</Grid></PlatformShell>,
    interactions: <PlatformShell page="dashboard" title="Interactions"><Grid container spacing={1.75}>{["RSVP", "Quiz", "Branching", "Guestbook", "Voting", "Photo upload"].map((x) => <Grid key={x} size={{ xs: 12, sm: 6, lg: 4 }}><Card><CardContent><Chip label="Typed interaction" /><Typography variant="h3" mt={1}>{x}</Typography></CardContent></Card></Grid>)}</Grid></PlatformShell>,
    distribution: <PlatformShell page="dashboard" title="Distribution"><Card><CardContent><Typography variant="h3">invite.md/i/a-little-surprise</Typography><Typography color="text.secondary">Stable public URL · QR · custom domain · physical outputs.</Typography></CardContent></Card></PlatformShell>,
    team: <PlatformShell page="dashboard" title="Team & Collaboration"><Card><CardContent><Typography variant="h3">Review workflow</Typography><Typography color="text.secondary">Owner → designer → reviewer → approved.</Typography></CardContent></Card></PlatformShell>,
    exports: <PlatformShell page="dashboard" title="Export & Delivery"><Grid container spacing={1.75}>{["Interactive website", "ZIP", "PDF / print", "Social card", "Short video", "MP4"].map((x) => <Grid key={x} size={{ xs: 12, sm: 6, lg: 4 }}><Card><CardContent><Chip label="Ready" /><Typography variant="h3" mt={1}>{x}</Typography></CardContent></Card></Grid>)}</Grid></PlatformShell>,
    editor: <EditorPage onBack={() => setPage("experiences")} />,
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
