---
title: "Student Guide"
lesson: 5
parent: Lesson 5 — Messages and Coin Rain
---

# Lesson 5: Messages and Coin Rain

## 🎯 Your mission

Add a welcome screen that appears before the game starts, a message when the player is hit, and replace the single coin with an automatic coin-spawning loop.

---

## 🧠 Today's idea

Today we're learning about:

**Iteration**

This means we are learning how to repeat an action automatically on a timer so the game keeps generating new content without any extra code.

---

## 🔎 Explore

Open your project from Lesson 4 (or load the starter `main.ts`).

1. Where in MakeCode can you show a full-screen message that pauses the game until the player presses a button?
2. Look at `"Lives left: " + info.life()` — what do you think `+` does here? What is `info.life()`?
3. Find `on game update every [] ms`. What happens if you put it at `200 ms` vs `2000 ms`?

### What happens if...

- you put the welcome message at the *bottom* of the code instead of the *top*?
- you set the coin spawn interval to `200 ms` — is the game still playable?
- you keep the old coin-respawn code inside the overlap *and* have the loop — what happens?

---

## 🛠️ Design

### ⭐ Challenge 1 — Welcome screen

Add a message that appears before the game starts. It should go at the very top of the code, before anything else.

💡 Look in the **Game** section for a block that shows a full-screen message.

### ⭐⭐ Challenge 2 — Hit message

When the player is hit and still has lives, show a message that says how many lives are left.

💡 You can join text and a number with `+`.

### ⭐⭐⭐ Challenge 3 — Coin rain

Replace the single coin with a loop that creates a new coin every second. Remove the single coin from setup and the respawn code from the overlap first.

💡 Look in the **Game** section for `on game update every [] ms`.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Make the welcome screen show multiple lines (hint: use `\n` for a new line)
- Change the interval so coins appear more often at higher scores
- Try setting the interval to 200 ms — what happens?

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

- [ ] Add a welcome screen using a game splash
- [ ] Join a string and a number to build a message
- [ ] Replace a single sprite with an automatic spawn loop
- [ ] Simplify the overlap event after adding the loop
