import type { SceneComponent } from "@invite/invitation-schema";
import { componentTitle, getString } from "./component-utils";
import { audioStyle, bodyStyle, headingStyle, sectionStyle } from "./renderer-styles";

export interface AudioComponentProps {
  component: SceneComponent;
}

export const AudioComponent = ({ component }: AudioComponentProps) => {
  const src = getString(component.content.src);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{componentTitle(component)}</h2>
      {src ? (
        <audio controls preload="metadata" src={src} style={audioStyle} />
      ) : (
        <p style={bodyStyle}>Audio is not configured yet.</p>
      )}
      <p style={bodyStyle}>{getString(component.content.caption)}</p>
    </section>
  );
};
