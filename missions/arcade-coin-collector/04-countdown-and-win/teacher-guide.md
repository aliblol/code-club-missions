---
title: "Teacher Guide"
lesson: 4
parent: "Coin Collector — Mission 4 — Add the Countdown"
---

# Teacher Guide — Mission 4: Add the Countdown

## Session goals

- Start a countdown using the Info system.
- End the game with a win when the timer reaches zero.

## Setup

Students load this folder's `main.ts`. The score and lives display should already work.

## Suggested flow

1. Start a 30-second countdown and observe the timer in the HUD.
2. Ask what should happen when time runs out.
3. Add the countdown-end event and win block.
4. Test with a shorter timer if needed.

## Mission answer

```typescript
info.startCountdown(30)

info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
```

## Assessment

- Does the countdown appear and run?
- Does the game end with a win when the countdown reaches zero?

The completed code for this mission is the starting point for Mission 5.
