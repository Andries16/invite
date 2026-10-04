import * as React from "react";
import { Box, Button, Card, CardContent, Chip, LinearProgress, Paper, Stack, Typography } from "@mui/material";
import { PreviewFrame, ResponsiveGrid, SectionHeader, StatusChip } from "@invite/design-system";

export function CreatorShell({ title, children }: { title: string; children: React.ReactNode }) {
  return <Box sx={{ display:"flex", minHeight:"100vh", bgcolor:"background.default" }}>
    <Box component="aside" sx={{ display:{xs:"none",md:"block"}, width:252, flexShrink:0, bgcolor:"secondary.main", color:"#fff", p:2, position:"sticky", top:0, height:"100vh", overflowY:"auto" }}>
      <Typography fontWeight={900} fontSize={18} p={1}>i. invite.md</Typography>
      <Paper sx={{ p:1.2, my:2, bgcolor:"#ffffff12", color:"#fff" }}><Typography fontSize={11} fontWeight={800}>Andrei’s workspace</Typography><Typography fontSize={10} color="#bcb7af">Personal · Creator</Typography></Paper>
      <Typography variant="caption" color="#aaa59d" p={1}>WORKSPACE</Typography>
      <Stack spacing={.25} mt={1}>{["Overview","Create","Experiences","Templates","Invitations","Campaigns","Media","Story & AI","Interactions","Analytics","Distribution","Settings","Team","Billing","Marketplace","Exports"].map(x=><Button key={x} size="small" sx={{justifyContent:"flex-start",textTransform:"none",color:x===title?"#fff":"#aaa59d",bgcolor:x===title?"#ffffff14":undefined}}>{x}</Button>)}</Stack>
      <Box mt={2} p={1.2} border="1px solid #ffffff18" borderRadius={2}><Typography fontSize={10} fontWeight={800}>Creator plan</Typography><Typography fontSize={9} color="#bcb7af">68 / 200 AI generations</Typography><LinearProgress value={34} variant="determinate" sx={{mt:1}}/></Box>
    </Box>
    <Box component="main" flex={1} minWidth={0}><Box height={68} px={{xs:2,md:4}} borderBottom={1} borderColor="divider" bgcolor="background.paper" display="flex" alignItems="center" justifyContent="space-between" position="sticky" top={0} zIndex={4}><Typography fontSize={11} color="text.secondary">Workspace / <b>{title}</b></Typography><Stack direction="row" spacing={1}><Chip size="small" label="Creator · 68%"/><Button size="small" variant="contained">New invitation</Button></Stack></Box><Box p={{xs:2,md:4}} maxWidth={1500} mx="auto">{children}</Box></Box>
  </Box>;
}

export function EditorShell({ children, left, right }: { children: React.ReactNode; left?: React.ReactNode; right?: React.ReactNode }) {
  return <Box minHeight="100vh" bgcolor="secondary.main" color="#fff" display="grid" sx={{gridTemplateColumns:{xs:"1fr",lg:"260px minmax(0,1fr) 300px"}}}>
    <Box p={2} sx={{display:{xs:"none",lg:"block"},bgcolor:"#211f1c"}}>
      {left ?? <>
        <Typography variant="overline" color="primary.light">Experience editor</Typography>
        <Typography variant="h3" color="#fff">A little surprise</Typography>
      </>}
    </Box>
    <Box p={{xs:1.5,lg:2}} bgcolor="#292729">{children}</Box>
    <Box p={2} bgcolor="background.paper" color="text.primary" sx={{display:{xs:"none",lg:"block"},overflowY:"auto"}}>
      {right ?? <Typography fontWeight={800}>Scene inspector</Typography>}
    </Box>
  </Box>;
}
