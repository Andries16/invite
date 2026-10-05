import type { SceneComponent } from "@invite/invitation-schema";
import { useState } from "react";
import { componentTitle, getString, getStringList } from "./component-utils";
import {
  bodyStyle,
  choiceGridStyle,
  headingStyle,
  secondaryButtonStyle,
  sectionStyle,
  selectedButtonStyle,
} from "./renderer-styles";

export interface ChoiceComponentProps {
  component: SceneComponent;
  label: string;
  onComplete?: () => void;
}

export const ChoiceComponent = ({ component, label, onComplete }: ChoiceComponentProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const configuredChoices = getStringList(component.content.choices);
  const choices =
    configuredChoices.length > 0
      ? configuredChoices
      : component.kind === "rsvp"
        ? ["Yes, I’ll be there", "I can’t make it"]
        : [];

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>
        {getString(component.content.question, componentTitle(component) || label)}
      </h2>
      <div style={choiceGridStyle}>
        {choices.map((choice) => (
          <button
            key={choice}
            type="button"
            aria-pressed={selected === choice}
            style={selected === choice ? selectedButtonStyle : secondaryButtonStyle}
            onClick={() => {
              setSelected(choice);
              onComplete?.();
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      {selected && <p style={bodyStyle}>Selected: {selected}</p>}
    </section>
  );
};
