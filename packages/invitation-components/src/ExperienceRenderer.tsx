import type { ExperienceComponentKind, ExperienceSpec, SceneComponent, SceneSpec } from "@invite/invitation-schema";
import { getNextScene, getOrderedScenes, validateExperienceSpec } from "@invite/invitation-runtime";
import { useMemo, useState } from "react";

interface ExperienceRendererProps {
  spec: ExperienceSpec;
}

interface ComponentProps {
  component: SceneComponent;
  reducedMotion: boolean;
}

const getString = (value: unknown, fallback = ""): string =>
  typeof value === "string" ? value : fallback;

const getStringList = (value: unknown): string[] =>
  Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string")
    : [];

const componentTitle = (component: SceneComponent): string =>
  getString(component.content.title, getString(component.content.text, component.kind));

function SceneComponentView({ component, reducedMotion }: ComponentProps) {
  const content = component.content;
  const title = componentTitle(component);

  switch (component.kind) {
    case "hero":
      return (
        <section style={sectionStyle}>
          <p style={eyebrowStyle}>{getString(content.eyebrow)}</p>
          <h1 style={heroTitleStyle}>{title}</h1>
          <p style={bodyStyle}>{getString(content.description)}</p>
        </section>
      );
    case "text":
      return (
        <section style={sectionStyle}>
          <h2 style={headingStyle}>{title}</h2>
          <p style={bodyStyle}>{getString(content.body, getString(content.text))}</p>
        </section>
      );
    case "image":
    case "gif":
      return (
        <figure style={mediaStyle}>
          <img src={getString(content.src)} alt={getString(content.alt, title)} style={imageStyle} loading="lazy" />
          {getString(content.caption) && <figcaption>{getString(content.caption)}</figcaption>}
        </figure>
      );
    case "video":
      return (
        <section style={sectionStyle}>
          <video controls playsInline poster={getString(content.poster) || undefined} style={imageStyle} src={getString(content.src)} />
          <p style={bodyStyle}>{getString(content.caption)}</p>
        </section>
      );
    case "gallery":
      return (
        <section style={sectionStyle}>
          <h2 style={headingStyle}>{title}</h2>
          <div style={galleryStyle}>
            {getStringList(content.images).map((src) => (
              <img key={src} src={src} alt="" style={galleryImageStyle} loading="lazy" />
            ))}
          </div>
        </section>
      );
    case "reveal":
      return <RevealComponent component={component} />;
    case "quiz":
      return <ChoiceComponent component={component} label="Choose an answer" />;
    case "rsvp":
      return <ChoiceComponent component={component} label="Let them know you are coming" />;
    case "celebration":
      return (
        <section style={{ ...sectionStyle, animation: reducedMotion ? undefined : "invite-fade-in 700ms ease" }}>
          <h2 style={heroTitleStyle}>{title}</h2>
          <p style={bodyStyle}>{getString(content.message)}</p>
        </section>
      );
    default:
      return (
        <section style={sectionStyle}>
          <h2 style={headingStyle}>{title}</h2>
          <p style={bodyStyle}>This experience component is ready for its renderer.</p>
        </section>
      );
  }
}

function RevealComponent({ component }: { component: SceneComponent }) {
  const [revealed, setRevealed] = useState(false);
  const content = component.content;

  return (
    <section style={sectionStyle}>
      {!revealed ? (
        <button type="button" style={primaryButtonStyle} onClick={() => setRevealed(true)}>
          {getString(content.prompt, "Reveal the surprise")}
        </button>
      ) : (
        <>
          <p style={eyebrowStyle}>The reveal</p>
          <h2 style={heroTitleStyle}>{getString(content.title, "Surprise")}</h2>
          <p style={bodyStyle}>{getString(content.message)}</p>
        </>
      )}
    </section>
  );
}

