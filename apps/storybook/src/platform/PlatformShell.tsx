// @ts-nocheck
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CampaignIcon from '@mui/icons-material/Campaign';
import CollectionsIcon from '@mui/icons-material/Collections';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExploreIcon from '@mui/icons-material/Explore';
import ExtensionIcon from '@mui/icons-material/Extension';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import GroupIcon from '@mui/icons-material/Group';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import InsightsIcon from '@mui/icons-material/Insights';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import TuneIcon from '@mui/icons-material/Tune';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from "react";

export type PlatformPage =
  | "dashboard"
  | "experiences"
  | "invitations"
  | "create"
  | "templates"
  | "campaigns"
  | "media"
  | "analytics"
  | "settings"
  | "billing"
  | "marketplace"
  | "story"
  | "interactions"
  | "distribution"
  | "team"
  | "exports"
  | "editor"
  | "preview";

const navigation: Array<{
  key: PlatformPage;
  label: string;
  icon: React.ReactNode;
  badge?: string;
}> = [
  { key: "dashboard", label: "Overview", icon: <DashboardIcon /> },
  { key: "experiences", label: "Experiences", icon: <AutoAwesomeIcon />, badge: "12" },
  { key: "invitations", label: "Invitations", icon: <CollectionsIcon /> },
  { key: "create", label: "Create", icon: <ExtensionIcon /> },
  { key: "templates", label: "Templates", icon: <ExploreIcon /> },
  { key: "campaigns", label: "Campaigns", icon: <CampaignIcon /> },
  { key: "media", label: "Media", icon: <CollectionsIcon /> },
  { key: "story", label: "Story & AI", icon: <InsightsIcon /> },
  { key: "interactions", label: "Interactions", icon: <WorkspacesIcon /> },
  { key: "analytics", label: "Analytics", icon: <AnalyticsIcon /> },
  { key: "distribution", label: "Distribution", icon: <QrCode2Icon /> },
  { key: "team", label: "Team", icon: <GroupIcon /> },
  { key: "exports", label: "Exports", icon: <FileDownloadIcon /> },
];

const secondary = [
  { key: "settings" as const, label: "Settings", icon: <SettingsIcon /> },
  { key: "billing" as const, label: "Billing", icon: <TuneIcon /> },
  { key: "marketplace" as const, label: "Marketplace", icon: <ShoppingBagIcon /> },
];

type PlatformContextValue = {
  onNavigate?: (page: PlatformPage) => void;
};

const PlatformContext = React.createContext<PlatformContextValue>({});

export function usePlatformNavigation() {
  return React.useContext(PlatformContext).onNavigate;
}

