import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AnalyticsPage, BillingPage, CampaignsPage, CreatePage, DashboardPage, ExperiencesPage,
  InvitationsPage, MarketplacePage, MediaPage, SettingsPage, TemplatesPage, StoryIntelligencePage, InteractionsPage, DistributionPage, TeamPage, ExportsPage,
} from "../platform/PlatformPages";

const meta = {
  title: "Platform/Pages",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = { render: () => <DashboardPage /> };
export const Experiences: Story = { render: () => <ExperiencesPage /> };
export const Invitations: Story = { render: () => <InvitationsPage /> };
export const Create: Story = { render: () => <CreatePage /> };
export const Templates: Story = { render: () => <TemplatesPage /> };
export const Campaigns: Story = { render: () => <CampaignsPage /> };
export const Media: Story = { render: () => <MediaPage /> };
export const Analytics: Story = { render: () => <AnalyticsPage /> };
export const Settings: Story = { render: () => <SettingsPage /> };
export const Billing: Story = { render: () => <BillingPage /> };
export const Marketplace: Story = { render: () => <MarketplacePage /> };

export const StoryIntelligence: Story = { render: () => <StoryIntelligencePage /> };
export const Interactions: Story = { render: () => <InteractionsPage /> };
export const Distribution: Story = { render: () => <DistributionPage /> };
export const Team: Story = { render: () => <TeamPage /> };
export const Exports: Story = { render: () => <ExportsPage /> };
