---
title: "Apple Catch — Mission 4 — Danger and Game Over"
layout: default
parent: "Apple Catch"
nav_order: 4
---

# Mission 4 — Danger and Game Over

**Game:** Apple Catch  
**Time:** 45–60 minutes  
**Concepts:** Multiple event handlers, game loop, messages

---

## What we're building today

The rotten apple falls harmlessly through the player. Today students wire up both consequences — catching a rotten apple costs a life — and add the game over conditions so the game ends properly with messages for both outcomes.

By the end of the lesson the game is fully playable from start to finish.

---

## Starting code

{% include code-import.html %}

```typescript
// Apple Catch — Lesson 4 Starter
// This is where Lesson 3 ended: HUD is active, apple and rotten apple both fall.
// Your mission: make the rotten apple dangerous and add proper game over conditions!

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

Follow the student guide to add rotten apple danger and game over conditions.
