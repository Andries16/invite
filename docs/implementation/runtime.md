# Experience runtime implementation

The runtime executes a validated ExperienceSpec without interpreting arbitrary application code. The same transition model is intended for creator preview, guest playback and production generation.

## State

Runtime state contains the execution mode, current scene ID and scene status. A new runtime starts with no active scene.

## Events

The runtime accepts typed events for load, scroll, click, elapsed time and completed interactions. Events are data, not executable behavior.

## Transition rules

1. A runtime with no current scene can activate the first ordered scene when its trigger matches the incoming event.
2. An active scene can advance only to the next ordered scene and only when that scene's trigger matches the incoming event.
3. A scroll trigger matches when the observed threshold is at least the configured threshold.
4. An after trigger matches when elapsed seconds are at least the configured delay.
5. Click and interaction-complete triggers require an exact target or interaction ID match.
6. Unmatched events leave runtime state unchanged.

This keeps scene execution deterministic and prevents arbitrary event payloads from becoming executable runtime instructions.
