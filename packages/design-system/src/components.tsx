import * as React from "react";
import { Box, Button, Card, CardContent, Chip, LinearProgress, Stack, Typography } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

export type InviteStatus = "live" | "draft" | "scheduled" | "attention" | "ready" | "beta" | "planned";

export function PageHeader({ eyebrow, title, body, actions, sx }: { eyebrow?: React.ReactNode; title: React.ReactNode; body?: React.ReactNode; actions?: React.ReactNode; sx?: SxProps<Theme> }) {
  return <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "flex-end" }} gap={2} sx={sx}>
    <Box><Typography variant="overline" color="primary" fontWeight={800}>{eyebrow}</Typography><Typography variant="h1">{title}</Typography>{body && <Typography color="text.secondary" maxWidth={760}>{body}</Typography>}</Box>
    {actions && <Stack direction="row" spacing={1} flexWrap="wrap">{actions}</Stack>}
  </Stack>;
}

export function SectionHeader({ title, body, action }: { title: React.ReactNode; body?: React.ReactNode; action?: React.ReactNode }) {
  return <Stack direction="row" justifyContent="space-between" alignItems="flex-end" gap={2} sx={{ mt: 4, mb: 1.5 }}><Box><Typography variant="h3">{title}</Typography>{body && <Typography variant="body2" color="text.secondary">{body}</Typography>}</Box>{action}</Stack>;
}

export function ResponsiveGrid({ children, columns = 3 }: { children: React.ReactNode; columns?: number }) {
  return <Box display="grid" gap={2} sx={{ gridTemplateColumns: { xs: "1fr", sm: "repeat(2,minmax(0,1fr))", lg: `repeat(${columns},minmax(0,1fr))` } }}>{children}</Box>;
}

export function StatCard({ label, value, delta, progress }: { label: React.ReactNode; value: React.ReactNode; delta?: React.ReactNode; progress?: number }) {
  return <Card><CardContent><Typography color="text.secondary">{label}</Typography><Typography variant="h2">{value}</Typography>{delta && <Typography color="success.main">{delta}</Typography>}{progress !== undefined && <LinearProgress value={progress} variant="determinate" sx={{ mt: 1.5 }}/>}</CardContent></Card>;
}

const statusMap: Record<InviteStatus,{label:string;color:"success"|"primary"|"warning"|"error"|"default"}> = {
  live:{label:"Live",color:"success"},draft:{label:"Draft",color:"primary"},scheduled:{label:"Scheduled",color:"warning"},attention:{label:"Needs attention",color:"error"},ready:{label:"Ready",color:"success"},beta:{label:"Beta",color:"warning"},planned:{label:"Planned",color:"default"}
};
export function StatusChip({ status, label }: { status: InviteStatus; label?: string }) { const s=statusMap[status]; return <Chip size="small" label={label ?? s.label} color={s.color} />; }

export function MediaPreview({ title, subtitle, height = 180 }: { title: React.ReactNode; subtitle?: React.ReactNode; height?: number }) {
  return <Box height={height} p={2} display="flex" alignItems="flex-end" color="#fff" sx={{ background: "linear-gradient(135deg,#28252d,#86677f)" }}><Box><Typography fontWeight={800} color="inherit">{title}</Typography>{subtitle && <Typography variant="caption" color="inherit">{subtitle}</Typography>}</Box></Box>;
}

export function ExperienceCard({ title, status = "draft", meta = "6 scenes · 3 interactions", onOpen }: { title: React.ReactNode; status?: InviteStatus; meta?: React.ReactNode; onOpen?: () => void }) {
  return <Card><MediaPreview title={title} subtitle={meta}/><CardContent><Stack direction="row" justifyContent="space-between" alignItems="center"><Box><Typography fontWeight={800}>{title}</Typography><Typography variant="body2" color="text.secondary">{meta}</Typography></Box><StatusChip status={status}/></Stack><Button size="small" sx={{ mt: 1 }} onClick={onOpen}>Continue</Button></CardContent></Card>;
}

export function RecipeCard({ title, description, tags, action = "Use recipe" }: { title: React.ReactNode; description: React.ReactNode; tags?: React.ReactNode; action?: React.ReactNode }) {
  return <Card><MediaPreview title={title}/><CardContent><Typography variant="h3">{title}</Typography><Typography variant="body2" color="text.secondary">{description}</Typography>{tags && <Box mt={1}>{tags}</Box>}<Button size="small" variant="contained" sx={{ mt: 1 }}>{action}</Button></CardContent></Card>;
}

export function PreviewFrame({ children, mode = "phone" }: { children: React.ReactNode; mode?: "phone" | "desktop" }) {
  return <Box mx="auto" maxWidth={mode === "phone" ? 430 : 980} minHeight={mode === "phone" ? 600 : 520} borderRadius={mode === "phone" ? 5 : 3} display="grid" placeItems="center" overflow="hidden" color="#fff" textAlign="center" sx={{ background: "linear-gradient(135deg,#161419,#594052)" }}>{children}</Box>;
}

export function MetricGrid({ items, columns = 4 }: { items: Array<{ label: React.ReactNode; value: React.ReactNode; delta?: React.ReactNode }>; columns?: number }) {
  return <ResponsiveGrid columns={columns}>{items.map((item) => <StatCard key={String(item.label)} {...item}/>)}</ResponsiveGrid>;
}
