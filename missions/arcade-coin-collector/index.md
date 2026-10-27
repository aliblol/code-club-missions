---
title: "Coin Collector"
layout: default
nav_order: 2
has_children: true
---

# Arcade Game 1 — Coin Collector

A game design course using [MakeCode Arcade](https://arcade.makecode.com), built from short, focused missions.

Students build a complete arcade game from scratch — a player that moves, an enemy to avoid, and coins to collect. Each mission adds one focused feature so the game grows session by session.

No prior coding experience needed. Missions 3–7 are designed for 20-minute sessions.

---

## What students build

By the end of the nine missions, students have a playable Coin Collector game with:

- A player sprite controlled with the D-pad
- A bouncing enemy to avoid
- Coins that respawn when collected
- A score, lives, and a 30-second countdown
- Sound feedback and a welcome screen

---

## Lessons

| # | Title | Key concepts |
|---|---|---|
| 1 | [Player and Movement](01-player-and-movement/) | Sequence, sprites, event-driven programming |
| 2 | [Enemy and Coin](02-enemy-and-coin/) | Variables, randomness, velocity |
| 3 | [Add the HUD](03-add-the-hud/) | Score, lives, game state |
| 4 | [Add the Countdown](04-countdown-and-win/) | Countdown timers, events |
| 5 | [Collect a Coin](05-collect-a-coin/) | Overlap events, score changes |
| 6 | [Dodge the Enemy](06-danger-and-game-over/) | Overlap events, event handlers |
| 7 | [Add the Lose Ending](07-game-over/) | Game state, life-zero event |
| 8 | [Messages and Coin Rain](08-messages-and-coin-rain/) | Strings, iteration |
| 9 | [Sounds and Make It Your Own](09-sounds-and-make-it-your-own/) | Audio, open-ended design |

---

## How it works

Each mission folder contains:

- **`index.md`** — what the lesson is about
- **`student-guide.md`** — the student activity
- **`teacher-guide.md`** — facilitation notes and mission answers
- **`main.ts`** — the starting code for that lesson (the complete state from the previous lesson)

Students load `main.ts` into MakeCode Arcade at the start of each mission so they pick up exactly where the previous group left off.
