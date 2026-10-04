import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Creator/Controls",
  parameters: {
    docs: {
      description: {
        component:
          "Creator-platform controls. These stories are the visual contract for the MUI-based creator surface.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryActions: Story = {
  render: () => (
    <Stack spacing={2} sx={{ minWidth: 320 }}>
      <Typography variant="h6">Create invitation</Typography>
      <Button variant="contained">Generate experience</Button>
      <Button variant="outlined">Preview as guest</Button>
      <Button variant="text">Save draft</Button>
    </Stack>
  ),
};

export const ChoiceInput: Story = {
  render: () => (
    <Stack spacing={2} sx={{ minWidth: 360 }}>
      <Autocomplete
        multiple
        options={["Romantic", "Elegant", "Playful", "Cinematic", "Minimal"]}
        defaultValue={["Romantic"]}

        renderInput={(params) => <TextField {...params} label="Visual direction" />}
      />
      <TextField
        label="Describe the feeling"
        multiline
        minRows={3}
        placeholder="Warm, intimate and cinematic..."
      />
    </Stack>
  ),
};
