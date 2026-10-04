import * as React from "react";
import {
  Alert, Avatar, Box, Button, Card, CardContent, Chip, Divider, Grid, IconButton,
  LinearProgress, Paper, Stack, Tab, Tabs, Typography,
} from "@mui/material";
import {
  Add, ArrowForward, AutoAwesome, BarChart, CheckCircle, ContentCopy, Edit,
  Image, MoreHoriz, PlayArrow, Public, QrCode2, Schedule, Visibility,
} from "@mui/icons-material";
import { PlatformShell, type PlatformPage, usePlatformNavigation } from "./PlatformShell";

const invitations = [
  { title: "Elena & Victor", type: "Wedding", status: "Live", cover: "Romantic", date: "Sep 28, 2026" },
  { title: "Birthday — Daniel", type: "Birthday", status: "Draft", cover: "Midnight", date: "Oct 12, 2026" },
  { title: "Date Night", type: "Date", status: "Scheduled", cover: "Sunset", date: "Oct 18, 2026" },
];

function Section({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return <Box mt={4}><Stack direction="row" justifyContent="space-between" alignItems="end" mb={1.75}><Typography variant="h3">{title}</Typography>{action}</Stack>{children}</Box>;
}

function StatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return <Card><CardContent><Stack direction="row" justifyContent="space-between"><Box><Typography variant="body2" color="text.secondary">{label}</Typography><Typography fontSize={28} fontWeight={850} letterSpacing="-0.04em" mt={0.5}>{value}</Typography></Box><Box width={30} height={30} display="grid" sx={{ placeItems: "center", bgcolor: "#f0eee9", borderRadius: 2 }}>✦</Box></Stack><Typography color="success.main" fontSize={11} fontWeight={750} mt={1.25}>{trend}</Typography></CardContent></Card>;
}

export function DashboardPage() {
  return <PlatformShell page="dashboard" title="Good morning, Andrei" subtitle="Create memorable digital experiences from one calm workspace." actions={<Button variant="accent" startIcon={<Add />}>New invitation</Button>}>
    <Paper sx={{ p: 4.4, border: 0, color: "#fff", borderRadius: 3, background: "linear-gradient(120deg,#201e1a,#2b2723 65%,#342c44)", boxShadow: "0 25px 80px rgba(31,27,22,.14)", overflow: "hidden" }}>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="overline" sx={{ color: "#b4a6ff" }}>AI EXPERIENCE STUDIO</Typography>
          <Typography variant="h2" sx={{ color: "#fff", mt: 1 }}>Turn a story into an experience.</Typography>
          <Typography color="#c4c0b9" maxWidth={650} lineHeight={1.65} mt={1.2}>Describe the moment, let AI shape the storyboard, then refine every scene before publishing.</Typography>
          <Stack direction="row" spacing={1} mt={3}><Button variant="accent">Start with AI</Button><Button sx={{ color: "#fff", borderColor: "#ffffff30" }} variant="outlined">Explore templates</Button></Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ minHeight: 215, display: "grid", placeItems: "center", transform: "rotate(3deg)", bgcolor: "#f8f4ec", color: "#25231f", boxShadow: "0 25px 60px #0006" }}>
            <Box textAlign="center"><Typography fontFamily="Georgia,serif" fontSize={35}>Elena<br />& Victor</Typography><Typography variant="caption">September 28 · 2026</Typography></Box>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
    <Section title="At a glance"><Grid container spacing={1.75}><Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="Published experiences" value="12" trend="+3 this month" /></Grid><Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="Guests reached" value="8,421" trend="+18.4%" /></Grid><Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="RSVPs" value="1,284" trend="+11.2%" /></Grid><Grid size={{ xs: 12, sm: 6, lg: 3 }}><StatCard label="Media assets" value="246" trend="+32 this week" /></Grid></Grid></Section>
    <Section title="Recent invitations" action={<Button variant="text" endIcon={<ArrowForward />}>View all</Button>}><Grid container spacing={1.75}>{invitations.map((item)=><InvitationCard key={item.title} {...item}/>)}</Grid></Section>
  </PlatformShell>;
}

