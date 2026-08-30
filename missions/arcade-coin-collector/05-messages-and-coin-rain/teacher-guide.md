---
title: "Teacher Guide"
lesson: 5
parent: Lesson 5 — Messages and Coin Rain
---

# Teacher Guide — Lesson 5: Messages and Coin Rain

Session goals
- Add a welcome splash screen and a "lives remaining" hit message.
- Replace the single coin with an automatic spawn loop (iteration).

Setup
- Students load the `main.ts` from this folder — both win and lose conditions must work before starting.
- This lesson has two distinct parts (messages, then coin rain) — plan roughly half the session for each.

Hints for volunteers
- Welcome screen: look in the **Game** section for `game splash "..."`. It must go at the very top of the code, before the background colour. It pauses the game until the player presses a button.
- Hit message: inside the enemy overlap, after `change life by -1`, add `game splash "Try again! Lives left: " + info.life()`. The `+` joins the text and the live number together.
- Coin rain: students need to (1) delete the single coin from setup, (2) delete the coin respawn code from inside the overlap, (3) add `on game update every 1000 ms` from the **Game** section with coin creation inside it.
- A very common mistake: forgetting to remove the old respawn code from the overlap. This means coins are created twice. Ask students to check their overlap event after adding the loop.
- Setting the interval to 200 ms fills the screen with coins — demonstrate this briefly to show "too easy is also bad design".

Assessment
- Does the welcome screen appear before the game starts?
- Does the hit message show the correct number of lives?
- Does the coin loop create new coins automatically without any respawn code in the overlap?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 6 folder.

- Use `game.splash` and `game.showLongText` for title and feedback screens
- Join strings and numbers with `+` (string concatenation)
- Replace manual coin creation with `game.onUpdateInterval` (iteration)
- Simplify the overlap event after moving to a spawn loop

## Setup

- Students load the `main.ts` from this folder — complete game loop with win and lose conditions
- This lesson has two distinct parts; plan to spend roughly half the time on each

## Suggested flow

1. Add the welcome screen together as a class — place it at the very top of the code
2. Discuss string concatenation: write `"Lives left: " + 2` on the board, then explain `info.life()` returns the live value
3. Move to the coin rain: delete the single coin, then add the loop — students experiment with interval
4. Remind students to remove the respawn code from the overlap once the loop is in place

## Hints for volunteers

- The welcome message must go at the very top — it blocks everything below it until dismissed
- `\n` inside a string creates a new line (show this on the projector)
- If the coin loop interval is set too low (e.g. 100 ms), the screen fills instantly — use this to discuss "too easy is also bad design"
- Students often forget to remove the respawn code from the overlap — check for duplicate coin creation

## Mission Answers

**Challenge 1:** At the very top of the file:
```typescript
game.splash("Coin Collector!!")
```

**Challenge 2:** Inside the enemy overlap, before position reset:
```typescript
    if (info.life() > 0) {
        game.splash("Try again! Lives left: " + info.life())
        sprite.setPosition(80, 60)
    }
```

**Challenge 3:** Remove the single coin and respawn code. Add:
```typescript
game.onUpdateInterval(1000, function () {
    let coin = sprites.create(img`...`, SpriteKind.Food)
    coin.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
// Overlap simplified — no respawn needed
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
```

## Assessment

- Can they explain what `info.life()` returns and why it gives a live value?
- Does the coin loop work correctly (not duplicating creation)?
- Can they describe the difference between a single coin and the spawn loop?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 6's folder
