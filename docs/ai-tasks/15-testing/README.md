# Phase 15 — Testing

Establish comprehensive testing frameworks to guarantee platform reliability, performance, and visual correctness.

**Exit condition:** A robust test suite running in CI that prevents regressions and performance degradation.

| ID | Task | Priority | Depends on |
| --- | --- | --- | --- |
| T15.01 | [Setup Unit Testing Framework](15-01-unit-testing.md) | P0 | [T00.03](../00-foundation/00-03-adr-database-selection.md) |
| T15.02 | [Implement End-to-End (E2E) Test Suite](15-02-e2e-testing.md) | P0 | [T06.01](../06-creator-app/06-01-creator-shell-routing.md), [T10.02](../10-campaigns/10-02-guest-management-api.md) |
| T15.03 | [Configure Visual Regression Testing](15-03-visual-regression.md) | P1 | [T04.02](../04-design-system/04-02-creator-theme.md), [T05.01](../05-renderer/05-01-runtime-package-scaffold.md) |
| T15.04 | [Develop Load Testing Scenarios](15-04-load-testing.md) | P2 | [T11.03](../11-public-delivery/11-03-public-routing.md) |

[Back to task index](../README.md)