function InvitationCard(item: typeof invitations[number]) {
  return <Card><Box height={170} sx={{ background: item.cover === "Romantic" ? "linear-gradient(135deg,#382d42,#b18a9b)" : item.cover === "Midnight" ? "linear-gradient(135deg,#172b3e,#526b82)" : "linear-gradient(135deg,#75472d,#dfa06a)", display: "flex", alignItems: "end", p: 2.4, color: "#fff" }}><Typography fontFamily="Georgia,serif" fontSize={25}>{item.title}</Typography></Box><CardContent><Stack direction="row" justifyContent="space-between"><Box><Typography fontWeight={800}>{item.title}</Typography><Typography variant="body2" color="text.secondary">{item.type} · {item.date}</Typography></Box><Chip size="small" label={item.status} color={item.status === "Live" ? "success" : item.status === "Scheduled" ? "warning" : "primary"} /></Stack><Stack direction="row" spacing={0.5} mt={2}><IconButton size="small"><Visibility /></IconButton><IconButton size="small"><Edit /></IconButton><IconButton size="small"><MoreHoriz /></IconButton></Stack></CardContent></Card>;
}

export function ExperiencesPage() {
  const navigate = usePlatformNavigation();
  return <PlatformShell page="experiences" title="Experiences" subtitle="Compose multi-scene invitations and interactive stories." actions={<Button variant="accent" startIcon={<Add />}>Create experience</Button>}>
    <Tabs value={0}><Tab label="All experiences" /><Tab label="Drafts" /><Tab label="Published" /><Tab label="Archived" /></Tabs>
    <Section title="Your experiences"><Grid container spacing={1.75}>{["Elena & Victor — Wedding Story","A Night Under the Stars","Daniel's Birthday Quest","Our First Date"].map((x,i)=><Card key={x}><Box height={175} sx={{ background: ["linear-gradient(135deg,#3b2c3d,#c99da8)","linear-gradient(135deg,#1e2c3b,#839eb5)","linear-gradient(135deg,#3a3124,#d2a766)","linear-gradient(135deg,#26372e,#9ba37b)"][i], display:"flex", alignItems:"end", p:2.3, color:"#fff" }}><Typography fontFamily="Georgia,serif" fontSize={22}>{x}</Typography></Box><CardContent><Stack direction="row" justifyContent="space-between" alignItems="center"><Typography variant="body2" color="text.secondary">{5+i*2} scenes · {i+2} interactions</Typography><Chip size="small" label={i<2 ? "Published":"Draft"} color={i<2 ? "success":"primary"} /></Stack><Button size="small" sx={{ mt: 1 }} onClick={() => navigate?.("editor")}>Open editor</Button></CardContent></Card>)}</Grid></Section>
  </PlatformShell>;
}

export function InvitationsPage() {
  return <PlatformShell page="invitations" title="Invitations" subtitle="Manage every invitation, version and publication." actions={<Button variant="accent" startIcon={<Add />}>New invitation</Button>}>
    <Grid container spacing={1.75}>{invitations.concat([{title:"Maya — Baby Shower",type:"Baby shower",status:"Live",cover:"Olive",date:"Nov 04, 2026"}]).map(x=><InvitationCard key={x.title} {...x}/>)}</Grid>
  </PlatformShell>;
}

export function TemplatesPage() {
  return <PlatformShell page="templates" title="Templates" subtitle="Start from a proven visual recipe or generate a new direction with AI.">
    <Stack direction="row" spacing={1} mb={2}><Chip label="All" color="primary"/><Chip label="Wedding"/><Chip label="Birthday"/><Chip label="Date"/><Chip label="Announcement"/></Stack>
    <Grid container spacing={1.75}>{["Editorial Romance","Midnight Cinema","Warm Minimal","Olive Garden","Golden Hour","Paper & Ink"].map((x,i)=><Card key={x}><Box height={235} display="grid" sx={{placeItems:"center", background:["linear-gradient(135deg,#382d42,#b18a9b)","linear-gradient(135deg,#172b3e,#9eb7c8)","linear-gradient(135deg,#75472d,#dfa06a)","linear-gradient(135deg,#26372e,#9ba37b)","linear-gradient(135deg,#b16e42,#f2c38d)","linear-gradient(135deg,#ede7d9,#b9b0a0)"][i]}}><Paper sx={{ width:"72%",height:"82%",display:"grid",placeItems:"center",boxShadow:4 }}><Typography fontFamily="Georgia,serif" fontSize={25}>{x}</Typography></Paper></Box><CardContent><Typography fontWeight={800}>{x}</Typography><Typography variant="body2" color="text.secondary">Visual recipe · 12 scenes</Typography><Button fullWidth sx={{mt:1}} variant="outlined">Use template</Button></CardContent></Card>)}</Grid>
  </PlatformShell>;
}

