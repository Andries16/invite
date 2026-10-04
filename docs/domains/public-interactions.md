# Public Interactions

Optional features include RSVP, quizzes, guest messages and similar submissions.

Ordinary page delivery remains static:

```text
browser -> CDN -> static artifact
```

Interactive submission is separate:

```text
browser -> public interaction API -> validated submission
```

Anonymous endpoints need rate limiting, validation, spam mitigation and privacy controls. Do not expose the control-plane API directly.
