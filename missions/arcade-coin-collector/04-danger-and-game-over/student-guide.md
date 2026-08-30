---
title: "Student Guide"
lesson: 4
parent: Lesson 4 — Danger and Game Over
---

# Lesson 4: Danger and Game Over

## 🎯 Your mission

Make the enemy dangerous — touching it should cost a life and reset the player. Add a proper lose condition so the game ends when all lives run out.

---

## 🧠 Today's idea

Today we're learning about:

**Event handlers and game state**

This means we are learning how to run two separate event handlers at the same time (one for coins, one for the enemy) without them interfering, and how to move the game from ‘playing’ to ‘game over’ automatically.

---

## 🔎 Explore

Open your project from Lesson 3 (or load the starter `main.ts`).

1. The coin overlap fires when `Player` touches `Food`. What would the enemy overlap look like?
2. What happens if you change a life value but don't check whether lives are still above zero before resetting the player?
3. Find the `on life zero` event. What is the difference between this and checking `if life == 0` manually every frame?

### What happens if...

- you remove the `pause` after being hit — can all lives disappear in one collision?
- the player resets to the centre vs a corner vs a random position after being hit?
- you put the position reset *outside* the `if life > 0` check?

---

## 🛠️ Design

### ⭐ Challenge 1 — Enemy is dangerous

Add a second overlap event so touching the enemy costs the player one life.

💡 This time watch for `Player` overlapping with `Enemy`.

### ⭐⭐ Challenge 2 — Reset position

After being hit, move the player back to a safe position and add a short pause so they have time to move away before the game resumes.

💡 Look in the **Game** section for a pause block.

### ⭐⭐⭐ Challenge 3 — Game over (lose)

Make the game end properly when the player runs out of lives.

💡 Look in the **Info** section for an event that fires when lives reach zero.

---

## 💡 Invent

You've completed the mission! Now see if you can:

- Show a message after being hit that says how many lives are left
- Start with 5 lives — is the game still challenging?
- Add a restart button (look for controller B)

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

- [ ] Add a second overlap event handler alongside the first
- [ ] Reduce lives and reset position when the player is hit
- [ ] Use `on life zero` to trigger a lose condition
- [ ] Test both the win and lose endings