export function CampaignsPage() {
  return <PlatformShell page="campaigns" title="Campaigns" subtitle="Personalize one experience for many guests without generating separate apps." actions={<Button variant="accent" startIcon={<Add />}>New campaign</Button>}>
    <Grid container spacing={1.75}>{["Wedding guests","Birthday friends","VIP launch"].map((x,i)=><Card key={x}><CardContent><Stack direction="row" justifyContent="space-between"><Box><Typography fontWeight={800}>{x}</Typography><Typography variant="body2" color="text.secondary" mt={.5}>Master experience · {124+i*83} recipients</Typography></Box><Chip size="small" label={i===0?"Active":"Draft"} color={i===0?"success":"primary"}/></Stack><LinearProgress value={i===0?72:18+i*12} variant="determinate" sx={{mt:2}}/><Stack direction="row" justifyContent="space-between" mt={1}><Typography variant="caption">Delivery</Typography><Typography variant="caption">{i===0?"72%":"Not started"}</Typography></Stack></CardContent></Card>)}</Grid>
  </PlatformShell>;
}

export function MediaPage() {
  return <PlatformShell page="media" title="Media" subtitle="Upload, organize and prepare media for fast experience delivery." actions={<Button variant="accent" startIcon={<Add />}>Upload media</Button>}>
    <Grid container spacing={1.75}>{Array.from({length:12},(_,i)=><Card key={i}><Box height={145} sx={{background:["linear-gradient(135deg,#382d42,#b18a9b)","linear-gradient(135deg,#172b3e,#9eb7c8)","linear-gradient(135deg,#26372e,#9ba37b)"][i%3],display:"grid",placeItems:"center",color:"#fff"}}><Image fontSize="large"/></Box><CardContent><Typography fontWeight={750}>memory-{String(i+1).padStart(2,"0")}.jpg</Typography><Typography variant="caption" color="text.secondary">2.4 MB · 1920×1280</Typography></CardContent></Card>)}</Grid>
  </PlatformShell>;
}

export function AnalyticsPage() {
  return <PlatformShell page="analytics" title="Analytics" subtitle="Understand how guests discover, explore and complete your experiences.">
    <Grid container spacing={1.75}><Grid size={{xs:12,md:8}}><Card><CardContent><Typography fontWeight={800}>Guest engagement</Typography><Typography variant="body2" color="text.secondary">Last 30 days</Typography><Box height={280} mt={2} display="flex" alignItems="end" gap={1}>{[32,48,42,65,58,74,62,88,72,94,81,100,91,76,84,96].map((h,i)=><Box key={i} flex={1} height={h+"%"} borderRadius="6px 6px 2px 2px" bgcolor={i>11?"primary.main":"grey.200"}/>)}</Box></CardContent></Card></Grid><Grid size={{xs:12,md:4}}><Stack spacing={1.75}><StatCard label="Unique guests" value="8,421" trend="+18.4%"/><StatCard label="Completion" value="76.2%" trend="+4.8%"/><StatCard label="Avg. session" value="4m 18s" trend="+32s"/></Stack></Grid></Grid>
  </PlatformShell>;
}

export function SettingsPage() {
  return <PlatformShell page="settings" title="Settings" subtitle="Control your workspace, account, localization and publishing defaults.">
    <Grid container spacing={1.75}><Grid size={{xs:12,md:8}}><Card><CardContent><Typography variant="h3">Workspace</Typography><Stack spacing={2} mt={2}><Button variant="outlined" fullWidth sx={{justifyContent:"space-between"}}>Workspace name <Typography color="text.secondary">Andrei's Studio</Typography></Button><Button variant="outlined" fullWidth sx={{justifyContent:"space-between"}}>Default locale <Typography color="text.secondary">English</Typography></Button><Button variant="outlined" fullWidth sx={{justifyContent:"space-between"}}>Public URL <Typography color="text.secondary">invite.md</Typography></Button></Stack></CardContent></Card></Grid><Grid size={{xs:12,md:4}}><Card><CardContent><Typography variant="h3">Danger zone</Typography><Alert severity="warning" sx={{mt:2}}>Destructive workspace actions require confirmation.</Alert><Button color="error" variant="outlined" fullWidth sx={{mt:2}}>Delete workspace</Button></CardContent></Card></Grid></Grid>
  </PlatformShell>;
}

