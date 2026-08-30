---
title: "Student Guide"
lesson: 5
parent: Lesson 5 — Apple and Rotten Apple Rain
---

# Lesson 5: Apple and Rotten Apple Rain

## 🎯 Your mission

Replace the single fresh apple and single rotten apple with two independent loops that spawn them continuously — fresh apples every 2 seconds, rotten ones every 3 seconds.

---

## 🧠 Today's idea

Today we're learning about:

**Iteration**

This means we are learning how to repeat an action automatically on a timer so the game keeps generating new objects forever, without writing code for each one individually.

---

## 🔎 Explore

Open your project from Lesson 4 (or load the starter `main.ts`).

1. Find `on game update every [] ms` in the **Game** section. What does it do?
2. What happens if you put both the fresh apple and rotten apple spawn code inside the *same* loop block?
3. If fresh apples appear every 2 seconds and rotten ones every 3 seconds, which appears more often?

### What happens if...

- you set the fresh apple loop to `200 ms` — is the game still playable?
- you set both loops to the same interval?
- you forget to remove the single apple from the setup code?

---

## 🛠️ Design

### ⭐ Challenge 1 — Fresh apple rain

Remove the single fresh apple from setup, then add a loop that creates a new fresh apple every 2 seconds at a random x position at the top.

### ⭐⭐ Challenge 2 — Rotten apple rain

Remove the single rotten apple from setup, then add a *separate, independent* loop that creates a new rotten apple every 3 seconds.

The two loops must be completely separate — do not put one inside the other.

### ⭐⭐⭐ Challenge 3 — Balance

Play the full game. Is the ratio of fresh to rotten apples right? Tune the intervals and fall speeds until the game feels challenging but fair.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Make fresh apples fall faster once the score reaches 5
- Add a golden apple worth 3 points that appears occasionally
- Try adding a welcome message at the very top of the code

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

- [ ] Replace a static sprite with an interval-based spawn loop
- [ ] Add a second independent spawn loop at a different rate
- [ ] Tune intervals to balance game difficulty


