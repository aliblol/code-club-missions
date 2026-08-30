---
title: "Teacher Guide"
lesson: 6
parent: Lesson 6 — Sounds and Make It Your Own
---

# Teacher Guide — Lesson 6: Sounds and Make It Your Own

Session goals
- Add audio feedback to game events (cause and effect).
- Apply all previously learned concepts in a free design session.

Setup
- Students load the `main.ts` from this folder — the full Coin Collector game.
- Check speakers or headphones work before starting. Some school networks block audio.

Hints for volunteers
- Sounds go inside the overlap events. In **Music**, look for `play sound [...]`. Add `play sound [ba ding]` for collecting and `play sound [wawawawaa]` for getting hit.
- `play sound` continues the game immediately. `play sound until done` freezes everything until the sound finishes — demonstrate both so students can feel the difference.
- For the design session: ask questions rather than solving problems. If a student wants to add something, ask "What should happen? Which section might have a block for that?" before pointing to the answer.
- If students want to add background music: look for `play melody [...] repeating` in **Music** in `on start`. Add `stop all sounds` before the game-over blocks to clean up.
- Good design session prompts: "Why did you choose that speed?", "Is the game still fair?", "Could someone who has never seen it play it?"

Assessment
- Can the student add a sound and explain why they chose it?
- Can they extend the game with at least one new feature?

Notes
- This is the final lesson. The `main.ts` in this folder is the complete reference version of the game.
- End with a share-out: two or three students show their game and explain one decision they made.

- Add audio feedback to game events (cause and effect)
- Understand `play sound` (non-blocking) vs `play sound until done` (blocking)
- Apply all concepts from the series independently in a free design session
- Name and explain the programming concepts encountered across the six lessons

## Setup

- Students load the `main.ts` from this folder — the full Coin Collector game
- Check speakers/headphones work before starting — some school networks block audio

## Suggested flow

1. Add sounds together (5 minutes) — collect sound and hit sound
2. Demo `play sound until done` so students feel the difference
3. Open the design session — go through the concept review table in the student guide
4. Circulate and ask questions rather than providing answers
5. End with a 5-minute share-out: two or three students demo their game and explain one change they made

## Hints for volunteers

- Sounds go *inside* the overlap blocks, alongside the existing code
- `music.baDing.play()` for collect; `music.wawawawaa.play()` for hit are good defaults
- For background music: `music.playMelody("...", 120)` in a loop; `music.stopAllSounds()` before game over
- Resist solving design problems for students — ask "What do you want to happen? What block might do that?"

## Mission Answers

**Challenge 1:** Inside `onOverlap(Player, Food)`:
```typescript
    music.baDing.play()
```

**Challenge 2:** Inside `onOverlap(Player, Enemy)`:
```typescript
    music.wawawawaa.play()
```

**Challenge 3:** Open-ended — see student guide for ideas. The only constraint is the game must still be winnable.

## Concept review answers (for discussion)

| Concept | Where |
|---|---|
| Sequence | `game.splash` → background → sprites → HUD (top to bottom) |
| Event-driven | `onOverlap`, `onLifeZero`, `onCountdownEnd` |
| Variables | `vx`, `vy` on enemy; `score`, `lives` |
| Selection | `if (info.life() > 0)` in enemy overlap |
| Iteration | `game.onUpdateInterval(1000, ...)` coin loop |
| Strings | `"Lives left: " + info.life()` |
| Abstraction | Sprite kinds hide collision detection |

## Assessment

- Can they add sounds and explain why they chose those sounds?
- Can they extend the game with at least one new feature?
- Can they name at least three of the seven concepts from the table?

## Notes

- This is the final lesson — the `main.ts` in this folder is also the complete reference implementation
