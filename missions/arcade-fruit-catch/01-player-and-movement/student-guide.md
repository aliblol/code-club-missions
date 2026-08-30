---
title: "Student Guide"
lesson: 1
parent: Lesson 1 — Player and Movement
---

# Lesson 1: Player and Movement

## 🎯 Your mission

Create a player sprite at the bottom of the screen and make it move left and right only — not up and down.

---

## 🧠 Today's idea

Today we're learning about:

**Sequence and events**

This means we are learning how to write code in the right order and how to lock the player to horizontal-only movement so the game stays fair.

---

## 🔎 Explore

Load the starter `main.ts` into [MakeCode Arcade](https://arcade.makecode.com).

1. The screen is 160 pixels wide and 120 pixels tall. `y=0` is the **top**, `y=120` is the **bottom**. Where should the player stand in a catching game?
2. The movement block has two speed values: `vx` (left/right) and `vy` (up/down). What would you set `vy` to so the player can't move vertically?
3. Try `setBounceOnWall` — what happens when the player reaches the left or right edge?

### What happens if...

- `vy` is set to `50` instead of `0`? Can you still play a fair catching game?
- the player starts at `y: 10` instead of `y: 100`?
- you use `stay in screen` instead of `bounce on wall` — is there a difference?

---

## 🛠️ Design

### ⭐ Challenge 1 — Create a player

Create a sprite of kind **Player**, draw your character (a basket, a person, a robot), and place it near the bottom centre of the screen.

### ⭐⭐ Challenge 2 — Left and right only

Add movement from the **Controller** section, set the vertical speed to zero so the player cannot move up or down, then add bounce on wall.

### ⭐⭐⭐ Challenge 3 — Tune the speed

Try a range of speeds. What horizontal speed makes the game fun — fast enough to reach falling objects but slow enough to control?

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Try setting vertical speed to 50 — why does that break the game?
- Change the background colour and make the player sprite match a theme
- Move the player to different y positions — what feels best for a catching game?

There is no single right answer.

---

## 🧠 Think

- What happened?
- Why did it happen?
- What would you change?
- What could you try next?

---

## 🏁 Lesson complete!

I can...

- [ ] Create a sprite and place it near the bottom of the screen
- [ ] Set `vy` to `0` to lock vertical movement
- [ ] Add bounce on wall for left/right edges
