import type { SceneComponent } from "@invite/invitation-schema";
import { useState } from "react";
import { componentTitle, getString } from "./component-utils";
import { bodyStyle, guestbookEntriesStyle, guestbookInputStyle, guestbookLabelStyle, headingStyle, primaryButtonStyle, sectionStyle } from "./renderer-styles";

export interface GuestbookComponentProps { component: SceneComponent; }

export const GuestbookComponent = ({ component }: GuestbookComponentProps) => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState<string[]>([]);
  const prompt = getString(component.content.prompt, "Leave a message");
  return <section style={sectionStyle}><h2 style={headingStyle}>{componentTitle(component)}</h2><label style={guestbookLabelStyle}><span>{prompt}</span><textarea value={message} onChange={(event) => setMessage(event.target.value)} rows={4} maxLength={500} style={guestbookInputStyle} placeholder="Write something memorable..." /></label><button type="button" style={primaryButtonStyle} disabled={!message.trim()} onClick={() => { const next = message.trim(); if (!next) return; setSubmitted((current) => [...current, next]); setMessage(""); }}>Sign the guestbook</button>{submitted.length > 0 && <div style={guestbookEntriesStyle}>{submitted.map((entry, index) => <p key={index} style={bodyStyle}>{entry}</p>)}</div>}</section>;
};
