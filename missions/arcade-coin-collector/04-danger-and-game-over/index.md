---
title: "Coin Collector — Mission 4 — Danger and Game Over"
layout: default
parent: "Coin Collector"
nav_order: 4
---

# Mission 4 — Danger and Game Over

**Game:** Coin Collector  
**Time:** 45–60 minutes  
**Concepts:** Multiple event handlers, game state, selection

---

## What we're building today

The enemy still bounces harmlessly. Today students make it dangerous — touching it costs a life and resets the player's position. They also wire up the proper lose condition so the game ends when all lives are gone.

By the end of the lesson the game has both a win condition (timer runs out) and a lose condition (lives run out). It is now fully playable from start to finish.

---

## Starting code

{% include code-import.html %}

```typescript
// Coin Collector — Lesson 4 Starter
// This is where Lesson 3 ended: HUD is active and collecting coins works.
// Your mission: make the enemy dangerous and add a proper lose condition!

scene.setBackgroundColor(9)

let player = sprites.create(img`
    . . . . . . 2 2 2 2 2 . . . . .
    . . . . . . 2 2 2 2 2 . . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)

info.setScore(0)
info.setLife(3)
info.startCountdown(30)
```

Follow the student guide to add enemy danger detection and game over conditions.
