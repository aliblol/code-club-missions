---
title: "Teacher Guide"
lesson: 7
parent: "Coin Collector — Mission 7 — Add the Lose Ending"
---

# Teacher Guide — Mission 7: Add the Lose Ending

## Session goals

- Use the life-zero event to end the game with a loss.
- Test the win and lose endings.

## Setup

Students load this folder's `main.ts`. The player should lose a life when touching the enemy, but the game should not yet end at zero lives.

## Suggested flow

1. Play until lives reach zero and notice that the game keeps running.
2. Add `on life zero` and end the game with a loss.
3. Test the timer win and lives lose endings.
4. If time allows, guard the position reset so it only happens while the player still has lives.

## Mission answer

```typescript
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
```

Optional guard inside the enemy overlap:

```typescript
if (info.life() > 0) {
    sprite.setPosition(80, 60)
}
```

## Assessment

- Does running out of lives end the game with a loss?
- Can students test both endings?

The completed code for this mission is the starting point for Mission 8.
