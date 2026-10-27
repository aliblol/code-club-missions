---
title: "Teacher Guide"
lesson: 5
parent: "Coin Collector — Mission 5 — Collect a Coin"
---

# Teacher Guide — Mission 5: Collect a Coin

## Session goals

- Detect Player/Food contact with an overlap event.
- Increase the score and replace the collected coin.

## Setup

Students load this folder's `main.ts`. The HUD, timer win condition, and all three sprites should already be working.

## Suggested flow

1. Ask what should happen when the player touches the coin.
2. Find the overlap event and identify `otherSprite`.
3. Add score change, destroy the collected coin, and recreate it at a random position.
4. Test that the score changes and only one coin remains.

## Hints

- The player kind is `Player`; the coin kind is `Food`.
- `otherSprite` is the coin. Destroy it, not the player.
- A common mistake is forgetting to create a replacement after destroying the coin.

## Mission answer

```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    let newCoin = sprites.create(img`...`, SpriteKind.Food)
    newCoin.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
```

## Assessment

- Does touching the coin increase the score?
- Does the collected coin disappear and a replacement appear?

The completed code for this mission is the starting point for Mission 6.
