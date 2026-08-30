---
title: "Teacher Guide"
lesson: 2
parent: Lesson 2 — Enemy and Coin
---

# Teacher Guide — Lesson 2: Enemy and Coin

Session goals
- Add a bouncing enemy that moves automatically using velocity.
- Use random numbers so the enemy starts in a different place each game.
- Add a third sprite (the coin) of kind Food.

Setup
- Students load the `main.ts` from this folder — they should see the player moving before starting.
- Ask "What makes a game interesting? What is missing right now?" to set up the session.

Hints for volunteers
- The enemy moves on its own — it does NOT use controller buttons. To give it automatic movement: look for `set [enemy] velocity to vx [] vy []` in the **Sprites** section. Both vx and vy should be non-zero (try 50).
- To make it bounce: look for `set [enemy] bounce on wall ON`. Without this, the enemy flies off screen immediately.
- For a random position: `set [enemy] position to x [pick random 10 to 150] y [pick random 10 to 110]`. The `pick random` block is in the **Math** section.
- Speed above 80 in both directions becomes very hard to avoid — let students discover this by testing.
- The coin (kind: Food) just needs creating and positioning — it does nothing yet. That is deliberate.
- If the enemy and player look identical, ask the student to open the pixel art editor and change the colour.

Assessment
- Can the student create a second sprite that moves automatically?
- Can they explain the difference between enemy movement and player movement?
- Do they understand why random positions make the game more interesting?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 3 folder.

## Setup

- Students load the `main.ts` from this folder — it contains the completed player from Lesson 1
- They should see a player on a blue background before they start

## Suggested flow

1. Quick recap: what did we build last time? (player + movement + bounce)
2. Introduce the enemy — ask: "How is this different from the player? Who controls it?"
3. Students add the enemy and tune its speed — let them experiment
4. Introduce randomness: demonstrate that the same position every time is less interesting
5. Students add the coin — it stays still for now

## Hints for volunteers

- The enemy needs `setVelocity`, not `controller.moveSprite` — it moves automatically
- `Math.randomRange(10, 150)` for x keeps the sprite away from the very edges
- If the enemy moves too fast (above ~80/80), it becomes impossible to avoid — let students discover this

## Mission Answers

**Challenge 1:**
```typescript
let enemy = sprites.create(img`...`, SpriteKind.Enemy)
enemy.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
enemy.setVelocity(50, 50)
enemy.setBounceOnWall(true)
```

**Challenge 2:** Position uses `Math.randomRange` as shown above.

**Challenge 3:**
```typescript
let coin = sprites.create(img`...`, SpriteKind.Food)
coin.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
```

## Assessment

- Can they create a second sprite of a different kind?
- Do they understand why the enemy uses `setVelocity` rather than controller input?
- Can they use `Math.randomRange` to randomise a position?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 3's folder
