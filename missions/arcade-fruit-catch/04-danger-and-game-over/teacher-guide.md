---
title: "Teacher Guide"
lesson: 4
parent: Lesson 4 — Danger and Game Over
---

# Teacher Guide — Lesson 4: Danger and Game Over

Session goals
- Add a second overlap event (Player + Enemy) that runs alongside the fresh apple event.
- Remove the rotten apple with a visual splatter effect when hit.
- Use `on life zero` to trigger game over (lose) with a message.

Setup
- Students load the `main.ts` from this folder — HUD, fresh apple, and rotten apple are all present and falling.
- Confirm the rotten apple falls but does nothing when touched before they start.

Hints for volunteers
- A second overlap event works exactly like the fresh apple one but watches for Player + Enemy. Add it as a separate block — do not put it inside the fresh apple overlap.
- To lose a life: inside the rotten apple overlap, look for `change life by -1` in the **Info** section.
- To add a splatter effect: look for `destroy [otherSprite] with effect [] duration []` in **Sprites**. The `fire` effect works well. Replace the plain `destroy` with this version.
- For game over (lose): look in **Info** for `on life zero`. Inside it, add `game splash "..."` (a message) then `game over LOSE` from the **Game** section.
- Encourage students to play test both endings before finishing — lose all lives, and survive to the end of the timer.
- If both overlap events fire at once for the same sprite, something has gone wrong with the kinds — check again.

Assessment
- Can the student test both the win and lose endings?
- Does the rotten apple splatter when hit?
- Can they explain why two overlap events do not interfere with each other?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 5 folder.

- Add a second overlap event handler (Player/Enemy) running in parallel with the apple handler
- Use `otherSprite.destroy(effects.fire, 200)` for a visual explosion
- Use `info.onLifeZero` for the lose condition
- Add messages with `game.splash` before game over screens

## Setup

- Students load the `main.ts` from this folder — HUD, apple, and rotten apple are all present
- The rotten apple falls but does nothing when touched — confirm this before they start

## Suggested flow

1. Ask: "What should happen when the player touches the rotten apple?"
2. Students add the enemy overlap — compare it to the apple overlap
3. Add the visual explosion together as a class
4. Demonstrate losing all lives without `onLifeZero` — play continues. Then add it
5. Pair students to play each other's games and test both endings

## Hints for volunteers

- Both overlap handlers run in parallel — make sure neither is nested inside the other
- Without a destroy call in the rotten apple overlap, it stays on screen after being hit — show this gap
- `game.splash` shows a message and waits for a button press; `game.over` ends the game — both are needed

## Mission Answers

**Challenge 1:**
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
})
```

**Challenge 2:** Already included in Challenge 1 — `otherSprite.destroy(effects.fire, 200)`.

**Challenge 3:**
```typescript
info.onLifeZero(function () {
    game.splash("Oh no! You lost all lives!")
    game.over(false, effects.melt)
})

info.onCountdownEnd(function () {
    game.splash("Time's up! Well done!")
    game.over(true, effects.confetti)
})
```

**Gold (reset button):**
```typescript
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setLife(3)
    info.setScore(0)
    info.startCountdown(30)
    player.setPosition(80, 100)
    game.splash("Game Reset! Try again!")
})
```

## Assessment

- Can they test both endings?
- Does the rotten apple splatter visually when hit?
- Can they explain why two overlap handlers don't interfere?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 5's folder
