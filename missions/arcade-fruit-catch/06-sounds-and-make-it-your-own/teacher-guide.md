---
title: "Teacher Guide"
lesson: 6
parent: Lesson 6 — Sounds and Make It Your Own
---

# Teacher Guide — Lesson 6: Sounds and Make It Your Own

Session goals
- Add audio and visual feedback to game events (cause and effect).
- Apply all concepts from the series independently in a free design session.

Setup
- Students load the `main.ts` from this folder — the full Apple Catch game with both spawn loops.
- Check speakers or headphones work before starting.

Hints for volunteers
- Catching a fresh apple: add `play sound [ba ding]` and change the destroy to `otherSprite.destroy(effects.confetti, 200)`. The destroy with effect replaces the plain destroy — swap it, don't add a second one.
- Catching a rotten apple: add `play sound [wawawawaa]`. The fire effect destroy is already there from lesson 4.
- Welcome message: add `game show long text "Welcome! Collect fresh apples and avoid the rotten ones!" layout Center` at the very top of the file, before anything else.
- For the design session: ask questions rather than providing answers. "What do you want to happen? Which section might have a block for that?" works well.
- If a student wants to add background music: look for `play melody [...] repeating` in **Music** in `on start`. Add `stop all sounds` before the game-over blocks so music stops cleanly.
- Good design prompts: "Is the game still winnable?", "Could someone who has never seen it figure out what to do?", "What is the hardest part of your game?"

Assessment
- Can the student add effects and explain why they chose them?
- Can they extend the game with at least one new feature?

Notes
- This is the final lesson. The `main.ts` in this folder is the complete reference version of the game.
- End with a share-out: students show their game and explain one design decision they made.

- Add audio feedback to game events (cause and effect)
- Use `otherSprite.destroy(effects.confetti, 200)` for a visual catch effect
- Apply all concepts from the series independently in a free design session
- Name and explain the programming concepts encountered across the six lessons

## Setup

- Students load the `main.ts` from this folder — the full Apple Catch game with both loops
- Check speakers/headphones work before starting

## Suggested flow

1. Add sounds and the confetti effect together (5 minutes)
2. Go through the concept review table in the student guide as a class
3. Open the design session — circulate and ask questions rather than giving answers
4. End with a 5-minute share-out: students demo their game and explain one design decision

## Hints for volunteers

- `otherSprite.destroy(effects.confetti, 200)` replaces `sprites.destroy(otherSprite)` in the apple overlap — swap it, don't add a second destroy
- `music.baDing.play()` for catching a fresh apple; `music.wawawawaa.play()` for catching a rotten one are good defaults
- Welcome message: `game.showLongText("...", DialogLayout.Center)` at the very top of the file
- For the restart button — the `player` variable must be accessible inside the B button event

## Mission Answers

**Challenge 1:** In `onOverlap(Player, Food)`:
```typescript
    otherSprite.destroy(effects.confetti, 200)   // replaces sprites.destroy(otherSprite)
    music.baDing.play()
```

**Challenge 2:** In `onOverlap(Player, Enemy)`:
```typescript
    music.wawawawaa.play()
    // otherSprite.destroy(effects.fire, 200) already in place from lesson 4
```

**Challenge 3:** Open-ended — see student guide for ideas.

**Welcome message:** At the very top of the file:
```typescript
game.showLongText("Welcome! Collect fresh apples and avoid the rotten ones!", DialogLayout.Center)
```

## Concept review answers (for discussion)

| Concept | Where |
|---|---|
| Sequence | `showLongText` → background → player → HUD (top to bottom) |
| Event-driven | `onOverlap` (×2), `onLifeZero`, `onCountdownEnd`, `B button` |
| Variables | `vy` on apple and rotten apple; score, lives |
| Selection | Fresh apple overlap vs rotten apple overlap (different kinds) |
| Iteration | Fresh apple loop every 2s, rotten apple loop every 3s |
| Abstraction | Sprite kinds hide collision detection |

## Assessment

- Can they add effects and sounds correctly?
- Can they extend the game with at least one new feature?
- Can they name at least three of the concepts from the table?

## Notes

- This is the final lesson — the `main.ts` in this folder is also the complete reference implementation
