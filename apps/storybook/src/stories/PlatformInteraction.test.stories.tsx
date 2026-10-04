import { Button, Stack, TextField, Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";
import * as React from "react";

const meta = {
  title: "Platform/Tests/Interactions",
  parameters: { layout: "centered" },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const FormSubmission: Story = {
  render: () => <TestForm />,
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText("Guest name"), "Maria");
    await userEvent.click(canvas.getByRole("button", { name: "Continue" }));
    await expect(canvas.getByText("Thanks, Maria")).toBeInTheDocument();
  },
};

export const KeyboardFlow: Story = {
  render: () => (
    <Stack spacing={2} sx={{ width: 360 }}>
      <Typography variant="h3">Keyboard test</Typography>
      <TextField label="First field" />
      <TextField label="Second field" />
      <Button variant="contained">Continue</Button>
    </Stack>
  ),
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("First field"));
    await userEvent.tab();
    await expect(canvas.getByLabelText("Second field")).toHaveFocus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", { name: "Continue" })).toHaveFocus();
  },
};

function TestForm() {
  const [name, setName] = React.useState("");
  const onSubmit = fn();
  return (
    <Stack spacing={2} sx={{ width: 360 }}>
      <TextField label="Guest name" value={name} onChange={(e) => setName(e.target.value)} />
      <Button variant="contained" onClick={() => onSubmit()}>
        Continue
      </Button>
      {name && <Typography>Thanks, {name}</Typography>}
    </Stack>
  );
}
