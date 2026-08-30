---
title: "Student Guide"
lesson: 3
parent: Lesson 3 — HUD and Rotten Apple
---

# Lesson 3: HUD and Rotten Apple

## 🎯 Your mission

Add a score, lives, and countdown timer to the screen. Create a rotten apple that falls faster than the fresh one — for now it just looks dangerous, but next lesson it will cost a life.

---

## 🧠 Today's idea

Today we're learning about:

**Selection and sprite kinds**

This means we are learning how the game uses sprite kinds (like Food and Enemy) to tell objects apart, so different events can happen when the player touches each one.

---

## 🔎 Explore

Open your project from Lesson 2 (or load the starter `main.ts`).

1. Where in MakeCode can you set the score, lives, and start a countdown? What do they look like on screen?
2. The fresh apple uses `kind: Food`. The rotten apple needs a different kind — which makes most sense?
3. The rotten apple should fall faster than the fresh one. If the fresh apple uses fall speed 50, what would you try for the rotten one?

### What happens if...

- you set lives to `1`?
- the rotten apple has the same speed as the fresh one — is it easy to tell them apart quickly?
- the countdown is set to `10` seconds?

---

## 🛠️ Design

### ⭐ Challenge 1 — Add the HUD

Set the score to 0, lives to 3, and start a 30-second countdown. Everything you need is in the **Info** section.

### ⭐⭐ Challenge 2 — Add a rotten apple

Create a second falling sprite of kind **Enemy**, draw it to look clearly different from the fresh apple (different colour, different shape), and make it fall faster.

💡 Use the same pattern as the fresh apple: random x position at the top, downward velocity, auto destroy.

### ⭐⭐⭐ Challenge 3 — Win condition

Make the game end with a win when the countdown reaches zero.

💡 Look in the **Info** section for an event that fires when the timer ends.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Set the rotten apple speed very high — at what point does it become impossible to dodge?
- What if the rotten apple also moved sideways? Is that more interesting?
- What would a third type of falling object add to the game?

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

- [ ] Set score, lives, and a countdown using the Info system
- [ ] Create a second falling sprite of kind Enemy with a higher fall speed
- [ ] Add a win condition when the countdown ends

