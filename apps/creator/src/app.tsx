import { applyExperienceSpecPatch, createExperienceSpecProposal } from "@invite/ai";
import { CreatorShell, EditorShell, inviteTheme } from "@invite/design-system";
import { ExperienceRenderer } from "@invite/invitation-components";
import { getOrderedScenes } from "@invite/invitation-runtime";
import type { ExperienceSpec, SceneSpec } from "@invite/invitation-schema";
import { getSceneDescription, getSceneDisplayType, getSceneTitle, sampleExperience } from "@invite/story";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  CssBaseline,
  FormControlLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

type AIInteraction =
  | { type: "single_choice"; id: string; question: string; options: string[] }
  | { type: "multi_choice"; id: string; question: string; options: string[] }
  | { type: "text"; id: string; question: string; placeholder?: string }
  | { type: "date"; id: string; question: string }
  | { type: "color"; id: string; question: string }
  | { type: "confirmation"; id: string; summary: string };

const interaction: AIInteraction = {
  type: "single_choice",
  id: "tone",
  question: "What feeling should the invitation have?",
  options: ["Romantic and intimate", "Elegant and formal", "Playful and surprising", "Cinematic"],
};

interface EditorProps {
  experience: ExperienceSpec;
  selected: SceneSpec;
  onSelect: (id: SceneSpec["id"]) => void;
  onChange: (next: ExperienceSpec) => void;
}

const SceneEditor = ({ experience, selected, onSelect, onChange }: EditorProps) => {
  const scenes = getOrderedScenes(experience);

  const updateSelected = (patch: Partial<SceneSpec>) => {
    onChange({
      ...experience,
      scenes: experience.scenes.map((scene) =>
        scene.id === selected.id ? { ...scene, ...patch } : scene,
      ),
    });
  };

  return (
    <EditorShell
      left={
        <Stack spacing={2}>
          <Typography variant="overline" sx={{ color: "primary.light" }}>
            Experience editor
          </Typography>
          <Typography variant="h3" sx={{ color: "#fff" }}>
            {getSceneTitle(selected)}
          </Typography>
          <Stack spacing={0.5}>
            {scenes.map((scene) => (
              <Button
                key={scene.id}
                onClick={() => onSelect(scene.id)}
                variant={scene.id === selected.id ? "contained" : "text"}
                sx={{ justifyContent: "flex-start", textTransform: "none" }}
              >
                {getSceneTitle(scene)}
              </Button>
            ))}
          </Stack>
        </Stack>
      }
      right={
        <Stack spacing={2}>
          <Typography sx={{ fontWeight: 800 }}>Scene inspector</Typography>
          <TextField
            label="Purpose"
            multiline
            minRows={3}
            value={selected.purpose}
            onChange={(event) => updateSelected({ purpose: event.target.value })}
          />
          <TextField label="Trigger" value={selected.trigger.type} disabled />
          <TextField
            label="Duration"
            type="number"
            value={selected.durationMs ?? ""}
            onChange={(event) =>
              updateSelected({
                durationMs: event.target.value ? Number(event.target.value) : undefined,
              })
            }
          />
          <Chip label={getSceneDisplayType(selected)} size="small" />
        </Stack>
      }
    >
      <Stack spacing={2} sx={{ maxWidth: 900, mx: "auto" }}>
        <Paper sx={{ p: 2, bgcolor: "#fff" }}>
          <Stack spacing={1}>
            <Typography variant="h4">{getSceneTitle(selected)}</Typography>
            <Typography color="text.secondary">{getSceneDescription(selected)}</Typography>
            <Chip
              sx={{ alignSelf: "flex-start" }}
              size="small"
              label={selected.components?.[0]?.kind ?? "custom"}
            />
          </Stack>
        </Paper>
        <Paper sx={{ overflow: "hidden", borderRadius: 3 }}>
          <ExperienceRenderer spec={experience} />
        </Paper>
      </Stack>
    </EditorShell>
  );
};

