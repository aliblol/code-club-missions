---
title: "Coin Collector — Mission 3 — HUD and Collecting"
layout: default
parent: "Coin Collector"
nav_order: 3
---

# Mission 3 — HUD and Collecting

**Game:** Coin Collector  
**Time:** 45–60 minutes  
**Concepts:** Selection, overlap events, the Info system

---

## What we're building today

The three sprites exist but nothing happens when they touch. Today students wire up the game's scoring system and make the coin collectible. They also add the heads-up display (HUD) — the score, lives, and countdown timer the player can see on screen.

By the end of the lesson collecting a coin increases the score and respawns the coin, and the timer counts down to a win condition.

---

## Starting code

{% include code-import.html %}

```typescript
// Coin Collector — Lesson 3 Starter
// This is where Lesson 2 ended: player, enemy, and coin are all on screen.
// Your mission: add a score, lives, timer, and make the coin collectible!

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
player.setPosition(80, 60)
controller.moveSprite(player, 100, 100)
player.setBounceOnWall(true)

let enemy = sprites.create(img`
    . . . . . . 5 5 5 5 5 . . . . .
    . . . . . . 5 5 5 5 5 . . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . 5 5 5 5 5 5 5 5 5 . . . .
    . . . . 5 5 5 5 5 5 5 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
enemy.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
enemy.setVelocity(50, 50)
enemy.setBounceOnWall(true)

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
coin.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
```

Follow the student guide to add HUD elements and collision detection.
