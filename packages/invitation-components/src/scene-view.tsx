import type { SceneSpec } from "@invite/invitation-schema";
import { SceneComponentView } from "./scene-component-view";
import { secondaryButtonStyle, sceneHeaderStyle, sceneStyle } from "./renderer-styles";

export interface SceneViewProps {
  scene: SceneSpec;
  reducedMotion: boolean;
  canContinue: boolean;
  onNext: () => void;
  onInteractionComplete: (interactionId: string) => void;
}

export const SceneView = ({
  scene,
  reducedMotion,
  canContinue,
  onNext,
  onInteractionComplete,
}: SceneViewProps) => {
  const components = scene.components ?? [
    { kind: "text" as const, content: scene.content },
  ];
  const interactionIds = scene.interactionIds;

  return (
    <article
      style={{
        ...sceneStyle,
        animation: reducedMotion ? undefined : "invite-fade-in 700ms ease",
      }}
    >
      <div style={sceneHeaderStyle}>
        <span>{String(scene.order + 1).padStart(2, "0")}</span>
        <span>{scene.purpose}</span>
      </div>
      {components.map((component, index) => (
        <SceneComponentView
          key={component.kind + "-" + index}
          component={component}
          reducedMotion={reducedMotion}
          onInteractionComplete={() =>
            interactionIds.forEach(onInteractionComplete)
          }
        />
      ))}
      {canContinue && (
        <button type="button" style={secondaryButtonStyle} onClick={onNext}>
          Continue
        </button>
      )}
    </article>
  );
};