const AIConversation = ({
  brief,
  onBriefChange,
  onGenerate,
}: {
  brief: string;
  onBriefChange: (value: string) => void;
  onGenerate: () => void;
}) => {
  const [choice, setChoice] = useState(interaction.options[0]);

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5">AI creative director</Typography>
            <Chip label="Structured" color="success" size="small" />
          </Stack>
          <Typography color="text.secondary">
            AI proposes typed decisions. The creator remains in control and every applied change
            is validated before it becomes part of the ExperienceSpec.
          </Typography>
          <Typography sx={{ fontWeight: 700 }}>{interaction.question}</Typography>
          <RadioGroup value={choice} onChange={(event) => setChoice(event.target.value)}>
            {interaction.options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
          <TextField
            label="Tell the AI what you want"
            value={brief}
            onChange={(event) => onBriefChange(event.target.value)}
            multiline
            minRows={3}
          />
          <Button variant="contained" onClick={onGenerate}>
            Propose ExperienceSpec changes
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export const App = () => {
  const [experience, setExperience] = useState<ExperienceSpec>(sampleExperience);
  const scenes = useMemo(() => getOrderedScenes(experience), [experience]);
  const [selectedId, setSelectedId] = useState<SceneSpec["id"]>(scenes[0]?.id);
  const [brief, setBrief] = useState("Make this a cinematic date invitation for September 28 at sunset.");
  const [proposalState, setProposalState] = useState("Ready for a creative direction proposal.");

  const selected = scenes.find((scene) => scene.id === selectedId) ?? scenes[0];

  if (!selected) return null;

  const generateProposal = () => {
    const proposal = createExperienceSpecProposal(
      {
        invitationType: "date",
        goal: brief,
        emotionalIntent: ["cinematic", "playful", "personal"],
        visualKeywords: ["cinematic", "personal"],
        avoid: [],
        typographyDirection: "editorial",
        colorDirection: "warm neutral with gold accent",
        imageryDirection: "intimate photography",
        motionLevel: "cinematic",
        interactionLevel: "rich",
        date: "September 28",
        location: "Valea Morilor",
      },
      experience,
    );

    setExperience(applyExperienceSpecPatch(experience, proposal.proposal));
    setProposalState(
      `Applied typed proposal · ${Math.round(proposal.confidence * 100)}% confidence · review recommended`,
    );
  };

  return (
    <ThemeProvider theme={inviteTheme}>
      <CssBaseline />
      <CreatorShell title="Create">
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" gap={2}>
            <Stack spacing={0.5}>
              <Typography variant="h2">Create an experience</Typography>
              <Typography color="text.secondary">
                Conversation → DesignBrief → validated ExperienceSpec → deterministic runtime.
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Chip label={`${scenes.length} scenes`} />
              <Chip label={`${experience.interactions.length} interactions`} />
              <Chip label={`v${experience.schemaVersion}`} />
            </Stack>
          </Stack>

          <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
            <Stack sx={{ flex: 1.2 }}>
              <AIConversation brief={brief} onBriefChange={setBrief} onGenerate={generateProposal} />
            </Stack>
            <Card sx={{ flex: 0.8 }}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h5">DesignBrief</Typography>
                  <TextField label="Emotional intent" value="cinematic, playful, personal" disabled />
                  <TextField label="Visual direction" value={experience.visualLanguage} disabled />
                  <Select value={experience.design.motion} disabled fullWidth>
                    {["none", "subtle", "moderate", "expressive", "cinematic"].map((value) => (
                      <MenuItem key={value} value={value}>
                        Motion: {value}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormControlLabel control={<Checkbox checked />} label="Respect reduced motion" />
                  <Typography variant="caption" color="text.secondary">
                    {proposalState}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Stack>

          <SceneEditor
            experience={experience}
            selected={selected}
            onSelect={setSelectedId}
            onChange={setExperience}
          />
        </Stack>
      </CreatorShell>
    </ThemeProvider>
  );
};
