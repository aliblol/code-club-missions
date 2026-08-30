---
title: "Teacher Guide"
lesson: 5
parent: Lesson 5 — Apple and Rotten Apple Rain
---

# Teacher Guide — Lesson 5: Apple and Rotten Apple Rain

Session goals
- Replace static sprites with interval-based spawn loops.
- Understand that two separate loops run independently on their own timers.
- Explore how interval length and fall speed affect game balance.

Setup
- Students load the `main.ts` from this folder — the full game loop should be working including game over.
- Students need to remove the single fresh apple AND single rotten apple from setup before adding loops.

Hints for volunteers
- A spawn loop uses `on game update every [] ms` from the **Game** section. Inside it, create a fresh apple at a random x at the top, give it a downward velocity, and set auto destroy ON.
- The rotten apple loop is a second, completely separate `on game update every [] ms` block — not nested inside the first one.
- A common mistake: students forget to delete the single apple or rotten apple from the setup code. This means there is one extra object from the start. Ask students to check their setup code after adding the loops.
- The overlap events (fresh apple and rotten apple) do not need to change — they already handle any number of sprites of their kind.
- Demonstrate the fresh apple loop at 200 ms — the screen fills instantly. Ask students "Is this fun? Why not?" — too easy is also poor game design.

Assessment
- Do both loops run independently at different rates?
- Does the overlap still detect catches and hits with many objects on screen?
- Can students describe what they changed and why?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 6 folder.

- Replace static sprites with interval-based spawn loops using `game.onUpdateInterval`
- Understand that two separate `onUpdateInterval` blocks run independently on their own clocks
- Explore how interval length and fall speed affect game balance

## Setup

- Students load the `main.ts` from this folder — full game loop with game over conditions
- They need to remove the single fresh apple AND single rotten apple from setup before adding loops

## Suggested flow

1. Ask: "The game has one fresh apple and one rotten apple — what would make it more interesting?"
2. Students remove the single apple and add the apple loop
3. Repeat for the rotten apple — emphasise the second loop is completely separate
4. Play-test and tune: fresh apple at 2000 ms, rotten apple at 3000 ms is a good starting ratio
5. Demonstrate the loop at 200 ms — too easy is also bad design

## Hints for volunteers

- Two separate `onUpdateInterval` blocks run independently — they are not nested, they fire on their own clocks
- The overlap events (Food and Enemy) do not need to change — they already handle any number of sprites
- If students forget to remove the single apple from setup code, there will be one apple from the start plus the loop apples — usually harmless but can confuse them
- Setting apple interval to 200 ms fills the screen instantly — demonstrate this deliberately

## Mission Answers

**Challenge 1 (apple loop):**
```typescript
// Remove the single apple from setup, then:
game.onUpdateInterval(2000, function () {
    let apple = sprites.create(img`...`, SpriteKind.Food)
    apple.setPosition(Math.randomRange(10, 150), 0)
    apple.setVelocity(0, 50)
    apple.setFlag(SpriteFlag.AutoDestroy, true)
})
```

**Challenge 2 (rotten apple loop — separate block):**
```typescript
game.onUpdateInterval(3000, function () {
    let rottenApple = sprites.create(img`...`, SpriteKind.Enemy)
    rottenApple.setPosition(Math.randomRange(10, 150), 0)
    rottenApple.setVelocity(0, 70)
    rottenApple.setFlag(SpriteFlag.AutoDestroy, true)
})
```

**Silver (speed up over time):**
```typescript
// In setup:
let appleSpeed = 50
// In apple loop, use appleSpeed instead of 50
// In game update or a separate check:
if (info.score() >= 5) { appleSpeed = 70 }
```

## Assessment

- Do both loops run independently?
- Does the overlap still work with multiple falling sprites?
- Can they describe the difference between one apple and a spawn loop?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 6's folder
