import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExperienceRenderer } from "./ExperienceRenderer";
import { sampleExperience } from "./sample-experience";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExperienceRenderer spec={sampleExperience} />
  </StrictMode>,
);
