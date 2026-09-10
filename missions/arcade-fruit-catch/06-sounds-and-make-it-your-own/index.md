---
title: "Apple Catch — Mission 6 — Sounds and Make It Your Own"
layout: default
parent: "Apple Catch"
nav_order: 6
---

# Mission 6 — Sounds and Make It Your Own

**Game:** Apple Catch  
**Time:** 45–60 minutes  
**Concepts:** Audio and visual effects, open-ended design

---

## What we're building today

The game is functionally complete. Today students add sounds and visual effects to game events, then spend the rest of the session making the game their own.

There are no new required concepts — this is a design session where students experiment, extend, and customise.

---

## Starting code

{% include code-import.html %}

```typescript
// Apple Catch — Lesson 6 Starter
// This is where Lesson 5 ended: fresh apples rain every 2s, rotten apples every 3s.
// Your mission: add sounds and effects, then make it your own!

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

info.setLife(3)
info.setScore(0)
info.startCountdown(30)
```

Follow the student guide to add sounds and customize your game!
