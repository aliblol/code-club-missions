---
title: "Student Guide"
lesson: 7
parent: "Coin Collector — Mission 7 — Add the Lose Ending"
---

# Mission 7: Add the Lose Ending

## 🎯 Your mission

Make the game end with a loss when the player runs out of lives.

## 🧠 Today's idea

**Game state events**

Instead of checking the number of lives again and again, the game can respond to the event that fires when lives reach zero.

## 🔎 Explore

Open the starter `main.ts`.

1. What happens when the player is hit?
2. What happens when the lives reach zero right now?
3. Find the event that runs when there are no lives left.

## 🛠️ Design

### ⭐ Challenge — End the game

Add an event for when lives reach zero and make the game end with a loss.

💡 Look in **Info** for `on life zero` and in **Game** for `game over LOSE`.

### ⭐⭐ Extra — Keep the final hit safe

Only reset the player's position if they still have lives remaining.

## 🏁 Mission complete!

I can...

- [ ] Use `on life zero` to detect the end of the player's lives
- [ ] Make the game end with a loss
- [ ] Test both the win and lose endings
