---
title: "Mission 3 — Don't Crash!"
layout: default
parent: Cutebot
---

# Mission 3 — Don't Crash!

This mission introduces the idea of sensing and obstacle awareness. Students learn that a robot can do more than move on a fixed path: it can respond to the world around it and make decisions when something is in the way.

The challenge encourages safe, thoughtful control, teaching students to test conditions, refine logic, and improve reliability when creating responsive behaviour.

## Starting code

{% include code-import.html %}

```typescript
function setGroup () {
    basic.showNumber(currentGroup)
    radio.setGroup(currentGroup)
}
input.onButtonPressed(Button.A, function () {
    currentGroup = currentGroup - 1
    setGroup()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == forward) {
        cuteBot.forward()
    } else if (receivedString == left) {
        cuteBot.turnleft()
    } else if (receivedString == right) {
        cuteBot.turnright()
    } else if (receivedString == backward) {
        cuteBot.backforward()
    } else if (receivedString == stop) {
        cuteBot.stopcar()
    }
})
input.onButtonPressed(Button.B, function () {
    currentGroup = currentGroup + 1
    setGroup()
})
let right = ""
let left = ""
let forward = ""
let backward = ""
let stop = ""
let currentGroup = 0
radio.setGroup(currentGroup)
stop = "stop"
backward = "backward"
forward = "forward"
left = "left"
right = "right"
let RainbowLights = "RainbowLights"
```

Load this code into [MakeCode micro:bit](https://makecode.microbit.org) and follow the student guide.
