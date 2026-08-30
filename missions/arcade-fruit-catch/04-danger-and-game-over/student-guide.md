---
title: "Student Guide"
lesson: 4
parent: Lesson 4 — Danger and Game Over
---

# Lesson 4: Danger and Game Over

## 🎯 Your mission

Make the rotten apple dangerous — hitting it costs a life and it splatters. Add a proper lose condition and messages so the game ends cleanly for both outcomes.

---

## 🧠 Today's idea

Today we're learning about:

**Event handlers and game state**

This means we are learning how to run two separate event handlers at the same time (one for fresh apples, one for rotten ones) without them interfering, and how to end the game properly when lives run out.

---

## 🔎 Explore

Open your project from Lesson 3 (or load the starter `main.ts`).

1. The fresh apple overlap watches for `Player` + `Food`. What would the rotten apple overlap watch for?
2. When the rotten apple is hit, you want a visual splatter effect. Is there a version of the destroy block that plays an effect?
3. What is the difference between `game.splash` (shows a message) and `game.over` (ends the game)?

### What happens if...

- you put the rotten apple overlap *inside* the fresh apple overlap? What goes wrong?
- the rotten apple stays on screen after being hit — what do you need to add?
- you add `game.over(false)` without first adding `on life zero`?

---

## 🛠️ Design

### ⭐ Challenge 1 — Rotten apple is dangerous

Add a second overlap event so catching a rotten apple costs the player one life.

💡 Add it separately — this time watching for `Player` overlapping with `Enemy`.

### ⭐⭐ Challenge 2 — Splatter effect

Remove the rotten apple when the player hits it, and play a visual effect.

💡 Look in the **Sprites** section — there is a version of the destroy block that plays an effect for a set number of milliseconds.

### ⭐⭐⭐ Challenge 3 — Game over

Add a message and a LOSE ending when the player runs out of lives, and a message before the WIN ending when the timer runs out.

💡 Look in the **Info** section for `on life zero`.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Add a restart button (pressing B resets lives, score, timer, and player position)
- Try different splatter effects — `fire`, `confetti`, `stars`
- What message would you show when the player wins vs loses?

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

- [ ] Add a second overlap event for the rotten apple alongside the fresh apple event
- [ ] Remove the rotten apple with a visual effect
- [ ] Add `on life zero` to trigger a lose condition with a message
- [ ] Test both endings (win via timer, lose via lives)

