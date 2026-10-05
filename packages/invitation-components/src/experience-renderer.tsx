import { getNextScene, getOrderedScenes, isExperienceSpec, validateExperienceSpec } from "@invite/invitation-runtime";
import type { ExperienceSpec } from "@invite/invitation-schema";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { SceneView } from "./scene-view";
import { errorStyle, experienceStyle, runtimeStyle, sceneDotStyle, sceneNavigationStyle, topBarStyle } from "./renderer-styles";

export interface ExperienceRendererProps {
  spec: unknown;
}

const matchesClickTrigger = (trigger: ExperienceSpec["scenes"][number]["trigger"]): boolean =>
  trigger.type === "click" && (trigger.target === "continue" || trigger.target === "next");

export const ExperienceRenderer = ({ spec }: ExperienceRendererProps) => {
  const validation = useMemo(() => validateExperienceSpec(spec), [spec]);
  const validSpec = validation.valid && isExperienceSpec(spec) ? spec : undefined;
  const scenes = useMemo(() => (validSpec ? getOrderedScenes(validSpec) : []), [validSpec]);
  const [currentSceneId, setCurrentSceneId] = useState<ExperienceSpec["scenes"][number]["id"] | null>(
    scenes[0]?.id ?? null,
  );
  const [completedInteractions, setCompletedInteractions] = useState<Set<string>>(() => new Set());
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const currentScene = scenes.find((scene) => scene.id === currentSceneId) ?? scenes[0];
  const nextScene = currentScene && validSpec ? getNextScene(validSpec, currentScene.id) : undefined;

  useEffect(() => {
    if (scenes.length > 0 && !scenes.some((scene) => scene.id === currentSceneId)) {
      setCurrentSceneId(scenes[0].id);
    }
  }, [scenes, currentSceneId]);

  useEffect(() => {
    if (!validSpec || !currentScene || !nextScene) return;
    if (nextScene.trigger.type !== "load") return;
    setCurrentSceneId(nextScene.id);
  }, [currentScene, nextScene, validSpec]);

  useEffect(() => {
    if (!validSpec || !currentScene || !nextScene || nextScene.trigger.type !== "after") return;
    const timer = window.setTimeout(
      () => setCurrentSceneId(nextScene.id),
      Math.max(0, nextScene.trigger.seconds * 1000),
    );
    return () => window.clearTimeout(timer);
  }, [currentScene, nextScene, validSpec]);

  useEffect(() => {
    if (!validSpec || !currentScene || !nextScene || nextScene.trigger.type !== "scroll") return;
    const threshold = Math.min(1, Math.max(0, nextScene.trigger.threshold ?? 0.5));
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll <= 0 ? 1 : window.scrollY / maxScroll;
      if (progress >= threshold) setCurrentSceneId(nextScene.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentScene, nextScene, validSpec]);

  const completedRequiredInteraction =
    nextScene?.trigger.type === "interaction-complete" &&
    completedInteractions.has(nextScene.trigger.interactionId);

  useEffect(() => {
    if (completedRequiredInteraction && nextScene) setCurrentSceneId(nextScene.id);
  }, [completedRequiredInteraction, nextScene]);

  const canContinue = Boolean(nextScene && matchesClickTrigger(nextScene.trigger));

  if (!validation.valid || !validSpec) {
    return (
      <main style={errorStyle}>
        <h1>Experience unavailable</h1>
        <p>This invitation has an invalid experience definition.</p>
        <ul>
          {validation.issues.map((issue) => (
            <li key={issue.path + issue.message}>
              {issue.path}: {issue.message}
            </li>
          ))}
        </ul>
      </main>
    );
  }

  if (!currentScene) return <main style={errorStyle}>No scenes are available.</main>;

  const rootStyle: CSSProperties = {
    ...runtimeStyle,
    background: validSpec.design.theme.background,
    color: validSpec.design.theme.text,
    fontFamily: validSpec.design.theme.bodyFont ?? "system-ui, sans-serif",
    "--invite-primary": validSpec.design.theme.primary,
  };

  return (
    <main style={rootStyle}>
      <style>{"@keyframes invite-fade-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }"}</style>
      <div style={experienceStyle}>
        <header style={topBarStyle}>
          <span>{validSpec.visualLanguage}</span>
          <span>
            {scenes.indexOf(currentScene) + 1} / {scenes.length}
          </span>
        </header>
        <SceneView
          key={currentScene.id}
          scene={currentScene}
          reducedMotion={reducedMotion}
          canContinue={canContinue}
          onNext={() => {
            if (nextScene && matchesClickTrigger(nextScene.trigger)) {
              setCurrentSceneId(nextScene.id);
            }
          }}
          onInteractionComplete={(interactionId) =>
            setCompletedInteractions((current) => new Set(current).add(interactionId))
          }
        />
        <nav aria-label="Experience progress" style={sceneNavigationStyle}>
          {scenes.map((scene) => (
            <span
              key={scene.id}
              aria-current={scene.id === currentScene.id ? "step" : undefined}
              aria-label={"Scene " + (scene.order + 1)}
              role="img"
              style={{
                ...sceneDotStyle,
                background:
                  scene.id === currentScene.id
                    ? validSpec.design.theme.primary
                    : validSpec.design.theme.border,
              }}
            />
          ))}
        </nav>
      </div>
    </main>
  );
};
