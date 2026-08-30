---
title: "Teacher Guide"
lesson: 3
parent: Lesson 3 — HUD and Collecting
---

# Teacher Guide — Lesson 3: HUD and Collecting

Session goals
- Add score, lives, and a countdown timer using the Info system.
- Use an overlap event to detect when the player touches a coin.
- Destroy a sprite and create a new one in its place.

Setup
- Students load the `main.ts` from this folder — all three sprites should be on screen and the enemy should be bouncing.
- Check this before starting. If something is missing, help them reload the starter file.

Hints for volunteers
- Score, lives, and timer are all in the **Info** section. The HUD (numbers on screen) appears automatically — students do not draw it.
- To add an overlap event: look in the **Sprites** section for something that says "on sprite of kind Player overlaps". Students need to choose Player and Food as the two kinds.
- Inside the overlap, `otherSprite` is the coin that was touched. To remove it: look for `destroy [otherSprite]`. To create a new one: copy the original coin creation code.
- A very common mistake: the overlap never fires. This usually means one sprite has the wrong kind. Check the player is `Player` and the coin is `Food`.
- Without `on countdown end`, the timer reaches zero but nothing happens. Ask students to test what they have, notice the gap, then add the event.

Assessment
- Can the student describe what an overlap event does and when it fires?
- Does collecting a coin increase the score and spawn a new one?
- Does the game end with a win when the timer runs out?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 4 folder.

- Use the Info system to display score, lives, and a countdown timer
- Use `sprites.onOverlap` to detect a Player/Food collision (selection)
- Destroy a sprite and spawn a replacement
- Wire up the win condition using `info.onCountdownEnd`

## Setup

- Students load the `main.ts` from this folder — player, enemy, and coin are on screen
- Check that the enemy is moving before they start

## Suggested flow

1. Ask: "The game has three sprites but nothing reacts to anything. What needs to happen?"
2. Show the HUD appearing automatically when score/life are set — discuss abstraction
3. Introduce the overlap event — demonstrate what `otherSprite` refers to
4. Students wire up collect, then extend to the win condition

## Hints for volunteers

- If the overlap never fires: check both sprites have exactly the right kind (`Player` and `Food`)
- `otherSprite` inside the overlap refers to the coin that was touched — destroy that, not the player
- Without `onCountdownEnd`, the timer runs to zero but nothing happens — show this gap

## Mission Answers

**Challenge 1:**
```typescript
info.setScore(0)
info.setLife(3)
info.startCountdown(30)
```

**Challenge 2:**
```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    let newCoin = sprites.create(img`...`, SpriteKind.Food)
    newCoin.setPosition(Math.randomRange(10, 150), Math.randomRange(10, 110))
})
```

**Challenge 3:**
```typescript
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
```

## Assessment

- Can they explain what the overlap event does and when it fires?
- Can they set up the HUD correctly?
- Does the coin respawn after collection?

## Notes

- The completed state of this lesson is the `main.ts` in lesson 4's folder
