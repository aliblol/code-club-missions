---
title: "Arcade Game 2 — Apple Catch"
layout: default
nav_order: 3
has_children: true
---

# Arcade Game 2 — Apple Catch

A six-lesson game design course using [MakeCode Arcade](https://arcade.makecode.com).

Students build Apple Catch — a catching game where a player moves left and right to catch falling apples and dodge falling rotten apples.

No prior coding experience needed. Each lesson takes approximately 45–60 minutes.

---

## What students build

By the end of the six lessons, students have a playable Apple Catch game with:

- A player that moves left and right at the bottom of the screen
- Apples that rain down from random positions (score when caught)
- Rotten apples that rain down faster (lose a life when hit)
- A score, lives, and a 30-second countdown
- Sound effects, visual explosion effects, and a welcome message

---

## Lessons

| # | Title | Key concepts |
|---|---|---|
| 1 | [Player and Movement](01-player-and-movement/) | Sequence, sprites, horizontal-only movement |
| 2 | [Apple Falls and Catch](02-apple-falls-and-catch/) | Velocity, auto destroy, overlap events |
| 3 | [HUD and Rotten Apple](03-hud-and-rotten-apple/) | Selection, multiple sprite kinds |
| 4 | [Danger and Game Over](04-danger-and-game-over/) | Multiple event handlers, game loop |
| 5 | [Apple and Rotten Apple Rain](05-apple-and-rotten-apple-rain/) | Iteration, two independent loops |
| 6 | [Sounds and Make It Your Own](06-sounds-and-make-it-your-own/) | Audio effects, open-ended design |

---

## How it works

Each lesson folder contains:

- **`index.md`** — what the lesson is about
- **`student-guide.md`** — the student activity
- **`teacher-guide.md`** — facilitation notes and mission answers
- **`main.ts`** — the starting code for that lesson (the complete state from the previous lesson)

Students load `main.ts` into MakeCode Arcade at the start of each session so they pick up exactly where the previous group left off.
