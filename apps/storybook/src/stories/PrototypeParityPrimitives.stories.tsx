import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, within } from "@storybook/test";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { AutoAwesome, PlayArrow } from "@mui/icons-material";
import { CreatorShell, EditorShell, GuestFrame, FlowStatus, PrototypeSection, PrototypeTable, SceneRail } from "@invite/design-system";

const meta={title:"Design System/Prototype Contract",parameters:{layout:"fullscreen"}} satisfies Meta;
export default meta; type Story=StoryObj<typeof meta>;

export const CreatorNavigation:Story={play:async({canvasElement})=>{const canvas=within(canvasElement);await expect(canvas.getByText("Experiences")).toBeInTheDocument();await expect(canvas.getByText("invite.md")).toBeInTheDocument();},render:()=> <CreatorShell title="Experiences"><PrototypeSection title="Experience library"><Typography color="text.secondary">Navigation, workspace identity, plan usage and top actions are provided by the shared creator shell.</Typography></PrototypeSection></CreatorShell>};

export const EditorComposition:Story={render:()=> <EditorShell><Stack spacing={2}><Stack direction="row" justifyContent="space-between"><Typography variant="h2" color="#fff">A little surprise</Typography><Button variant="contained" startIcon={<PlayArrow/>}>Preview</Button></Stack><GuestFrame><Box><Typography variant="overline">INVITE FILM</Typography><Typography fontSize={60} fontWeight={900}>For you,<br/>always.</Typography></Box></GuestFrame></Stack></EditorShell>};

export const SceneTimeline:Story={play:async({canvasElement})=>{const canvas=within(canvasElement);await expect(canvas.getByText("Storyboard scenes")).toBeInTheDocument();await expect(canvas.getByText("The question")).toBeInTheDocument();},render:()=> <Card sx={{p:3,width:"min(500px,92vw)"}}><PrototypeSection title="Storyboard scenes"><SceneRail scenes={["Opening","Memory beat","The question","The reveal","Location","RSVP","Finale"]}/></PrototypeSection></Card>};

export const InteractionStatuses:Story={play:async({canvasElement})=>{const canvas=within(canvasElement);await expect(canvas.getByText("Needs attention")).toBeInTheDocument();await expect(canvas.getByText("Live")).toBeInTheDocument();},render:()=> <Stack spacing={1} width={360}><FlowStatus label="RSVP" status="live"/><FlowStatus label="Quiz" status="ready"/><FlowStatus label="Campaign" status="draft"/><FlowStatus label="Custom domain" status="attention"/></Stack>};

export const DataTable:Story={render:()=> <PrototypeTable headers={["Guest","Delivery","RSVP","Last activity"]} rows={[["Maria","Delivered","Yes","2 min ago"],["Victor","Delivered","Pending","18 min ago"],["Daniel","Pending","—","—"]]}/>};

export const AIAction:Story={render:()=> <Button variant="contained" startIcon={<AutoAwesome/>}>Create with AI</Button>};
