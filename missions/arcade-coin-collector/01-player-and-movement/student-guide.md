---
title: "Student Guide"
lesson: 1
parent: Lesson 1 — Player and Movement
---

# Lesson 1: Player and Movement

## 🎯 Your mission

Create a player sprite and make it move around the screen using the arrow keys.

---

## 🧠 Today's idea

Today we're learning about:

**Sequence and events**

This means we are learning how to write code in the right order and connect button presses to actions so the game responds to the player.

In MakeCode Arcade, the screen is **160 pixels wide** and **120 pixels tall**. The top-left corner is `x: 0, y: 0`. The centre is `x: 80, y: 60`.

---

## 🔎 Explore

Load the starter `main.ts` into [MakeCode Arcade](https://arcade.makecode.com).

You should see a plain coloured background. Now explore:

1. Can you find a block (or code) that sets the background colour? What happens if you change the number?
2. What does x/y mean for a sprite's position? Try placing a sprite at `x: 0, y: 0` — where does it appear?
3. What happens if you give the player a velocity instead of using controller buttons?

### What happens if...

- you place the player at `x: 160, y: 120`?
- you set `vx` (horizontal speed) and `vy` (vertical speed) to different values?
- you turn `bounce on wall` off — what happens at the edges?

---

## 🛠️ Design

### ⭐ Challenge 1 — Create a player

Can you:
- Create a sprite of kind **Player** and draw your character in the pixel art editor
- Place it at the centre of the screen

💡 The centre of the screen is somewhere around `x: 80, y: 60`.

### ⭐⭐ Challenge 2 — Add movement

Can you:
- Connect the D-pad to the player so the arrow keys make it move
- Make the player bounce off the edges instead of disappearing

💡 Look in the **Controller** section for movement, and **Sprites** for wall behaviour.

### ⭐⭐⭐ Challenge 3 — Tune the speed

Can you find the right speed so the player feels good to control?

Try very slow, very fast, and somewhere in between. What speed works best?

---

## 💡 Invent

You've got a moving player! Now try:

- Redesign the sprite — give it a theme (space explorer, animal, robot)
- Change the background colour to match your theme
- What happens if horizontal speed (`vx`) and vertical speed (`vy`) are different values?

---

## 🧠 Think

- What is the difference between setting a sprite's **position** and setting its **velocity**?
- Why does the program need to know the sprite is **kind: Player**?
- What would happen if you had two Player sprites?

---

## 🏁 Lesson complete!

I can...

- [ ] Create a sprite and place it on screen using x/y coordinates
- [ ] Connect the D-pad to make the player move
- [ ] Make the player bounce off the walls
