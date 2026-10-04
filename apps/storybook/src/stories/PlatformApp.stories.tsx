import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AnalyticsPage,
  DashboardPage,
  BillingPage,
  CampaignsPage,
  CreatePage,
  ExperiencesPage,
  InvitationsPage,
  MarketplacePage,
  MediaPage,
  SettingsPage,
  TemplatesPage,
} from "../platform/PlatformPages";
import { PlatformShell, type PlatformPage } from "../platform/PlatformShell";
import { Box, Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";

type AppPage = PlatformPage | "story" | "interactions" | "distribution" | "team" | "exports";

const extraPages: Record<Exclude<AppPage, PlatformPage>, React.ReactNode> = {
  story: (
    <PlatformShell page="dashboard" title="Story & AI" subtitle="Give AI the story behind the invitation.">
      <Grid container spacing={1.75}>
        {[
          ["12 facts", "People & relationships"],
          ["7 moments", "Memory timeline"],
          ["94%", "Creative direction confidence"],
        ].map(([value, label]) => (
          <Grid key={label} size={{ xs: 12, md: 4 }}>
            <Card><CardContent><Chip label={value} color="primary" /><Typography variant="h3" mt={1}>{label}</Typography><Typography color="text.secondary">Nostalgic, intimate, cinematic, understated.</Typography></CardContent></Card>
          </Grid>
        ))}
      </Grid>
    </PlatformShell>
  ),
  interactions: (
    <PlatformShell page="dashboard" title="Interactions" subtitle="Design what guests can do.">
      <Grid container spacing={1.75}>
        {["RSVP", "Quiz", "Branching", "Guestbook", "Voting", "Photo upload", "Hidden reveal", "Countdown"].map((name, i) => (
          <Grid key={name} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card><CardContent><Chip size="small" label={i < 4 ? "Live" : "Beta"} /><Typography variant="h3" mt={1}>{name}</Typography><Typography color="text.secondary">Typed, validated guest interaction.</Typography></CardContent></Card>
          </Grid>
        ))}
      </Grid>
    </PlatformShell>
  ),
  distribution: (
    <PlatformShell page="dashboard" title="Distribution" subtitle="Take the experience everywhere.">
      <Grid container spacing={1.75}>
        {[
          ["Stable URL", "invite.md/i/a-little-surprise"],
          ["QR sharing", "Print or scan the experience"],
          ["Custom domain", "elena-andrei.md"],
          ["Physical outputs", "Cards, posters, menus and stickers"],
        ].map(([title, body]) => (
          <Grid key={title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card><CardContent><Chip label={title} color="primary" /><Typography variant="h3" mt={1}>{body}</Typography></CardContent></Card>
          </Grid>
        ))}
      </Grid>
    </PlatformShell>
  ),
  team: (
    <PlatformShell page="dashboard" title="Team & Collaboration" subtitle="Roles, review, comments and approval.">
      <Grid container spacing={1.75}>
        {[
          ["Andrei S.", "Owner", "Everything"],
          ["Maria P.", "Designer", "Experiences + media"],
          ["Elena R.", "Reviewer", "Review only"],
        ].map(([name, role, access]) => (
          <Grid key={name} size={{ xs: 12, md: 4 }}>
            <Card><CardContent><Typography variant="h3">{name}</Typography><Chip label={role} sx={{ mt: 1 }} /><Typography color="text.secondary" mt={1}>{access}</Typography></CardContent></Card>
          </Grid>
        ))}
      </Grid>
    </PlatformShell>
  ),
  exports: (
    <PlatformShell page="dashboard" title="Export & Delivery" subtitle="Generate every output from the same validated ExperienceSpec.">
      <Grid container spacing={1.75}>
        {["Interactive website", "ZIP", "PDF / print", "Social card", "Short video", "MP4 guest version"].map((name, i) => (
          <Grid key={name} size={{ xs: 12, sm: 6, lg: 4 }}>
            <Card><CardContent><Chip label={i < 3 ? "Ready" : "Beta"} /><Typography variant="h3" mt={1}>{name}</Typography><Typography color="text.secondary">Same source experience, different delivery channel.</Typography></CardContent></Card>
          </Grid>
        ))}
      </Grid>
    </PlatformShell>
  ),
};

function FullPlatform() {
  const [page, setPage] = React.useState<AppPage>("dashboard");

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
  };

  const content = {
    dashboard: <DashboardPage />,
    experiences: <ExperiencesPage />,
    invitations: <InvitationsPage />,
    create: <CreatePage />,
    templates: <TemplatesPage />,
    campaigns: <CampaignsPage />,
    media: <MediaPage />,
    analytics: <AnalyticsPage />,
    settings: <SettingsPage />,
    billing: <BillingPage />,
    marketplace: <MarketplacePage />,
    story: extraPages.story,
    interactions: extraPages.interactions,
    distribution: extraPages.distribution,
    team: extraPages.team,
    exports: extraPages.exports,
  }[page];

  return (
    <Box sx={{ minHeight: "100vh", "& .MuiPaper-root": { transition: "box-shadow .18s ease" } }}>
      <PlatformShell
        page={page}
        title={pageTitles[page]}
        onNavigate={(next) => setPage(next)}
      >
        {content}
      </PlatformShell>
    </Box>
  );
}

function DashboardFallback() {
  return (
    <PlatformShell page="dashboard" title="Good morning, Andrei" subtitle="Create memorable digital experiences from one calm workspace.">
      <Card sx={{ border: 0, color: "#fff", background: "linear-gradient(120deg,#201e1a,#2b2723 65%,#342c44)" }}>
        <CardContent sx={{ p: { xs: 3, md: 5 } }}>
          <Typography variant="overline" sx={{ color: "#b4a6ff" }}>AI EXPERIENCE STUDIO</Typography>
          <Typography variant="h2" sx={{ color: "#fff", mt: 1 }}>Turn a story into an experience.</Typography>
          <Typography color="#c4c0b9" maxWidth={700} mt={1}>Describe the moment, let AI shape the storyboard, then refine every scene before publishing.</Typography>
          <Stack direction="row" spacing={1} mt={3}>
            <Chip label="AI creative director" />
            <Chip label="Interactive scenes" />
            <Chip label="Campaigns" />
          </Stack>
        </CardContent>
      </Card>
    </PlatformShell>
  );
}

const meta = {
  title: "Platform/Full Platform",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const App: Story = {
  render: () => <FullPlatform />,
};
