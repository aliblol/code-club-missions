---
title: "Student Guide"
lesson: 5
parent: "Coin Collector — Mission 5 — Collect a Coin"
---

# Mission 5: Collect a Coin

## 🎯 Your mission

Make the coin collectible. When the player touches it, add a point, remove that coin, and put a new one somewhere on screen.

## 🧠 Today's idea

**Overlap events**

An overlap event runs when two sprites touch. The event gives you the two sprites so your code can react to the collision.

## 🔎 Explore

Open the starter `main.ts`.

1. Find the player and coin. What kind is each sprite?
2. Find an event for when one kind of sprite overlaps another.
3. What do you think `otherSprite` refers to when a Player overlaps a Food?

### What happens if...

- you forget to destroy the old coin?
- you destroy the coin but don't create another?

## 🛠️ Design

### ⭐ Challenge — Collect and replace

Add a Player/Food overlap event. Increase the score, destroy `otherSprite`, then create a new Food sprite at a random position.

💡 Use the **Sprites** section for the overlap and destroy blocks. Copy the coin creation code from setup to make its replacement.

## 💡 Invent

- Make each coin worth 2 points.
- Change where the new coin can appear.

## 🏁 Mission complete!

I can...

- [ ] Detect when the player touches a coin
- [ ] Increase the score
- [ ] Remove a collected coin and create a replacement