export function BillingPage() {
  return <PlatformShell page="billing" title="Billing" subtitle="Manage your plan, usage and invoices.">
    <Grid container spacing={1.75}><Grid size={{xs:12,md:7}}><Card><CardContent><Stack direction="row" justifyContent="space-between"><Box><Typography variant="h3">Pro</Typography><Typography color="text.secondary">For serious creators and small teams</Typography></Box><Chip label="Current plan" color="primary"/></Stack><Divider sx={{my:2}}/><Typography fontSize={32} fontWeight={850}>€29<Typography component="span" color="text.secondary" fontSize={13}> / month</Typography></Typography><Button variant="accent" sx={{mt:2}}>Manage subscription</Button></CardContent></Card></Grid><Grid size={{xs:12,md:5}}><Card><CardContent><Typography variant="h3">Usage</Typography><LinearProgress value={38} variant="determinate" sx={{mt:2}}/><Stack direction="row" justifyContent="space-between" mt={1}><Typography variant="caption">AI generation</Typography><Typography variant="caption">38 / 100</Typography></Stack></CardContent></Card></Grid></Grid>
  </PlatformShell>;
}

export function MarketplacePage() {
  return <PlatformShell page="marketplace" title="Marketplace" subtitle="Discover visual recipes, components and experience packs.">
    <Grid container spacing={1.75}>{["Cinematic Wedding","Interactive Quiz Pack","Editorial Type","Retro Photo Booth","Animated Love Letter","Garden Ceremony"].map((x,i)=><Card key={x}><Box height={160} sx={{background:["linear-gradient(135deg,#3b2c3d,#c99da8)","linear-gradient(135deg,#302f46,#8e82c5)","linear-gradient(135deg,#eee8db,#b7a991)","linear-gradient(135deg,#25403a,#8bb09b)","linear-gradient(135deg,#4c2631,#c87587)","linear-gradient(135deg,#52633f,#c0bd85)"][i],display:"grid",placeItems:"center",color:"#fff"}}><AutoAwesome/></Box><CardContent><Typography fontWeight={800}>{x}</Typography><Typography variant="body2" color="text.secondary">Experience pack · €{i%3===0?"12":"Free"}</Typography><Button fullWidth variant="outlined" sx={{mt:1}}>View pack</Button></CardContent></Card>)}</Grid>
  </PlatformShell>;
}

export function CreatePage({ onStartAI }: { onStartAI?: () => void }) {
  return <PlatformShell page="create" title="Create" subtitle="Build a new invitation with a conversation, a template or from scratch." actions={<Button variant="outlined">Import spec</Button>}>
    <Grid container spacing={1.75}><Grid size={{xs:12,md:5}}><Card sx={{height:"100%"}}><CardContent><Stack direction="row" spacing={1} alignItems="center"><Avatar sx={{bgcolor:"primary.main"}}><AutoAwesome/></Avatar><Box><Typography fontWeight={800}>AI creation</Typography><Typography variant="body2" color="text.secondary">Tell me about the moment.</Typography></Box></Stack><Stack spacing={1} mt={3}>{["A wedding invitation","A romantic date","A birthday adventure","A surprise announcement"].map(x=><Button key={x} variant="outlined" fullWidth sx={{justifyContent:"space-between"}}>{x}<ArrowForward fontSize="small"/></Button>)}</Stack><Button variant="accent" fullWidth sx={{mt:2}} onClick={onStartAI}>Start conversation</Button></CardContent></Card></Grid><Grid size={{xs:12,md:7}}><Card><CardContent><Typography variant="h3">Your creation pipeline</Typography><Stack spacing={0} mt={2}>{["Conversation","Storyboard","Visual recipe","Interactions","Preview","Publish"].map((x,i)=><Stack key={x} direction="row" alignItems="center" spacing={1.5} py={1.2}><CheckCircle color={i<3?"success":"disabled"}/><Box flex={1}><Typography fontWeight={700}>{x}</Typography><Typography variant="caption" color="text.secondary">{i<3?"Ready":"Next step"}</Typography></Box><ArrowForward color="disabled"/></Stack>)}</Stack></CardContent></Card></Grid></Grid>
  </PlatformShell>;
}
