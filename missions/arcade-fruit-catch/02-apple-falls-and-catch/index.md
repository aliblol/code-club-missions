---
title: "Apple Catch — Mission 2 — Apple Falls and Catch"
layout: default
parent: "Apple Catch"
nav_order: 2
---

# Mission 2 — Apple Falls and Catch

**Game:** Apple Catch  
**Time:** 45–60 minutes  
**Concepts:** Velocity, auto destroy, overlap events, selection

---

## What we're building today

The player is waiting but nothing is falling. Today students create an apple that drops from the top of the screen, set it to disappear when it leaves the screen, and wire up catching — so running into the apple increases the score.

---

## Starting code

{% include code-import.html %}

```typescript
// Apple Catch — Lesson 2 Starter
// This is where Lesson 1 ended: a player that moves left and right and bounces.
// Your mission: create an apple that falls, and make catching it score a point!

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
player.setPosition(80, 100)
controller.moveSprite(player, 100, 0)
player.setBounceOnWall(true)
```

Follow the student guide to add a falling apple and collision detection.
