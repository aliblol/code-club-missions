---
title: "Apple Catch — Mission 5 — Apple and Rotten Apple Rain"
layout: default
parent: "Apple Catch"
nav_order: 5
---

# Mission 5 — Apple and Rotten Apple Rain

**Game:** Apple Catch  
**Time:** 45–60 minutes  
**Concepts:** Iteration, two independent loops

---

## What we're building today

Only one fresh apple and one rotten apple fall per game, which makes it feel empty. Today students replace them with two independent loops that continuously spawn apples and rotten apples at different rates.

By the end of the lesson the game generates its own content forever — fresh apples every 2 seconds, rotten ones every 3 seconds.

---

## Starting code

{% include code-import.html %}

```typescript
// Apple Catch — Lesson 5 Starter
// This is where Lesson 4 ended: the game can be won AND lost, with messages.
// Your mission: replace the single apple and rotten apple with continuous rain loops!

scene.setBackgroundColor(6)

let player = sprites.create(img`
    . . f f f f . .
    . f 2 2 2 2 f .
    f 2 f f f f 2 f
    f 2 f . . f 2 f
    f 2 f f f f 2 f
    . f 2 2 2 2 f .
    . . f f f f . .
    `, SpriteKind.Player)

info.setScore(0)
info.setLife(3)
info.startCountdown(30)
```

Follow the student guide to add spawn loops for apples and rotten apples.
