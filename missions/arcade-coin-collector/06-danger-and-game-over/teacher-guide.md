---
title: "Teacher Guide"
lesson: 6
parent: "Coin Collector — Mission 6 — Dodge the Enemy"
---

# Teacher Guide — Mission 6: Dodge the Enemy

Session goals
- Add a Player/Enemy overlap event.
- Reduce lives and reset the player's position after being hit.

Setup
- Students load the `main.ts` from this folder — the HUD, coin collection, and timer win should work.

Hints for volunteers
- A second overlap event works exactly like the coin one, but watches for Player + Enemy instead of Player + Food. Add it separately — do not put it inside the coin overlap.
- To reduce lives: inside the enemy overlap, look for `change life by -1` in the **Info** section.
- To reset position: look for `set [player] position to x [] y []` in the **Sprites** section. Centre of screen is x: 80, y: 60.
- To add a pause: look for `pause [500] ms` in the **Game** section. Without it, one collision can drain all three lives instantly — let students see this before adding the pause.
- Game over is intentionally left for the next mission. Keep this session focused on one new interaction: being hit.

Assessment
- Can the student test the coin and enemy overlap events?
- Does a hit reduce lives and reset the player?
- Do they understand why the pause matters?

## Mission answer

```typescript
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(500)
    sprite.setPosition(80, 60)
})
```
- The completed code from this mission is the `main.ts` in Mission 7's folder.
