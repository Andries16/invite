import { getNextScene, getOrderedScenes, validateExperienceSpec } from "@invite/invitation-runtime";
import type { ExperienceSpec } from "@invite/invitation-schema";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import { SceneView } from "./scene-view";
import { errorStyle, experienceStyle, runtimeStyle, sceneDotStyle, sceneNavigationStyle, topBarStyle } from "./renderer-styles";

export interface ExperienceRendererProps { spec: ExperienceSpec; }

const matchesClickTrigger = (trigger: ExperienceSpec["scenes"][number]["trigger"]): boolean =>
  trigger.type === "click" && (trigger.target === "continue" || trigger.target === "next");

export const ExperienceRenderer = ({ spec }: ExperienceRendererProps) => {
  const validation = useMemo(() => validateExperienceSpec(spec), [spec]);
  const scenes = useMemo(() => validation.valid ? getOrderedScenes(spec) : [], [spec, validation.valid]);
  const [currentSceneId, setCurrentSceneId] = useState<ExperienceSpec["scenes"][number]["id"] | null>(scenes[0]?.id ?? null);
  const [completedInteractions, setCompletedInteractions] = useState<Set<string>>(() => new Set());
  const [reducedMotion] = useState(() => typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false);
  const currentScene = scenes.find((scene) => scene.id === currentSceneId) ?? scenes[0];
  const nextScene = currentScene ? getNextScene(spec, currentScene.id) : undefined;

  useEffect(() => { if (scenes.length > 0 && !scenes.some((scene) => scene.id === currentSceneId)) setCurrentSceneId(scenes[0].id); }, [scenes, currentSceneId]);

  const advance = () => { if (nextScene) setCurrentSceneId(nextScene.id); };

  useEffect(() => {
    if (!currentScene || !nextScene) return;
    if (currentScene.durationMs === undefined) return;
    const timer = window.setTimeout(advance, currentScene.durationMs);
    return () => window.clearTimeout(timer);
  }, [currentScene, nextScene]);

  useEffect(() => {
    if (!currentScene || !nextScene || nextScene.trigger.type !== "scroll") return;
    const threshold = Math.min(1, Math.max(0, nextScene.trigger.threshold ?? 0.5));
    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll <= 0 ? 1 : window.scrollY / maxScroll;
      if (progress >= threshold) advance();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentScene, nextScene]);

  const canContinue = Boolean(nextScene && (nextScene.trigger.type === "load" || matchesClickTrigger(nextScene.trigger)));
  const completedRequiredInteraction = nextScene?.trigger.type === "interaction-complete" && completedInteractions.has(nextScene.trigger.interactionId);

  useEffect(() => {
    if (completedRequiredInteraction) advance();
  }, [completedRequiredInteraction, nextScene]);

  if (!validation.valid) return <main style={errorStyle}><h1>Experience unavailable</h1><p>This invitation has an invalid experience definition.</p><ul>{validation.issues.map((issue) => <li key={issue.path + issue.message}>{issue.path}: {issue.message}</li>)}</ul></main>;
  if (!currentScene) return <main style={errorStyle}>No scenes are available.</main>;

  return <main style={{ ...runtimeStyle, background: spec.design.theme.background, color: spec.design.theme.text, fontFamily: spec.design.theme.bodyFont ?? "system-ui, sans-serif", "--invite-primary": spec.design.theme.primary } as CSSProperties}><style>{"@keyframes invite-fade-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }"}</style><div style={experienceStyle}><header style={topBarStyle}><span>{spec.visualLanguage}</span><span>{scenes.indexOf(currentScene) + 1} / {scenes.length}</span></header><SceneView key={currentScene.id} scene={currentScene} reducedMotion={reducedMotion} canContinue={canContinue} onNext={advance} onInteractionComplete={(interactionId) => setCompletedInteractions((current) => new Set(current).add(interactionId))} /><nav aria-label="Experience scenes" style={sceneNavigationStyle}>{scenes.map((scene) => <button key={scene.id} type="button" aria-label={"Go to scene " + (scene.order + 1)} aria-current={scene.id === currentScene.id ? "step" : undefined} onClick={() => setCurrentSceneId(scene.id)} style={{ ...sceneDotStyle, background: scene.id === currentScene.id ? spec.design.theme.primary : spec.design.theme.border }} />)}</nav></div></main>;
};
