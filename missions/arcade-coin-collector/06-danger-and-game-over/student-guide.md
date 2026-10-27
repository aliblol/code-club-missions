---
title: "Student Guide"
lesson: 6
parent: "Coin Collector — Mission 6 — Dodge the Enemy"
---

# Mission 6: Dodge the Enemy

## 🎯 Your mission

Make the enemy dangerous. Touching it should cost a life and move the player back to safety.

---

## 🧠 Today's idea

Today we're learning about:

**Overlap events**

An overlap event can listen for a specific pair of sprite kinds. The coin and enemy events can each respond to their own collision.

---

## 🔎 Explore

Open the starter `main.ts`.

1. The coin overlap fires when `Player` touches `Food`. What would the enemy overlap look like?
2. What happens if you change a life value but don't check whether lives are still above zero before resetting the player?
### What happens if...

- you remove the short pause after being hit?
- the player resets to the centre vs a corner vs a random position?

---

## 🛠️ Design

### ⭐ Challenge — Enemy is dangerous

Add an overlap event so touching the enemy costs one life, pauses briefly, and resets the player's position.

💡 This time watch for `Player` overlapping with `Enemy`.

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

## 🏁 Mission complete!

I can...

- [ ] Add a second overlap event handler alongside the first
- [ ] Reduce lives and reset position when the player is hit
