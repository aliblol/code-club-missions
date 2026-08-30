---
title: "Teacher Guide"
lesson: 1
parent: Lesson 1 — Player and Movement
---

# Teacher Guide — Lesson 1: Player and Movement

Session goals
- Introduce sprites and x/y coordinates through hands-on creation.
- Connect D-pad input to player movement (event-driven programming).
- Establish the screen grid and the idea that code runs top to bottom.

Setup
- Students open the starter `main.ts` in [MakeCode Arcade](https://arcade.makecode.com) — click the import button and paste the code.
- Draw the screen grid on the board before starting: 160 wide, 120 tall, x goes right, y goes down.
- No login needed — projects save in the browser automatically.

Hints for volunteers
- Ask "If x goes right and y goes down, where is the centre?" before anyone opens MakeCode. The answer is x: 80, y: 60.
- The pixel art editor takes time — set a 10-minute limit and encourage quick, simple sprites.
- To add movement: students need `controller.moveSprite(player, 100, 100)` from the **Controller** section. If they can't find it, ask them to look for something that mentions "buttons" and "move".
- To add bounce: look for `set [player] bounce on wall ON` in the **Sprites** section. Without this, the player disappears off the edge.
- If the player vanishes off screen, that is the missing bounce — they haven't added it yet.
- Speed of 100 works well. If a student sets it above 200 the game feels uncontrollable — ask them to try lower values.

Assessment
- Can the student place a sprite at the centre using x and y coordinates?
- Can they make the player move and bounce off the walls?

Notes
- The completed code from this lesson is the `main.ts` in the lesson 2 folder.

