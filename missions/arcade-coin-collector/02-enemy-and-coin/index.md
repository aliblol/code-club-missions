---
title: "Coin Collector — Mission 2 — Enemy and Coin"
layout: default
parent: "Coin Collector"
nav_order: 2
---

# Mission 2 — Enemy and Coin

**Game:** Coin Collector  
**Time:** 45–60 minutes  
**Concepts:** Variables, randomness, velocity

---

## What we're building today

A game with only a player is not much of a game. Today students add the two things that make Coin Collector interesting: an enemy that bounces around the screen automatically, and a coin to collect.

By the end of the lesson the game has all three sprites on screen.

---

## Starting code

{% include code-import.html %}

```typescript
// Coin Collector — Lesson 2 Starter
// This is where Lesson 1 ended: a player with movement and wall bounce.
// Your mission: add a bouncing enemy and a coin!

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
```

Follow the student guide to add an enemy and coin to the code above.
