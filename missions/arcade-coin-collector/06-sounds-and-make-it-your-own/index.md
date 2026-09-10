---
title: "Coin Collector — Mission 6 — Sounds and Make It Your Own"
layout: default
parent: "Coin Collector"
nav_order: 6
---

# Mission 6 — Sounds and Make It Your Own

**Game:** Coin Collector  
**Time:** 45–60 minutes  
**Concepts:** Audio feedback, open-ended design

---

## What we're building today

The game is functionally complete. Today students add sound effects to game events, then spend the rest of the session making the game their own.

There are no new required concepts — this is a design session where students experiment, extend, and customise.

---

## Starting code

{% include code-import.html %}

```typescript
// Coin Collector — Lesson 6 Starter
// This is where Lesson 5 ended: welcome screen, hit messages, and coin rain.
// Your mission: add sounds, then make the game your own!

game.splash("Coin Collector!!")

scene.setBackgroundColor(9)

info.setScore(0)
info.setLife(3)
info.startCountdown(30)

// Loop: a new coin appears every 1 second
game.onUpdateInterval(1000, function () {
    let coin = sprites.create(img`
        . . . . . . 8 8 8 8 8 . . . . .
        . . . . . . 8 8 8 8 8 . . . . .
        . . . 8 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 . . . .
        . . . 8 8 8 8 8 8 8 8 8 . . . .
        . . . . 8 8 8 8 8 8 8 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `, SpriteKind.Food)
})
```

Follow the student guide to add sounds and customize your game!
