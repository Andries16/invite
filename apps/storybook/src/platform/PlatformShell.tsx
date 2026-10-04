        <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ display: { xs: "block", md: "none" } }}>
          <Box sx={{ width: 280, p: 1.75, height: "100%" }}>
            <Stack direction="row" alignItems="center" spacing={1} px={1} py={1.25} mb={1}>
              <Box width={30} height={30} display="grid" sx={{ placeItems: "center", borderRadius: 2, background: "linear-gradient(145deg,#292621,#12110f)", color: "#fff", fontWeight: 850 }}>i</Box>
              <Typography fontSize={20} fontWeight={850}>Invite.md</Typography>
            </Stack>
            <List disablePadding sx={{ display: "grid", gap: 0.35 }}>
              {[...navigation, ...secondary].map((item) => (
                <ListItemButton key={item.key} selected={page === item.key} onClick={() => { navigate?.(item.key); setMobileOpen(false); }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>

import * as React from "react";
import {
  Avatar, Badge, Box, Button, Divider, Drawer, IconButton, List, ListItemButton,
  ListItemIcon, ListItemText, Paper, Stack, Toolbar, Typography,
} from "@mui/material";
import {
  Analytics, AutoAwesome, Campaign, Collections, Dashboard, Explore,
  Extension, FileDownload, Group, HelpOutline, Insights, Logout, NotificationsNone,
  Menu, QrCode2, Settings, ShoppingBag, Tune, Workspaces,
} from "@mui/icons-material";

export type PlatformPage =
  | "dashboard" | "experiences" | "invitations" | "create" | "templates"
  | "campaigns" | "media" | "analytics" | "settings" | "billing" | "marketplace"
  | "story" | "interactions" | "distribution" | "team" | "exports" | "editor" | "preview";

const navigation: Array<{ key: PlatformPage; label: string; icon: React.ReactNode; badge?: string }> = [
  { key: "dashboard", label: "Overview", icon: <Dashboard /> },
  { key: "experiences", label: "Experiences", icon: <AutoAwesome />, badge: "12" },
  { key: "invitations", label: "Invitations", icon: <Collections /> },
  { key: "create", label: "Create", icon: <Extension /> },
  { key: "templates", label: "Templates", icon: <Explore /> },
  { key: "campaigns", label: "Campaigns", icon: <Campaign /> },
  { key: "media", label: "Media", icon: <Collections /> },
  { key: "story", label: "Story & AI", icon: <Insights /> },
  { key: "interactions", label: "Interactions", icon: <Workspaces /> },
  { key: "analytics", label: "Analytics", icon: <Analytics /> },
  { key: "distribution", label: "Distribution", icon: <QrCode2 /> },
  { key: "team", label: "Team", icon: <Group /> },
  { key: "exports", label: "Exports", icon: <FileDownload /> },
];

const secondary = [
  { key: "settings" as const, label: "Settings", icon: <Settings /> },
  { key: "billing" as const, label: "Billing", icon: <Tune /> },
  { key: "marketplace" as const, label: "Marketplace", icon: <ShoppingBag /> },
];

type PlatformContextValue = {
  onNavigate?: (page: PlatformPage) => void;
};

const PlatformContext = React.createContext<PlatformContextValue>({});

export function usePlatformNavigation() {\n  return React.useContext(PlatformContext).onNavigate;\n}\n\nexport function PlatformShell({
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
        <Box component="section">
          {children}
        </Box>
      </PlatformContext.Provider>
    );
  }

  return (
    <PlatformContext.Provider value={{ onNavigate: navigate }}>
      <Box display="flex" minHeight="100vh" bgcolor="background.default">
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
          <Stack height="100%" spacing={1.25}>
            <Stack direction="row" alignItems="center" spacing={1.25} px={1} py={0.9} mb={0.8}>
              <Box width={30} height={30} display="grid" sx={{ placeItems: "center", borderRadius: 2, background: "linear-gradient(145deg,#292621,#12110f)", color: "#fff", fontSize: 13, fontWeight: 850 }}>i</Box>
              <Typography fontSize={20} fontWeight={850} letterSpacing="-0.055em">Invite.md</Typography>
            </Stack>

            <Paper variant="outlined" sx={{ p: 1.1, mx: 0.5, borderRadius: 3, bgcolor: "#fff" }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar sx={{ width: 28, height: 28 }}>AM</Avatar>
                <Box minWidth={0} flex={1}>
                  <Typography fontSize={12} fontWeight={750} noWrap>Andrei's Studio</Typography>
                  <Typography fontSize={10} color="text.secondary" noWrap>Pro workspace</Typography>
                </Box>
                <Typography color="text.secondary">⌄</Typography>
              </Stack>
            </Paper>

            <Typography variant="overline" color="text.secondary" px={1.4} pt={0.8}>Workspace</Typography>
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

            <Typography variant="overline" color="text.secondary" px={1.4} pt={0.8}>Workspace</Typography>
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

            <Box flex={1} />
            <Paper sx={{ p: 1.6, bgcolor: "#24211d", color: "#fff", border: 0 }}>
              <Typography fontSize={11} fontWeight={800}>Pro plan</Typography>
              <Typography fontSize={10} sx={{ opacity: 0.65 }} mt={0.4}>38% of monthly usage</Typography>
              <Box height={4} bgcolor="#ffffff25" borderRadius={99} my={1}>
                <Box height="100%" width="38%" bgcolor="#b4a6ff" borderRadius={99} />
              </Box>
              <Button size="small" variant="soft" fullWidth>Manage plan</Button>
            </Paper>
            <Divider />
            <Stack direction="row" alignItems="center" spacing={1} px={0.5}>
              <Avatar>AM</Avatar>
              <Box flex={1} minWidth={0}>
                <Typography fontSize={11} fontWeight={750} noWrap>Andrei M.</Typography>
                <Typography fontSize={10} color="text.secondary" noWrap>andrei@example.com</Typography>
              </Box>
              <IconButton size="small"><Logout fontSize="small" /></IconButton>
            </Stack>
          </Stack>
        </Paper>

        <Box sx={{ ml: { xs: 0, md: "252px" }, width: { xs: "100%", md: "calc(100% - 252px)" } }} minWidth={0}>
          <Paper square elevation={0} component="header" sx={{ height: 70, position: "sticky", top: 0, zIndex: 10, bgcolor: "rgba(251,250,248,.91)", backdropFilter: "blur(14px)", borderTop: 0, borderLeft: 0, borderRight: 0 }}>
            <Toolbar>
              <Stack direction="row" alignItems="center" spacing={1} flex={1}>
                <Typography variant="body2" color="text.secondary">Workspace</Typography>
                <Typography color="text.secondary">/</Typography>
                <Typography fontSize={12} fontWeight={750}>{title ?? "Overview"}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={0.75}>
                {actions}
                <IconButton><NotificationsNone /></IconButton>
                <IconButton><HelpOutline /></IconButton>
              </Stack>
            </Toolbar>
          </Paper>

          <Box component="main" maxWidth={1500} mx="auto" px={{ xs: 2, lg: 4.25 }} py={3.75} pb={6}>
            {(title || subtitle) && (
              <Stack mb={3}>
                <Typography variant="h1">{title}</Typography>
                {subtitle && <Typography color="text.secondary" maxWidth={720}>{subtitle}</Typography>}
              </Stack>
            )}
            {children}
          </Box>
        </Box>
      </Box>
    </PlatformContext.Provider>
  );
}
