---
title: "Teacher Guide"
lesson: 2
parent: Lesson 2 — Apple Falls and Catch
---

# Teacher Guide — Lesson 2: Apple Falls and Catch

Session goals
- Create a falling sprite with downward velocity and auto destroy.
- Use an overlap event to detect a catch and increase the score.

Setup
- Students load the `main.ts` from this folder — the player should be moving left and right before they start.
- Check this before starting. If the player isn't moving, help them reload the starter file.

Hints for volunteers
- A positive vy makes a sprite fall (because y=0 is the top of the screen). To make the apple fall: look for `set [apple] velocity to vx 0 vy 50` in **Sprites**. A vx of 0 means it falls straight down.
- Without auto destroy, the apple "piles up" off screen — the game slows down invisibly. To add it: look for `set [apple] auto destroy ON` in **Sprites**. Demonstrate without it first so students understand why it matters.
- For the overlap event: look in **Sprites** for `on sprite of kind Player overlaps otherSprite of kind Food`. Inside it: increase score by 1 and destroy `otherSprite` (the apple that was touched).
- If the overlap never fires: the most common cause is a wrong kind. Check the player is `Player` and the apple is `Food`.
- Use `pick random 10 to 150` (not 0 to 160) so apples always appear catchable and not flush against the wall.

Assessment
- Can the student set up a falling apple with auto destroy?
- Does catching it increase the score?
- Can they explain what `otherSprite` refers to inside the overlap?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 3 folder.

- Create a falling sprite with downward velocity (`vy > 0`)
- Use `setFlag(SpriteFlag.AutoDestroy, true)` to clean up off-screen sprites
- Use `sprites.onOverlap(Player, Food, ...)` to detect a catch

## Setup

- Students load the `main.ts` from this folder — player at bottom with horizontal movement
- Check their player moves correctly before they start

## Suggested flow

1. Ask: "What does a positive `vy` do?" — y increases downward, so positive = falls
2. Students create the apple, set position at `y: 0`, add `vy: 50`
3. Demonstrate *without* auto destroy: the apple vanishes at the bottom but still exists in memory. Add it to fix.
4. Students add the overlap event — confirm the score changes

## Hints for volunteers

- If the overlap never fires: check the apple is `SpriteKind.Food` and the player is `SpriteKind.Player`
- `pick random 10 to 150` (not `0 to 160`) keeps the apple away from edges so it's always catchable
- `otherSprite` in the overlap is the apple that was caught — destroy that, not the player

## Mission Answers

**Challenge 1:**
```typescript
let apple = sprites.create(img`...`, SpriteKind.Food)
apple.setPosition(Math.randomRange(10, 150), 0)
apple.setVelocity(0, 50)
```

**Challenge 2:**
```typescript
apple.setFlag(SpriteFlag.AutoDestroy, true)
```

**Challenge 3:**
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
```

## Assessment

- Can they set up a falling sprite with auto destroy?
- Does catching the apple increase the score?
- Can they explain why auto destroy matters?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 3's folder
