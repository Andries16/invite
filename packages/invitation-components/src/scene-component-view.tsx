import type { SceneComponent } from "@invite/invitation-schema";
import { AudioComponent } from "./audio-component";
import { ChoiceComponent } from "./choice-component";
import { componentTitle, getString, getStringList } from "./component-utils";
import { CountdownComponent } from "./countdown-component";
import { GuestbookComponent } from "./guestbook-component";
import {
  bodyStyle,
  eyebrowStyle,
  galleryImageStyle,
  galleryStyle,
  headingStyle,
  heroTitleStyle,
  imageStyle,
  mediaStyle,
  sectionStyle,
} from "./renderer-styles";
import { RevealComponent } from "./reveal-component";
import { TimelineComponent } from "./timeline-component";

export interface SceneComponentViewProps {
  component: SceneComponent;
  reducedMotion: boolean;
  onInteractionComplete?: () => void;
}

export const SceneComponentView = ({
  component,
  reducedMotion,
  onInteractionComplete,
}: SceneComponentViewProps) => {
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
          <img
            src={getString(content.src)}
            alt={getString(content.alt, title)}
            style={imageStyle}
            loading="lazy"
          />
          {getString(content.caption) && <figcaption>{getString(content.caption)}</figcaption>}
        </figure>
      );
    case "video":
      return (
        <section style={sectionStyle}>
          <video
            controls
            playsInline
            poster={getString(content.poster) || undefined}
            style={imageStyle}
            src={getString(content.src)}
          />
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
      return <RevealComponent component={component} onComplete={onInteractionComplete} />;
    case "quiz":
      return (
        <ChoiceComponent
          component={component}
          label="Choose an answer"
          onComplete={onInteractionComplete}
        />
      );
    case "rsvp":
      return (
        <ChoiceComponent
          component={component}
          label="Let them know you are coming"
          onComplete={onInteractionComplete}
        />
      );
    case "timeline":
      return <TimelineComponent component={component} />;
    case "countdown":
      return <CountdownComponent component={component} />;
    case "audio":
      return <AudioComponent component={component} />;
    case "guestbook":
      return <GuestbookComponent component={component} />;
    case "map":
      return (
        <section style={sectionStyle}>
          <h2 style={headingStyle}>{title}</h2>
          <p style={bodyStyle}>{getString(content.place, getString(content.address))}</p>
          <p style={bodyStyle}>
            {[getString(content.date), getString(content.time)].filter(Boolean).join(" · ")}
          </p>
        </section>
      );
    case "celebration":
      return (
        <section
          style={{
            ...sectionStyle,
            animation: reducedMotion ? undefined : "invite-fade-in 700ms ease",
          }}
        >
          <h2 style={heroTitleStyle}>{title}</h2>
          <p style={bodyStyle}>{getString(content.message, getString(content.text))}</p>
        </section>
      );
    default: {
      const exhaustive: never = component.kind;
      return (
        <section style={sectionStyle}>
          <h2 style={headingStyle}>{title}</h2>
          <p style={bodyStyle}>Unsupported component: {exhaustive}</p>
        </section>
      );
    }
  }
};
