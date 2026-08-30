---
title: "Teacher Guide"
lesson: 3
parent: Lesson 3 — HUD and Rotten Apple
---

# Teacher Guide — Lesson 3: HUD and Rotten Apple

Session goals
- Add score, lives, and a countdown timer using the Info system.
- Create a rotten apple (kind: Enemy) that falls faster than the fresh apple.
- Wire up the win condition using `on countdown end`.

Setup
- Students load the `main.ts` from this folder — catching a fresh apple should increase the score.
- Confirm this works before starting.

Hints for volunteers
- Score, lives, and timer are all in the **Info** section. Look for `set score to 0`, `set life to 3`, and `start countdown 30`.
- The HUD (numbers on screen) appears automatically when these are set — students do not draw it.
- Without `on countdown end`, the timer reaches zero but nothing happens. Show students what this looks like first, then ask them to add the event to fix it.
- For the rotten apple: use exactly the same pattern as the fresh apple (random x at top, vy, auto destroy) but with kind **Enemy** and a higher vy (try 70). It should look clearly different — encourage a different colour and shape.
- Nothing happens when the player touches the rotten apple yet. If students ask, explain that is the next lesson.

Assessment
- Does the HUD show correctly?
- Does the rotten apple fall faster than the fresh one?
- Does the game end with a win when the timer runs out?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 4 folder.

- Use the Info system for score, lives, and a countdown
- Create a second falling sprite of kind Enemy with a higher fall speed
- Wire up the win condition using `info.onCountdownEnd`

## Setup

- Students load the `main.ts` from this folder — player and catchable apple are working
- Confirm catching the apple increases the score before they start

## Suggested flow

1. Add the HUD together as a class — show how `setScore`, `setLife`, and `startCountdown` add visual elements automatically
2. Without `onCountdownEnd`, the timer reaches zero but nothing happens — demonstrate this gap
3. Students add the rotten apple: kind Enemy, higher speed, same auto destroy pattern as the fresh apple
4. Encourage students to make the rotten apple visually distinct (different colour and shape)

## Hints for volunteers

- `SpriteKind.Enemy` is the correct kind for the rotten apple — this will matter in the next overlap event
- A rotten apple vy of 70–80 is faster than the fresh one (50) but still visible enough to dodge
- Nothing happens when the player touches the rotten apple yet — students may ask; explain it's coming next lesson

## Mission Answers

**Challenge 1:**
```typescript
info.setScore(0)
info.setLife(3)
info.startCountdown(30)
```

**Challenge 2:**
```typescript
let rottenApple = sprites.create(img`...`, SpriteKind.Enemy)
rottenApple.setPosition(Math.randomRange(10, 150), 0)
rottenApple.setVelocity(0, 70)
rottenApple.setFlag(SpriteFlag.AutoDestroy, true)
```

**Challenge 3:**
```typescript
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
```

## Assessment

- Does the HUD show correctly?
- Does the rotten apple fall faster than the fresh one?
- Does the game end with a win when the timer runs out?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 4's folder
