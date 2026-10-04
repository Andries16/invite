import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Drawer, IconButton,
  List, ListItemButton, ListItemText, MenuItem, Stack, TextField, Typography,
} from "@mui/material";
import { Close, DeleteOutline, QrCode2, Share, AutoAwesome, Publish, Add } from "@mui/icons-material";

const meta = { title: "Platform/Overlays", parameters: { layout: "centered" } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

function OverlayStage({ children }: { children: React.ReactNode }) {
  return <Box minWidth={900} minHeight={560} p={4} display="grid" sx={{placeItems:"center", bgcolor:"background.default"}}>{children}</Box>;
}

export const NewInvitationDialog: Story = {
  render: () => <OverlayStage><Dialog open><DialogTitle>Create an invitation</DialogTitle><DialogContent><Typography color="text.secondary" mb={2}>Choose how you want to begin.</Typography><Stack spacing={1}><Button variant="accent" startIcon={<AutoAwesome />} fullWidth>Start with AI</Button><Button variant="outlined" startIcon={<Add />} fullWidth>Use a template</Button><Button variant="outlined" fullWidth>Start from scratch</Button></Stack></DialogContent><DialogActions><Button>Cancel</Button></DialogActions></Dialog></OverlayStage>,
};

export const ShareDialog: Story = {
  render: () => <OverlayStage><Dialog open><DialogTitle>Share experience</DialogTitle><DialogContent><TextField fullWidth label="Public URL" value="elena-victor.invite.md" slotProps={{input:{readOnly:true}}}/><Stack direction="row" spacing={1} mt={2}><Button variant="outlined" startIcon={<Share />}>Copy link</Button><Button variant="outlined" startIcon={<QrCode2 />}>QR code</Button></Stack></DialogContent><DialogActions><Button>Done</Button></DialogActions></Dialog></OverlayStage>,
};

export const DeleteConfirmation: Story = {
  render: () => <OverlayStage><Dialog open><DialogTitle>Delete invitation?</DialogTitle><DialogContent><Typography color="text.secondary">This will remove the draft and its unpublished versions. Published artifacts remain immutable.</Typography></DialogContent><DialogActions><Button>Cancel</Button><Button color="error" variant="contained" startIcon={<DeleteOutline />}>Delete invitation</Button></DialogActions></Dialog></OverlayStage>,
};

export const PublishDrawer: Story = {
  render: () => <OverlayStage><Drawer anchor="right" open PaperProps={{sx:{width:460,p:3}}}><Stack direction="row" alignItems="center" justifyContent="space-between"><Box><Typography variant="h3">Publish</Typography><Typography variant="body2" color="text.secondary">Elena & Victor</Typography></Box><IconButton><Close/></IconButton></Stack><Stack spacing={2} mt={3}><Button variant="accent" startIcon={<Publish />}>Publish version 7</Button><TextField select label="Domain" value="invite.md"><MenuItem value="invite.md">invite.md</MenuItem><MenuItem value="custom">Custom domain</MenuItem></TextField><Button variant="outlined">Schedule publication</Button></Stack></Drawer></OverlayStage>,
};

export const ExperienceEditorDrawer: Story = {
  render: () => <OverlayStage><Drawer anchor="left" open PaperProps={{sx:{width:420,p:3}}}><Stack direction="row" alignItems="center" justifyContent="space-between"><Box><Typography variant="h3">Scene settings</Typography><Typography variant="body2" color="text.secondary">Scene 03 · Memory</Typography></Box><IconButton><Close/></IconButton></Stack><List sx={{mt:2}}><ListItemButton selected><ListItemText primary="Content" secondary="Text, media and safe variables"/></ListItemButton><ListItemButton><ListItemText primary="Layout" secondary="Composition and alignment"/></ListItemButton><ListItemButton><ListItemText primary="Motion" secondary="Entrance and transition"/></ListItemButton><ListItemButton><ListItemText primary="Interactions" secondary="Triggers and actions"/></ListItemButton></List></Drawer></OverlayStage>,
};
