# Campaigns

A Campaign is one invitation design reused for many recipients.

~~~text
Campaign
  |
  +-- template InvitationSpec
  +-- recipient A
  +-- recipient B
  +-- recipient C
~~~

Prefer one shared artifact plus safe recipient variables. Build separately only when recipient-specific assets or layout genuinely change the artifact.

Recipient variables must be allowlisted and must never become executable code or unvalidated HTML/CSS.
