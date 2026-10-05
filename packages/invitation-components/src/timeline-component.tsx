import type { SceneComponent } from "@invite/invitation-schema";
import { componentTitle, getString } from "./component-utils";
import { bodyStyle, headingStyle, sectionStyle, timelineItemStyle, timelineStyle } from "./renderer-styles";

export interface TimelineComponentProps { component: SceneComponent; }

export const TimelineComponent = ({ component }: TimelineComponentProps) => {
  const items = Array.isArray(component.content.items) ? component.content.items : [];
  return <section style={sectionStyle}><h2 style={headingStyle}>{componentTitle(component)}</h2><ol style={timelineStyle}>{items.map((item, index) => { const value = item && typeof item === "object" ? item : {}; const record = value as Record<string, unknown>; return <li key={String(record.id ?? index)} style={timelineItemStyle}><strong>{getString(record.title, `Moment ${index + 1}`)}</strong><span style={bodyStyle}>{getString(record.description, getString(record.text))}</span>{getString(record.date) && <small>{getString(record.date)}</small>}</li>; })}</ol></section>;
};