function ChoiceComponent({ component, label }: { component: SceneComponent; label: string }) {
  const [selected, setSelected] = useState<string | null>(null);
  const choices = getStringList(component.content.choices);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{getString(component.content.question, label)}</h2>
      <div style={choiceGridStyle}>
        {choices.map((choice) => (
          <button
            key={choice}
            type="button"
            aria-pressed={selected === choice}
            style={selected === choice ? selectedButtonStyle : secondaryButtonStyle}
            onClick={() => setSelected(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {selected && <p style={bodyStyle}>Selected: {selected}</p>}
    </section>
  );
}

function SceneView({ scene, reducedMotion, onNext }: { scene: SceneSpec; reducedMotion: boolean; onNext: () => void }) {
  const components = scene.components ?? [{ kind: "text" as ExperienceComponentKind, content: scene.content }];

  return (
    <article style={{ ...sceneStyle, animation: reducedMotion ? undefined : "invite-fade-in 700ms ease" }}>
      <div style={sceneHeaderStyle}>
        <span>{String(scene.order + 1).padStart(2, "0")}</span>
        <span>{scene.purpose}</span>
      </div>
      {components.map((component, index) => (
        <SceneComponentView key={component.kind + "-" + index} component={component} reducedMotion={reducedMotion} />
      ))}
      <button type="button" style={secondaryButtonStyle} onClick={onNext}>Continue</button>
    </article>
  );
}

export function ExperienceRenderer({ spec }: ExperienceRendererProps) {
  const validation = useMemo(() => validateExperienceSpec(spec), [spec]);
  const scenes = useMemo(() => getOrderedScenes(spec), [spec]);
  const [currentSceneId, setCurrentSceneId] = useState(scenes[0]?.id ?? null);
  const currentScene = scenes.find((scene) => scene.id === currentSceneId) ?? scenes[0];
  const [reducedMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  if (!validation.valid) {
    return (
      <main style={errorStyle}>
        <h1>Experience unavailable</h1>
        <p>This invitation has an invalid experience definition.</p>
        <ul>{validation.issues.map((issue) => <li key={issue.path + issue.message}>{issue.message}</li>)}</ul>
      </main>
    );
  }

  if (!currentScene) return <main style={errorStyle}>No scenes are available.</main>;

  const nextScene = getNextScene(spec, currentScene.id);

  return (
    <main style={{ ...runtimeStyle, background: spec.design.theme.background, color: spec.design.theme.text, fontFamily: spec.design.theme.bodyFont ?? "system-ui, sans-serif" }}>
      <style>{
        "@keyframes invite-fade-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }"
      }</style>
      <div style={experienceStyle}>
        <header style={topBarStyle}>
          <span>{spec.visualLanguage}</span>
          <span>{scenes.indexOf(currentScene) + 1} / {scenes.length}</span>
        </header>
        <SceneView
          key={currentScene.id}
          scene={currentScene}
          reducedMotion={reducedMotion}
          onNext={() => { if (nextScene) setCurrentSceneId(nextScene.id); }}
        />
        <nav aria-label="Experience scenes" style={sceneNavigationStyle}>
          {scenes.map((scene) => (
            <button
              key={scene.id}
              type="button"
              aria-label={"Go to scene " + (scene.order + 1)}
              aria-current={scene.id === currentScene.id ? "step" : undefined}
              onClick={() => setCurrentSceneId(scene.id)}
              style={{ ...sceneDotStyle, background: scene.id === currentScene.id ? spec.design.theme.primary : spec.design.theme.border }}
            />
          ))}
        </nav>
      </div>
    </main>
  );
}

const runtimeStyle = { minHeight: "100vh", boxSizing: "border-box" as const };
const experienceStyle = { width: "min(100%, 900px)", margin: "0 auto", padding: "24px", boxSizing: "border-box" as const };
const topBarStyle = { display: "flex", justifyContent: "space-between", padding: "8px 0 24px", fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase" as const, opacity: 0.7 };
const sceneStyle = { minHeight: "calc(100vh - 130px)", display: "flex", flexDirection: "column" as const, justifyContent: "center", gap: 24, padding: "32px 0 64px" };
const sceneHeaderStyle = { display: "flex", justifyContent: "space-between", gap: 16, fontSize: 12, opacity: 0.65 };
const sectionStyle = { display: "grid", gap: 12 };
const eyebrowStyle = { margin: 0, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase" as const, opacity: 0.7 };
const heroTitleStyle = { margin: 0, fontSize: "clamp(48px, 9vw, 96px)", lineHeight: 0.98, fontWeight: 500 };
const headingStyle = { margin: 0, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.05 };
const bodyStyle = { margin: 0, maxWidth: 680, fontSize: "clamp(17px, 2vw, 21px)", lineHeight: 1.65, opacity: 0.78 };
const mediaStyle = { margin: 0, display: "grid", gap: 8 };
const imageStyle = { width: "100%", maxHeight: 620, objectFit: "cover" as const, borderRadius: 20 };
const galleryStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 };
const galleryImageStyle = { width: "100%", aspectRatio: "1", objectFit: "cover" as const, borderRadius: 14 };
const primaryButtonStyle = { border: "none", borderRadius: 999, padding: "14px 22px", background: "var(--invite-primary)", color: "white", cursor: "pointer", font: "inherit", justifySelf: "start" };
const secondaryButtonStyle = { border: "1px solid currentColor", borderRadius: 999, padding: "12px 18px", background: "transparent", color: "inherit", cursor: "pointer", font: "inherit", justifySelf: "start" };
const selectedButtonStyle = { ...secondaryButtonStyle, background: "currentColor", color: "white" };
const choiceGridStyle = { display: "flex", flexWrap: "wrap" as const, gap: 10 };
const sceneNavigationStyle = { display: "flex", justifyContent: "center", gap: 8, padding: "8px 0 24px" };
const sceneDotStyle = { width: 8, height: 8, border: 0, borderRadius: "50%", padding: 0, cursor: "pointer" };
const errorStyle = { minHeight: "100vh", padding: 32, display: "grid", placeContent: "center", gap: 12 };