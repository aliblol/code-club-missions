---
title: "Student Guide"
lesson: 6
parent: Lesson 6 — Sounds and Make It Your Own
---

# Lesson 6: Sounds and Make It Your Own

## 🎯 Your mission

Add sounds and visual effects to game events, then customise the game however you like. It must still be winnable — beyond that, anything goes.

---

## 🧠 Today's idea

Today we're learning about:

**Cause and effect**

This means we are learning how every sound and visual effect is triggered by an event — catching a fresh apple *causes* a ding and sparkles, catching a rotten one *causes* a splatter sound. Good feedback tells the player exactly what happened.

---

## 🔎 Explore

Open the starter `main.ts` (the full Apple Catch game from Lesson 5).

1. Where in MakeCode can you play a sound? Look in the **Music** section.
2. The destroy block has a version that plays a visual effect for a number of milliseconds. Can you find it?
3. What is the difference between `destroy(otherSprite)` and `otherSprite.destroy(effects.confetti, 200)`?

### What happens if...

- you add a splatter effect for catching a fresh apple — does that feel right?
- you add a welcome message at the very top of the code?
- the fresh apple makes a sad sound and the rotten apple makes a happy one?

---

## 🛠️ Design

### ⭐ Challenge 1 — Catch sound and sparkle

Add a ding sound and a confetti effect when a fresh apple is caught.

💡 Add both inside the `on Player overlaps Food` block. Look in **Music** for sounds and use the effect version of destroy.

### ⭐⭐ Challenge 2 — Splatter sound

Add a different sound when the player catches a rotten apple.

### ⭐⭐⭐ Challenge 3 — Make it your own

The game is yours to change. Pick at least one idea below, or invent your own:

- Change the theme — redesign sprites: space ship catching stars, basket catching fruit
- Add a welcome screen using `game show long text` at the very top of `on start`
- Speed up over time — create variables for fall speeds that increase as the score goes up
- Add a golden apple worth 3 points that appears occasionally

The only rule: the game must still be winnable.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Add background music that loops throughout, and stops when the game ends
- Add a pause button (look in the **Controller** section for a button event)
- Share your game with someone else and watch them play

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

- [ ] Add sound effects triggered by game events
- [ ] Add a visual effect on sprite destruction
- [ ] Customise and extend the game beyond the base version


