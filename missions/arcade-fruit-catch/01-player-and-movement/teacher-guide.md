---
title: "Teacher Guide"
lesson: 1
parent: Lesson 1 — Player and Movement
---

# Teacher Guide — Lesson 1: Player and Movement

Session goals
- Create a sprite and position it near the bottom of the screen using y coordinates.
- Connect D-pad to horizontal-only movement (vy = 0).
- Introduce the idea that the player's position matters for game design.

Setup
- Students open the starter `main.ts` in [MakeCode Arcade](https://arcade.makecode.com).
- Draw the screen grid before starting: 160 wide, 120 tall. Ask "where should the player stand in a catching game?"
- No login needed — projects save in the browser.

Hints for volunteers
- The player should be near the bottom: `y: 100` leaves room at the edge. If a student places the player at `y: 60` (middle), ask where falling things would land and why that matters.
- To add movement: look for `move [player] with buttons vx [] vy []` in the **Controller** section. Set vx to 100 (left/right speed). Set vy to 0.
- Setting vy to 0 locks vertical movement. Demonstrate with vy: 50 first — the player can move up and dodge everything, which makes the game trivial. Then ask students to change it to 0.
- To add bounce: look for `set [player] bounce on wall ON` in the **Sprites** section.
- Speed around 100 works well. If a student sets it very high, ask them to try catching a falling object — is it still controllable?

Assessment
- Can the student place the player near the bottom and explain why?
- Can they explain what setting vy to 0 does?
- Does the player bounce at the edges?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 2 folder.

- Create a sprite and position it using x/y coordinates
- Understand the screen grid (160×120, `y` increases downward, player near bottom)
- Connect D-pad to horizontal-only movement (`vy = 0`)
- Use `setBounceOnWall` at the left and right edges

## Setup

- Students open the starter `main.ts` in [MakeCode Arcade](https://arcade.makecode.com)
- Draw the grid on the board: 160 wide, 120 tall, `y=0` at top, `y=120` at bottom
- Ask before they start: "Where should the player stand in a catching game?"

## Suggested flow

1. Show the screen grid — ask where `y: 100` is (near the bottom, 20px from edge)
2. Students create and position the player — allow 10 minutes for the pixel art editor
3. Add movement together, then set `vy=0` as a class and discuss why
4. Add bounce on wall

## Hints for volunteers

- `vy = 0` locks vertical movement — demonstrate with `vy = 50` first so students see the problem
- `y=100` leaves room at the very bottom for the catching animation
- If the Gold question ("why no vertical movement?") comes up early, discuss it: if the player can move up, they can dodge falling objects trivially

## Mission Answers

**Challenge 1:**
```typescript
scene.setBackgroundColor(6)
let player = sprites.create(img`...`, SpriteKind.Player)
player.setPosition(80, 100)
```

**Challenge 2:**
```typescript
controller.moveSprite(player, 100, 0)   // vy=0 locks vertical movement
player.setBounceOnWall(true)
```

**Challenge 3:** Speed around 100–120 works well. Above 150 becomes hard to control precisely.

## Assessment

- Can they place the player near the bottom and explain why?
- Can they explain what `vy = 0` does?
- Does the player bounce at the edges?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 2's folder