export function PlatformShell({
  page = "dashboard",
  title,
  subtitle,
  actions,
  children,
  onNavigate,
  embedded = false,
}: {
  page?: PlatformPage;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
  onNavigate?: (page: PlatformPage) => void;
  embedded?: boolean;
}) {
  const parent = React.useContext(PlatformContext);
  const navigate = onNavigate ?? parent.onNavigate;

  if (parent.onNavigate) {
    return (
      <PlatformContext.Provider value={{ onNavigate: navigate }}>
        <Box component="section">{children}</Box>
      </PlatformContext.Provider>
    );
  }

  return (
    <PlatformContext.Provider value={{ onNavigate: navigate }}>
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        <Paper
          square
          elevation={0}
          sx={{
            width: 252,
            flexShrink: 0,
            position: "fixed",
            inset: "0 auto 0 0",
            zIndex: 20,
            p: 1.75,
            bgcolor: "#fcfbf9",
            borderTop: 0,
            borderBottom: 0,
            borderLeft: 0,
          }}
        >
          <Stack spacing={1.25} sx={{ height: "100%" }}>
            <Stack
              direction="row"
              spacing={1.25}
              sx={{ alignItems: "center", px: 1, py: 0.9, mb: 0.8 }}
            >
              <Box
                sx={{
                  width: 30,
                  height: 30,
                  display: "grid",
                  ...{
                    placeItems: "center",
                    borderRadius: 2,
                    background: "linear-gradient(145deg,#292621,#12110f)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 850,
                  },
                }}
              >
                i
              </Box>
              <Typography sx={{ fontSize: 20, fontWeight: 850, letterSpacing: "-0.055em" }}>
                Invite.md
              </Typography>
            </Stack>

            <Paper variant="outlined" sx={{ p: 1.1, mx: 0.5, borderRadius: 3, bgcolor: "#fff" }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Avatar sx={{ width: 28, height: 28 }}>AM</Avatar>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography noWrap sx={{ fontSize: 12, fontWeight: 750 }}>
                    Andrei's Studio
                  </Typography>
                  <Typography noWrap sx={{ fontSize: 10, color: "text.secondary" }}>
                    Pro workspace
                  </Typography>
                </Box>
                <Typography sx={{ color: "text.secondary" }}>⌄</Typography>
              </Stack>
            </Paper>

            <Typography variant="overline" sx={{ color: "text.secondary", px: 1.4, pt: 0.8 }}>
              Workspace
            </Typography>
            <List disablePadding sx={{ display: "grid", gap: 0.35 }}>
              {navigation.map((item) => (
                <ListItemButton
                  key={item.key}
                  selected={page === item.key}
                  onClick={() => navigate?.(item.key)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                  {item.badge && <Badge badgeContent={item.badge} color="primary" />}
                </ListItemButton>
              ))}
            </List>

            <Typography variant="overline" sx={{ color: "text.secondary", px: 1.4, pt: 0.8 }}>
              Workspace
            </Typography>
            <List disablePadding sx={{ display: "grid", gap: 0.4 }}>
              {secondary.map((item) => (
                <ListItemButton
                  key={item.key}
                  selected={page === item.key}
                  onClick={() => navigate?.(item.key)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>

            <Box sx={{ flex: 1 }} />
            <Paper sx={{ p: 1.6, bgcolor: "#24211d", color: "#fff", border: 0 }}>
              <Typography sx={{ fontSize: 11, fontWeight: 800 }}>Pro plan</Typography>
              <Typography sx={{ fontSize: 10, mt: 0.4, ...{ opacity: 0.65 } }}>
                38% of monthly usage
              </Typography>
              <Box sx={{ height: 4, bgcolor: "#ffffff25", borderRadius: 99, my: 1 }}>
                <Box sx={{ height: "100%", width: "38%", bgcolor: "#b4a6ff", borderRadius: 99 }} />
              </Box>
              <Button size="small" variant="contained" fullWidth>
                Manage plan
              </Button>
            </Paper>
            <Divider />
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", px: 0.5 }}>
              <Avatar>AM</Avatar>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography noWrap sx={{ fontSize: 11, fontWeight: 750 }}>
                  Andrei M.
                </Typography>
                <Typography noWrap sx={{ fontSize: 10, color: "text.secondary" }}>
                  andrei@example.com
                </Typography>
              </Box>
              <IconButton size="small">
                <LogoutIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Paper>

        <Box
          sx={{
            minWidth: 0,
            ...{ ml: { xs: 0, md: "252px" }, width: { xs: "100%", md: "calc(100% - 252px)" } },
          }}
        >
          <Paper
            square
            elevation={0}
            component="header"
            sx={{
              height: 70,
              position: "sticky",
              top: 0,
              zIndex: 10,
              bgcolor: "rgba(251,250,248,.91)",
              backdropFilter: "blur(14px)",
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
            }}
          >
            <Toolbar>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", flex: 1 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Workspace
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>/</Typography>
                <Typography sx={{ fontSize: 12, fontWeight: 750 }}>
                  {title ?? "Overview"}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={0.75} sx={{ alignItems: "center" }}>
                {actions}
                <IconButton>
                  <NotificationsNoneIcon />
                </IconButton>
                <IconButton>
                  <HelpOutlinedIcon />
                </IconButton>
              </Stack>
            </Toolbar>
          </Paper>

          <Box
            component="main"
            sx={{ maxWidth: 1500, mx: "auto", px: { xs: 2, lg: 4.25 }, py: 3.75, pb: 6 }}
          >
            {(title || subtitle) && (
              <Stack sx={{ mb: 3 }}>
                <Typography variant="h1">{title}</Typography>
                {subtitle && (
                  <Typography sx={{ color: "text.secondary", maxWidth: 720 }}>
                    {subtitle}
                  </Typography>
                )}
              </Stack>
            )}
            {children}
          </Box>
        </Box>
      </Box>
    </PlatformContext.Provider>
  );
}
