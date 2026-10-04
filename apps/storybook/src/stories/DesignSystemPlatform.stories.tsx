import {
  ExperienceCard,
  MediaPreview,
  MetricGrid,
  PageHeader,
  PreviewFrame,
  RecipeCard,
  ResponsiveGrid,
  SectionHeader,
  StatCard,
  StatusChip,
} from "@invite/design-system";
import { Chip, Stack, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design System/Platform Composition",
  parameters: { layout: "centered" },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const PageStructure: Story = {
  render: () => (
    <Stack spacing={4} sx={{ width: "min(1100px,92vw)" }}>
      <PageHeader
        eyebrow="Experience library"
        title="Build a moment, not a page."
        body="The same composition primitives are used by the HTML prototype parity pages and the production creator."
      />
      <SectionHeader title="Latest experiences" body="Versioned, playable experiences." />
      <ResponsiveGrid columns={3}>
        <ExperienceCard title="A little surprise" status="draft" />
        <ExperienceCard title="Maya & Daniel" status="live" />
        <ExperienceCard title="Leo turns 30" status="scheduled" />
      </ResponsiveGrid>
    </Stack>
  ),
};

export const Metrics: Story = {
  render: () => (
    <MetricGrid
      items={[
        { label: "Published", value: "12", delta: "+3 this month" },
        { label: "Experiences", value: "27", delta: "8 interactive" },
        { label: "Guest sessions", value: "8.4k", delta: "+18.2%" },
        { label: "RSVP rate", value: "74%", delta: "+6.4 pts" },
      ]}
    />
  ),
};

export const Statuses: Story = {
  render: () => (
    <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
      <StatusChip status="live" />
      <StatusChip status="draft" />
      <StatusChip status="scheduled" />
      <StatusChip status="attention" />
      <StatusChip status="ready" />
      <StatusChip status="beta" />
      <StatusChip status="planned" />
    </Stack>
  ),
};

export const Recipes: Story = {
  render: () => (
    <ResponsiveGrid columns={3}>
      <RecipeCard
        title="Cinematic intro"
        description="Movie-like opening with title cards, dramatic pacing and a final reveal."
        tags={
          <Stack direction="row">
            <Chip size="small" label="Scenes" />
            <Chip size="small" label="Transitions" />
          </Stack>
        }
      />
      <RecipeCard
        title="Choose your path"
        description="Questions, branching choices and a personalized reveal."
      />
      <RecipeCard
        title="Envelope reveal"
        description="A tactile opening moment that hides a letter, destination or RSVP."
      />
    </ResponsiveGrid>
  ),
};

export const Preview: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: "min(520px,92vw)" }}>
      <Typography variant="h3">Guest preview</Typography>
      <PreviewFrame>
        <Typography sx={{ fontSize: 56, fontWeight: 900, lineHeight: 0.9 }}>
          For you,
          <br />
          always.
        </Typography>
      </PreviewFrame>
    </Stack>
  ),
};

export const Media: Story = {
  render: () => (
    <Stack sx={{ width: 420 }}>
      <MediaPreview title="A little surprise" subtitle="Cinematic scene · 6 assets" height={220} />
      <StatCard label="Media assets" value="42" delta="7 optimized" />
    </Stack>
  ),
};
