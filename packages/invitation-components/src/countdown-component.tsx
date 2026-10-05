import type { SceneComponent } from "@invite/invitation-schema";
import { useEffect, useState } from "react";
import { componentTitle, getString } from "./component-utils";
import { countdownGridStyle, countdownItemStyle, headingStyle, sectionStyle } from "./renderer-styles";

const getCountdownParts = (target: string): Record<string, number> => {
  const targetTime = Date.parse(target);
  const distance = Number.isNaN(targetTime) ? 0 : Math.max(0, targetTime - Date.now());
  const totalSeconds = Math.floor(distance / 1000);
  return { days: Math.floor(totalSeconds / 86400), hours: Math.floor((totalSeconds % 86400) / 3600), minutes: Math.floor((totalSeconds % 3600) / 60), seconds: totalSeconds % 60 };
};

export interface CountdownComponentProps { component: SceneComponent; }

export const CountdownComponent = ({ component }: CountdownComponentProps) => {
  const target = getString(component.content.target);
  const [remaining, setRemaining] = useState(() => getCountdownParts(target));
  useEffect(() => { const timer = window.setInterval(() => setRemaining(getCountdownParts(target)), 1000); return () => window.clearInterval(timer); }, [target]);
  return <section style={sectionStyle} aria-live="polite"><h2 style={headingStyle}>{componentTitle(component)}</h2><div style={countdownGridStyle}>{Object.entries(remaining).map(([unit, value]) => <div key={unit} style={countdownItemStyle}><strong>{value}</strong><span>{unit}</span></div>)}</div></section>;
};
