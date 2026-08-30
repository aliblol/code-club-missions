---
title: "Student Guide"
lesson: 2
parent: Lesson 2 — Enemy and Coin
---

# Lesson 2: Enemy and Coin

## 🎯 Your mission

Add a bouncing enemy and a coin to the game. The screen should have all three sprites by the end.

---

## 🧠 Today's idea

Today we're learning about:

**Variables and randomness**

This means we are learning how to store values (like speed) in a way we can change, and how to use random numbers so something different happens each time the game runs.

---

## 🔎 Explore

Open your project from Lesson 1 (or load the starter `main.ts`).

1. The enemy needs to move on its own — not with the controller. What block lets you set a sprite's speed directly?
2. Try setting the enemy's `vx` and `vy` to `50`. What happens at the edges?
3. What does `pick random 10 to 150` do? Where does it come from?

### What happens if...

- the enemy speed is `10` vs `100`?
- the enemy starts at exactly `x: 80, y: 60` every time vs a random position?
- `vx` and `vy` are different values (e.g. `vx: 70, vy: 30`)?

---

## 🛠️ Design

### ⭐ Challenge 1 — Add the enemy

Create a second sprite of kind **Enemy**, draw it differently from the player, and give it automatic movement so it bounces around the screen on its own.

💡 Look for velocity and bounce-on-wall in the **Sprites** section.

### ⭐⭐ Challenge 2 — Random start

Make the enemy start at a different position each time the game loads.

💡 Look in the **Math** section for a block that gives you a random number.

### ⭐⭐⭐ Challenge 3 — Add the coin

Create a third sprite of kind **Food**, draw a coin or gem, and place it at a random position on screen. The coin stays still for now — you will make it collectible in Lesson 3.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Give the coin a velocity too — does it make the game harder or easier?
- Try adding a second enemy at a different starting position
- Try different enemy speeds — what is the fastest speed that still makes the game fair?

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

- [ ] Add a second sprite of a different kind with automatic movement
- [ ] Use a random number to set a starting position
- [ ] Add a third sprite (the coin) of kind Food
