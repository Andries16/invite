export type InviteStatus =
  "live" | "draft" | "scheduled" | "attention" | "ready" | "beta" | "planned";
import { Chip } from "@mui/material";

const statusMap: Record<
  InviteStatus,
  { color: "success" | "warning" | "default" | "error" | "info"; label: string }
> = {
  live: { color: "success", label: "Live" },
  draft: { color: "default", label: "Draft" },
  scheduled: { color: "info", label: "Scheduled" },
  attention: { color: "warning", label: "Needs attention" },
  ready: { color: "success", label: "Ready" },
  beta: { color: "warning", label: "Beta" },
  planned: { color: "default", label: "Planned" },
};

export const StatusChip = ({ status, label }: { status: InviteStatus; label?: string }) => {
  const s = statusMap[status];
  return <Chip size="small" label={label ?? s.label} sx={{ color: s.color }} />;
};
