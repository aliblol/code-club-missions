---
title: "Coin Collector — Mission 5 — Messages and Coin Rain"
layout: default
parent: "Coin Collector"
nav_order: 5
---

# Mission 5 — Messages and Coin Rain

**Game:** Coin Collector  
**Time:** 45–60 minutes  
**Concepts:** Strings and concatenation, iteration

---

## What we're building today

The game works but it starts abruptly and only ever has one coin. Today students add a welcome screen and feedback messages, then replace the single coin with an automatic loop that spawns a new coin every second.

By the end of the lesson the game feels alive — it introduces itself, gives feedback when the player is hit, and keeps generating coins automatically.

---

## Starting code

{% include code-import.html %}

```typescript
// Coin Collector — Lesson 5 Starter
// This is where Lesson 4 ended: the game can be won AND lost.
// Your mission: add a welcome screen, a hit message, and coin rain!

game.splash("Coin Collector!!")

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

Follow the student guide to add splash screens, messages, and coin rain loops.
