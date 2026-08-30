---
title: "Student Guide"
lesson: 2
parent: Lesson 2 — Apple Falls and Catch
---

# Lesson 2: Apple Falls and Catch

## 🎯 Your mission

Create an apple that falls from the top of the screen, disappears when it leaves the bottom, and adds a point to the score when the player catches it.

---

## 🧠 Today's idea

Today we're learning about:

**Velocity and selection**

This means we are learning how to give a sprite automatic movement in a direction, clean up sprites that leave the screen, and make something happen when two sprites touch.

---

## 🔎 Explore

Open your project from Lesson 1 (or load the starter `main.ts`).

1. A positive `vy` moves a sprite down. A negative `vy` would move it up. What `vy` would make an apple fall at a reasonable speed?
2. Without auto destroy, what happens to the apple after it passes the player?
3. How does the game know the player sprite and the apple sprite are touching?

### What happens if...

- the apple falls with `vy: 10` — is that catchable? What about `vy: 150`?
- you turn auto destroy OFF — can you tell anything is wrong?
- the apple starts at `y: 60` instead of `y: 0`?

---

## 🛠️ Design

### ⭐ Challenge 1 — Apple falls

Create a sprite of kind **Food**, place it at the top of the screen at a random x position, and give it a downward velocity so it falls.

💡 `y: 0` is the top of the screen. `pick random` is in the **Math** section.

### ⭐⭐ Challenge 2 — Auto destroy

Make the apple disappear automatically when it falls off the bottom of the screen.

💡 Look in the **Sprites** section for a flag that removes sprites when they leave the screen.

### ⭐⭐⭐ Challenge 3 — Catch it

Add an overlap event that fires when the player touches a Food sprite, increases the score by 1, and destroys the caught apple.

💡 Look in the **Sprites** section for the overlap event block.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Make the apple worth 2 points when caught
- Try fall speeds of 20, 50, and 100 — which feels most catchable?
- What happens if you add more apples in the setup code?

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

- [ ] Create a falling sprite with a positive `vy` velocity
- [ ] Enable auto destroy to remove sprites that leave the screen
- [ ] Use an overlap event to detect a catch and increase the score
