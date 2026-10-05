import type { SceneComponent } from "@invite/invitation-schema";
import { useState } from "react";
import { getString } from "./component-utils";
import {
  bodyStyle,
  eyebrowStyle,
  heroTitleStyle,
  primaryButtonStyle,
  sectionStyle,
} from "./renderer-styles";

export interface RevealComponentProps {
  component: SceneComponent;
  onComplete?: () => void;
}

export const RevealComponent = ({ component, onComplete }: RevealComponentProps) => {
  const [revealed, setRevealed] = useState(false);
  const content = component.content;

  return (
    <section style={sectionStyle}>
      {!revealed ? (
        <button
          type="button"
          style={primaryButtonStyle}
          onClick={() => {
            setRevealed(true);
            onComplete?.();
          }}
        >
          {getString(content.prompt, "Reveal the surprise")}
        </button>
      ) : (
        <>
          <p style={eyebrowStyle}>The reveal</p>
          <h2 style={heroTitleStyle}>{getString(content.title, "Surprise")}</h2>
          <p style={bodyStyle}>{getString(content.message, getString(content.text))}</p>
        </>
      )}
    </section>
  );
};
