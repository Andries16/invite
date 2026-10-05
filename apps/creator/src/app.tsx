import { applyExperienceSpecPatch, createExperienceSpecProposal } from "@invite/ai";
import { inviteTheme } from "@invite/design-system";
import { ExperienceRenderer } from "@invite/invitation-components";
import { getOrderedScenes } from "@invite/invitation-runtime";
import type { ExperienceSpec, SceneSpec } from "@invite/invitation-schema";
import {
  getSceneDescription,
  getSceneDisplayType,
  getSceneTitle,
  sampleExperience,
} from "@invite/story";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";

interface EditorProps {
  experience: ExperienceSpec;
  selected: SceneSpec;
  onSelect: (id: SceneSpec["id"]) => void;
  onChange: (next: ExperienceSpec) => void;
}

const Editor = ({ experience, selected, onSelect, onChange }: EditorProps) => {
  const scenes = getOrderedScenes(experience);

  return (
    <Stack spacing={2} sx={{ maxWidth: 1100, mx: "auto", p: 4 }}>
      <Typography variant="overline" color="primary">
        Experience Editor
      </Typography>
      <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h2">{getSceneTitle(selected)}</Typography>
        <Chip
          label={scenes.length + " scenes · " + experience.interactions.length + " interactions"}
        />
      </Stack>
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
        <Card>
          <CardContent>
            <Stack spacing={1}>
              {scenes.map((scene) => (
                <Button
                  key={scene.id}
                  variant={scene.id === selected.id ? "contained" : "text"}
                  onClick={() => onSelect(scene.id)}
                >
                  {getSceneTitle(scene)}
                </Button>
              ))}
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h3">{getSceneTitle(selected)}</Typography>
            <Typography color="text.secondary">{getSceneDisplayType(selected)}</Typography>
            <Typography sx={{ mt: 2 }} color="text.secondary">
              {getSceneDescription(selected)}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography sx={{ fontWeight: 700 }}>Scene inspector</Typography>
              <TextField
                label="Purpose"
                value={selected.purpose}
                onChange={(event) =>
                  onChange({
                    ...experience,
                    scenes: experience.scenes.map((scene) =>
                      scene.id === selected.id ? { ...scene, purpose: event.target.value } : scene,
                    ),
                  })
                }
              />
              <TextField label="Trigger" value={selected.trigger.type} disabled />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export const App = () => {
  const [experience, setExperience] = useState<ExperienceSpec>(sampleExperience);
  const scenes = useMemo(() => getOrderedScenes(experience), [experience]);
  const [selectedId, setSelectedId] = useState(scenes[0]?.id);
  const selected = scenes.find((scene) => scene.id === selectedId) ?? scenes[0];
  const [brief, setBrief] = useState(
    "Make this a cinematic date invitation for September 28 at sunset.",
  );
  const [proposalState, setProposalState] = useState("");

  if (!selected) return null;

  const generateProposal = () => {
    const proposal = createExperienceSpecProposal(
      {
        invitationType: "date",
        goal: brief,
        tone: ["cinematic", "playful", "personal"],
        date: "September 28",
        location: "Valea Morilor",
      },
      experience,
    );

    setExperience(applyExperienceSpecPatch(experience, proposal.proposal));
    setProposalState(
      "AI proposal applied · " +
        Math.round(proposal.confidence * 100) +
        "% confidence · review recommended",
    );
  };

  return (
    <ThemeProvider theme={inviteTheme}>
      <CssBaseline />
      <Stack spacing={2} sx={{ maxWidth: 1100, mx: "auto", p: 4 }}>
        <Card>
          <CardContent>
            <Stack spacing={1.5}>
              <Typography variant="h3">Creative director</Typography>
              <TextField
                fullWidth
                label="Brief"
                value={brief}
                onChange={(event) => setBrief(event.target.value)}
              />
              <Button variant="contained" onClick={generateProposal}>
                Generate AI proposal
              </Button>
              {proposalState && <Typography color="success.main">{proposalState}</Typography>}
            </Stack>
          </CardContent>
        </Card>
        <Editor
          experience={experience}
          selected={selected}
          onSelect={setSelectedId}
          onChange={setExperience}
        />
        <Card>
          <CardContent>
            <Stack spacing={1.5}>
              <Typography variant="h4">Guest preview</Typography>
              <Typography color="text.secondary">
                The creator preview uses the same canonical ExperienceSpec and renderer as the
                public runtime.
              </Typography>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <ExperienceRenderer spec={experience} />
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  );
};
