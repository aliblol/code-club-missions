---
title: "Teacher Guide"
lesson: 4
parent: Lesson 4 — Danger and Game Over
---

# Teacher Guide — Lesson 4: Danger and Game Over

Session goals
- Add a second overlap event (Player + Enemy) that runs alongside the coin event.
- Reduce lives and reset the player's position after being hit.
- Use `on life zero` to trigger a proper game over.

Setup
- Students load the `main.ts` from this folder — coin collection must be working before they start.
- Confirm both the score goes up and the game ends (win) when the timer runs out.

Hints for volunteers
- A second overlap event works exactly like the coin one, but watches for Player + Enemy instead of Player + Food. Add it separately — do not put it inside the coin overlap.
- To reduce lives: inside the enemy overlap, look for `change life by -1` in the **Info** section.
- To reset position: look for `set [player] position to x [] y []` in the **Sprites** section. Centre of screen is x: 80, y: 60.
- To add a pause: look for `pause [500] ms` in the **Game** section. Without it, one collision can drain all three lives instantly — let students see this before adding the pause.
- For game over (lose): look in the **Info** section for `on life zero`. Inside it, look in **Game** for `game over LOSE`. This is different from the win ending.
- Encourage students to play test both endings before finishing — lose all lives, and survive to the end of the timer.

Assessment
- Can the student test both the win and lose endings?
- Can they explain why two overlap events do not interfere with each other?
- Do they understand why the pause matters?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 5 folder.

- Add a second overlap event handler (Player/Enemy) running in parallel with the coin handler
- Use `info.changeLifeBy(-1)` and `pause` to implement being hit
- Guard position reset with `if info.life() > 0`
- Use `info.onLifeZero` to trigger game over (lose)

## Setup

- Students load the `main.ts` from this folder — the game has HUD and coin collection working
- Confirm both win and lose conditions are not yet wired up before starting

## Suggested flow

1. Ask: "What should happen when the player touches the enemy?"
2. Students add the enemy overlap — compare it to the coin overlap side by side
3. Demonstrate the bug: without the `if life > 0` check, the position resets on the final life after game over
4. Add `onLifeZero` together — demonstrate playing to both endings

## Hints for volunteers

- Both overlap handlers run in parallel — they do not interfere with each other
- Without `pause(500)`, a single collision can drain all three lives instantly — let students see this
- The `if info.life() > 0` guard prevents the position reset running after the game has ended

## Mission Answers

**Challenge 1:**
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
```

**Challenge 2:** Add inside the enemy overlap:
```typescript
    pause(500)
    sprite.setPosition(80, 60)
```

**Challenge 3:** Wrap the position reset in a guard, and add:
```typescript
    if (info.life() > 0) {
        sprite.setPosition(80, 60)
    }
// ...
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
```

## Assessment

- Can they test both endings (win via timer, lose via lives)?
- Do they understand why the `if life > 0` check matters?
- Can they explain why two overlap handlers do not interfere?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 5's folder
