import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ExperienceRenderer } from "@invite/invitation-components";
import { sampleExperience } from "@invite/story";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ExperienceRenderer spec={sampleExperience} />
  </StrictMode>,
);
