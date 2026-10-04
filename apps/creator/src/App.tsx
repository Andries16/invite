import { inviteTheme } from "@invite/design-system";
import { getOrderedScenes } from "@invite/invitation-runtime";
import type { ExperienceSpec, SceneSpec } from "@invite/invitation-schema";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";

const experience: ExperienceSpec = {
  schemaVersion: "1.0",
  id: "date-surprise" as ExperienceSpec["id"],
  invitationId: "invitation-demo",
  visualLanguage: "cinematic",
  design: { theme: { background: "#fffaf3", surface: "#fff", text: "#241f1b", mutedText: "#756c64", primary: "#6f4b63", secondary: "#a97891", accent: "#d7a85b", border: "#ded5cd" }, motion: "moderate" },
  scenes: [
    { id: "opening" as ExperienceSpec["scenes"][number]["id"], order: 0, purpose: "Opening", trigger: { type: "load" }, content: { title: "A little surprise" }, components: [{ kind: "hero", content: { title: "A little surprise" } }], mediaIds: [], interactionIds: [] },
    { id: "story" as ExperienceSpec["scenes"][number]["id"], order: 1, purpose: "Story", trigger: { type: "after", seconds: 8 }, content: { title: "One more memory" }, components: [{ kind: "text", content: { title: "One more memory" } }], mediaIds: [], interactionIds: [] },
    { id: "question" as ExperienceSpec["scenes"][number]["id"], order: 2, purpose: "Interaction", trigger: { type: "load" }, content: { title: "The question" }, components: [{ kind: "quiz", content: { question: "Where should the evening begin?", choices: ["At sunset", "After dark"] } }], mediaIds: [], interactionIds: ["mood-quiz"] },
    { id: "reveal" as ExperienceSpec["scenes"][number]["id"], order: 3, purpose: "Reveal", trigger: { type: "interaction-complete", interactionId: "mood-quiz" }, content: { title: "The reveal" }, components: [{ kind: "reveal", content: { title: "Valea Morilor" } }], mediaIds: [], interactionIds: [] },
  ],
  interactions: [{ type: "quiz", id: "mood-quiz", choices: ["At sunset", "After dark"] }],
  variables: [],
};

function Editor({ scenes, selected, onSelect }: { scenes: SceneSpec[]; selected: SceneSpec; onSelect: (id: SceneSpec["id"]) => void }) {
  const [purpose, setPurpose] = useState(selected.purpose);
  return <Stack spacing={2} sx={{ maxWidth: 1100, mx: "auto", p: 4 }}>
    <Typography variant="overline" color="primary">Experience Editor</Typography>
    <Typography variant="h2">A little surprise</Typography>
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Card><CardContent><Stack spacing={1}>{scenes.map((scene) => <Button key={scene.id} variant={scene.id === selected.id ? "contained" : "text"} onClick={() => onSelect(scene.id)}>{scene.purpose}</Button>)}</Stack></CardContent></Card>
      <Card sx={{ flex: 1 }}><CardContent><Typography variant="h3">{String(selected.content.title ?? selected.purpose)}</Typography><Typography color="text.secondary">{selected.components?.[0]?.kind}</Typography></CardContent></Card>
      <Card><CardContent><Stack spacing={2}><Typography fontWeight={700}>Scene inspector</Typography><TextField label="Purpose" value={purpose} onChange={(event) => setPurpose(event.target.value)} /><TextField label="Trigger" value={selected.trigger.type} disabled /></Stack></CardContent></Card>
    </Stack>
  </Stack>;
}

export function App() {
  const scenes = useMemo(() => getOrderedScenes(experience), []);
  const [selectedId, setSelectedId] = useState(scenes[0]?.id);
  const selected = scenes.find((scene) => scene.id === selectedId) ?? scenes[0];
  if (!selected) return null;
  return <ThemeProvider theme={inviteTheme}><CssBaseline /><Editor scenes={scenes} selected={selected} onSelect={setSelectedId} /></ThemeProvider>;
}
