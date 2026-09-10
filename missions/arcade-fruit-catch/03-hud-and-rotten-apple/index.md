---
title: "Apple Catch — Mission 3 — HUD and Rotten Apple"
layout: default
parent: "Apple Catch"
nav_order: 3
---

# Mission 3 — HUD and Rotten Apple

**Game:** Apple Catch  
**Time:** 45–60 minutes  
**Concepts:** Selection, the Info system, multiple sprite kinds

---

## What we're building today

Catching apples scores points but there's no stakes yet. Today students add the heads-up display (score, lives, timer) and introduce a rotten apple that falls faster than the fresh one. The rotten apple looks dangerous but isn't yet — that comes next lesson.

---

## Starting code

{% include code-import.html %}

```typescript
// Apple Catch — Lesson 3 Starter
// This is where Lesson 2 ended: player catches falling apples and scores points.
// Your mission: add a score, lives, timer, and a falling rotten apple!

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

Follow the student guide to add HUD and a rotten apple.
