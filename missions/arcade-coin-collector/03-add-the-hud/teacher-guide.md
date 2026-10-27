---
title: "Teacher Guide"
lesson: 3
parent: "Coin Collector — Mission 3 — Add the HUD"
---

# Teacher Guide — Mission 3: Add the HUD

Session goals
- Add score and lives using the Info system.

Setup
- Students load the `main.ts` from this folder — all three sprites should be on screen and the enemy should be bouncing.
- Check this before starting. If something is missing, help them reload the starter file.

Hints for volunteers
- Score and lives are in the **Info** section. The HUD appears automatically; students do not draw it.
- Keep this session focused on adding the status display. The countdown is the next mission.

Assessment
- Can the student explain how the Info system displays game state?
- Does the HUD display the score and lives?

## Mission Answers

**Challenge 1:**
```typescript
info.setScore(0)
info.setLife(3)
```

- The completed code from this mission is the `main.ts` in Mission 4's folder.
