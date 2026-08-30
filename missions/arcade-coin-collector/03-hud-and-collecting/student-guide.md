---
title: "Student Guide"
lesson: 3
parent: Lesson 3 — HUD and Collecting
---

# Lesson 3: HUD and Collecting

## 🎯 Your mission

Give the game a score, lives, and a countdown timer. Make the player able to collect coins — the score should go up and a new coin should appear each time.

---

## 🧠 Today's idea

Today we're learning about:

**Selection**

This means we are learning how a program can make choices — *if* the player touches a coin, *then* something happens. We call this an overlap event.

---

## 🔎 Explore

Open your project from Lesson 2 (or load the starter `main.ts`).

1. Where in MakeCode can you set the score and the number of lives? What do they look like when you press Play?
2. Look for an event block that fires when two sprites of specific kinds touch. Where is it?
3. What is the `otherSprite` variable in the overlap event — what does it refer to?

### What happens if...

- you set lives to `1` — does the game become harder?
- you destroy `otherSprite` inside the overlap but don't create a new coin — what happens?
- you set the countdown to `10` seconds vs `60` seconds?

---

## 🛠️ Design

### ⭐ Challenge 1 — Add the HUD

Set a starting score and number of lives, then add a countdown timer. Everything you need is in the **Info** section.

### ⭐⭐ Challenge 2 — Make the coin collectible

Add an overlap event so collecting a coin increases the score, removes the old coin, and spawns a new one at a random position.

💡 Look in the **Sprites** section. The coin that was touched is called `otherSprite` inside the event.

### ⭐⭐⭐ Challenge 3 — Win condition

Make the game end with a win when the countdown reaches zero.

💡 Look in the **Info** section for an event that fires when the timer ends.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Make each coin worth 2 points instead of 1
- Try having two coins on screen at the same time
- Change the timer length so the game is harder or easier

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
- [ ] Use an overlap event to detect when the player touches a coin
- [ ] Destroy a sprite and spawn a replacement
- [ ] Add a win condition using `on countdown end`
